# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Aung Khant. Two independent packages, each with its own `node_modules` (no root `package.json`, no workspace tooling):

- `client/` — Vite 8 SPA (migrated from Create React App) with React 19, react-three-fiber 9 / drei 10, styled-components 6, framer-motion. Renders the whole site and pulls all list content from Sanity at runtime.
- `backend/` — Sanity Studio v6 (`sanity` package, configured in `sanity.config.js` / `sanity.cli.js`, Vite-based). It only defines content schemas and hosts the editing UI; there is no server code. Project `243wh60p`, dataset `production`. It was migrated from Studio v2, so ignore any v2 patterns you find online (`sanity.json`, `part:` imports, `createSchema`).

## Commands

Both packages use **yarn** (classic, v1); `yarn.lock` is the source of truth in each. Don't use npm: it also rewrites `yarn.lock`. Sanity v6 requires Node ≥22.12.

```bash
# client/  (first time: yarn install && cp .env.example .env)
yarn start           # = yarn dev: Vite dev server at http://localhost:3000
yarn build           # production build to client/build (Netlify publishes this folder)
yarn preview         # serve the production build (use --port 3000 so Sanity CORS allows it)
yarn lint            # ESLint flat config (eslint.config.js)
yarn test            # Vitest (jsdom) in watch mode; there are no test files yet
yarn test --run -t "name"   # run a single test once

# backend/  (first time: yarn install)
yarn start           # = yarn dev: sanity dev, Studio at http://localhost:3333 (needs a Sanity login)
yarn build           # sanity build → backend/dist
yarn lint            # ESLint (flat config, @sanity/eslint-config-studio)
npx sanity schema validate   # check schemas without starting the Studio
```

The `sanity` CLI ships with the `sanity` package; no global install is needed. In v6, `sanity start` is a deprecated alias for `sanity preview` (it serves a production build), which is why the `start` script points to `sanity dev`. Keep `typescript` on ~6.0: typescript-eslint (used by the lint config) doesn't support TypeScript 7 yet.

Linting is a separate step in both packages; builds don't run it. `client/eslint.config.js` uses `@eslint/js`, `react-hooks` and `react-refresh`, with `AppWrap`/`MotionWrap` registered as `extraHOCs` so the wrapped section exports pass. `backend/eslint.config.mjs` spreads `@sanity/eslint-config-studio`.

Vite-specific notes for the client: files containing JSX must use `.jsx`; `index.html` lives in `client/` (not `public/`) and loads `/src/index.jsx`; Vite's bundler fails on imports of names that don't exist (CRA only warned).

### Deployment

Netlify (site `aungkhant`, https://aungkhant.netlify.app) builds from GitHub `main` on every push, using `netlify.toml` at the repo root (base `client`, `yarn build`, publish `build`, Node 22). Settings in that file override the Netlify dashboard. Sanity content changes need no deploy: the site fetches them at runtime.

### Env vars (`client/.env`, gitignored; template in `client/.env.example`)

`REACT_APP_SANITY_PROJECT_ID=243wh60p`, used by `src/client.js`. The `production` dataset is publicly readable, and Sanity CORS allows `http://localhost:3000`, so the site loads real content locally with only this set.

`vite.config.js` sets `envPrefix: "REACT_APP_"`, so the CRA-era name still works. Read env vars with `import.meta.env.REACT_APP_*` (not `process.env`). They're inlined at build time; restart `yarn start` after editing `.env`.

## Client architecture

`src/App.jsx` renders the sections in order: `HeaderTwo` → `About` → `Work` → `Skills` → `Testimonial` → `Footer`, inside a styled-components `ThemeProvider` and a `BrowserRouter`. The router has no routes; it exists only because `Nav`'s logo uses `<Link>`. Navigation is plain `#anchor` links. The anchor ids `home, about, work, skills, testimonials, contact` are hard-coded in both `components/Nav/Nav.jsx` and `components/NavigationDots.jsx`, and must match the `idName` passed to `AppWrap`.

### Container / component split

Each section exists in two parallel folders:

- `src/container/<Section>/<Section>.jsx`: **logic**. It fetches Sanity data in `useEffect`, holds state, and builds the markup. Each one is exported pre-wrapped:
  `export default AppWrap(MotionWrap(Section, SectionComponent), "<anchor-id>", BgComponent)`
- `src/components/<Section>/<Section>.jsx`: **presentation only**, written as a compound component. A base component plus static sub-components (`Work.HeadText`, `Work.PortfolioItem`, …) forward `children`/props to styled elements defined in the sibling `style/<Section>.js`. These are re-exported from `components/index.js` with a `*Component` suffix (`WorkComponent`, `SkillComponent`, `TestimonialComponent`, …). Folder typo: `components/Teastimonial/`.

To change a section's look, edit `components/<Section>/style/<Section>.js` (add a sub-component if a new element is needed). To change its data or behaviour, edit `container/<Section>`. Some `container/*/style/*.js` files are empty and unused. Only `HeaderTwo` imports its own container style (the hero background image).

### HOCs (`src/wrapper/`)

- `AppWrap(Component, idName, AsComp)`: renders `AppContainer` with `id={idName}`, uses the given background styled component (`PrimaryBg` / `secondaryBg` from `globelStyle.js`) via the `as` prop, and adds `SocialMedia` on the left, `NavigationDots` on the right (active = `idName`), and a copyright line (skipped for `"home"`).
- `MotionWrap(Component, AsComp)`: framer-motion fade/slide-up when the section scrolls into view. The section's base compound component (e.g. `WorkComponent`) becomes the wrapper element via `as`.

Inside sections, per-item animation uses the variant factories in `src/Utils/motion.js` (`fadeIn(direction, type, delay, duration)`, `zoomIn`, `slideIn`, `textVariant`) with `initial="hidden" whileInView="show"`.

### Styling / theme

All styling is styled-components; there's no CSS framework, and `index.css` only does a reset and loads the font. `src/Utils/Theme.js` defines `modernTheme` (dark) and `modernLightTheme`. Use theme keys (`primary`, `secondary`, `tertiary`, `main` = muted sage accent, `line` = borders, `subtle`, `primaryBg`, `secondaryBg`, `softBlack`, `white`, …) through `${({ theme }) => theme.x}`. Shared primitives such as `AppContainer`, `HeadText`, `Ptext`, `BoldText`, background wrappers and gradients live in `components/globelStyle.js`. styled-components 6 forwards every prop to the DOM, so styling-only props must be transient (`$active`, `$toggle`). Breakpoints are hard-coded per file, commonly 450/500px (mobile), 940px (desktop nav) and 2000px (large screens).

`App.js` keeps `darkMode` state, but nothing toggles it, so only the dark theme is ever used. The dark theme is a minimal graphite palette with a single sage accent (`#8FB8AD`); the light theme was never updated to match. A few colors are still hard-coded: the translucent Nav and hero-overlay backgrounds, the loader, and the accent in `assets/logo.svg`/`menu.svg`/`close.svg` and the generated FazWaz project covers in Sanity. Keep them in sync when changing the accent.

### Hero / 3D

`container/HeaderTwo` (`id="home"`, background image `assets/herobg1.png`) renders `Nav` and `components/Hero`. `Hero` is itself wrapped in `AppWrap(Hero, "home", HeroSection)`, so the hero gets its own social bar and nav dots, and the page ends up with two elements with `id="home"`. `Hero` renders `components/canvas/Wireframe`, a code-built faceted icosahedron (graphite solid, sage wireframe and vertex dots, thin ring) with no model files. The shared wrapper `canvas/HeroScene` owns the `<Canvas>` (styled as `MyCanvas`), lights, slow auto-rotation (off under `prefers-reduced-motion`) and drag-to-spin via drei `PresentationControls`. It also places the object: `Hero` passes a ref to its text block as `avoid`, and `HeroScene` measures the canvas and text rects. At ≥1280px it centres the object in the canvas column; below that it uses the larger free gap (below or right of the text) and renders nothing if the object would be smaller than `MIN_RADIUS` (e.g. 1024×768). Theme colors come from `useTheme()`, so the object follows the accent automatically.

## Sanity data flow

`src/client.js` exports `client` (`@sanity/client`, `useCdn: true`, API version `2023-01-01`, empty token) and `urlFor(source)` (`@sanity/image-url`). Image fields are passed to `urlFor()`; project cards request a resized copy (`urlFor(img).width(720).auto("format").url()`), elsewhere the builder is passed directly as `src`.

Queries are plain GROQ `*[_type == "<name>"]` with no projections. Works are ordered by `_createdAt desc`, experiences by `year desc`, and skills by their `order` number (set in Studio; lowest first, spaced by 10). The `_type` must equal the `name` in `backend/schemas/*.js`, and every type must be listed in `schemaTypes` in `backend/schemas/index.js`. File names don't always match type names:

| Schema file | `_type` | Fields used by client | Used in |
|---|---|---|---|
| `about.js` | `abouts` | `title`, `description`, `imgUrl` | About |
| `works.js` | `works` | `title`, `description`, `projectLink`, `codeLink`, `imgUrl`, `tags[] {name, color}` | Work |
| `skills.js` | `skills` | `order`, `name`, `bgColor`, `icon` | Skills |
| `experiences.js` | `experiences` | `year`, `works[]` (each a `workExperience`: `name`, `company`, `desc[] {text}`) | Skills |
| `tstmol.js` | `testimonials` | `name`, `company`, `image`, `feedback` | Testimonial |
| `brands.js` | `brands` | `name`, `imgUrl` | Testimonial |
| `contact.js` | `contact` | `name`, `email`, `message` | unused (old contact form) |

`workExperience` is an `object` type used only inline inside `experiences.works`. `tags[].color` is stored as hex without `#`; the client passes it as a `--tag-color` CSS variable and `color-mix`es it 50% with `lightGrayColor`, so tags stay colored but muted.

The contact form (`container/Footer`) posts to Netlify Forms (`fetch("/")`, url-encoded, `form-name=contact`, honeypot `bot-field`). Netlify only accepts it because a hidden static copy of the form sits in `client/index.html`, which Netlify parses at deploy time; keep its field names in sync with the React form. Locally the POST returns 404, so the form shows its error message; it only works on the deployed site. Submissions and email notifications are managed in the Netlify dashboard (Forms). The `contact` Sanity schema is no longer written to.

The project filter in `container/Work` is a hard-coded `FILTERS` list; each entry matches works that have any of its tag `name`s (e.g. `vuejs`, `api`), so new filters must use tag names that exist in Sanity.

To add a content type: create the schema in `backend/schemas/`, add it to `schemas/index.js`, deploy or run the Studio, then query it from a container.

## Known issues (found by reading the code)

- `container/Testimonial`: `{testimonials.length && …}` renders a literal `0` when there are no testimonials.
- `container/About`: the module-level `abouts` array (referencing nonexistent `images.about01`…) is dead code, shadowed by state.
- `React.StrictMode` is commented out in `src/index.jsx`.
