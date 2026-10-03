# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Aung Khant. Two independent packages, each with its own `node_modules` (no root `package.json`, no workspace tooling):

- `client/` — Create React App (react-scripts 5, React 18). Renders the whole site and pulls all list content from Sanity at runtime.
- `backend/` — Sanity Studio **v2** (legacy `sanity.json` + `part:` imports, React 17). It only defines content schemas and hosts the editing UI; there is no server code. Project `243wh60p`, dataset `production`.

## Commands

Both packages use **yarn** (classic, v1); `yarn.lock` is the source of truth in each. Don't use npm: it rewrites `yarn.lock` and hits a peer-dependency conflict (`react-tilt` declares React ≤16; it works on 18). Tested on Node 22.

```bash
# client/  (first time: yarn install && cp .env.example .env)
yarn start           # dev server at http://localhost:3000
yarn build           # production build to client/build
yarn test            # Jest via react-scripts (watch mode); there are no test files yet
yarn test -t "name" --watchAll=false   # run a single test once

# backend/  (first time: yarn install)
yarn start           # sanity start: local Studio at http://localhost:3333 (needs a Sanity login)
yarn build           # sanity build
```

The `sanity` CLI comes from the local `@sanity/cli@^2` dev dependency, so no global install is needed. Don't upgrade it to v3: the Studio is v2.

Linting: the client uses CRA's built-in ESLint (`react-app` config), reported by `yarn start` / `yarn build`. `backend/.eslintrc` extends `@sanity/eslint-config-studio`.

### Env vars (`client/.env`, gitignored; template in `client/.env.example`)

- `REACT_APP_SANITY_PROJECT_ID=243wh60p`, used by `src/client.js`. The `production` dataset is publicly readable, and Sanity CORS allows `http://localhost:3000`, so the site loads real content locally with only this set.
- `REACT_APP_EMAILJS_SERVICE_ID`, `REACT_APP_EMAILJS_TEMPLATE_ID`, `REACT_APP_EMAILJS_PUBLIC_KEY`, used by `container/Footer`. Only the contact form needs them.

CRA reads `.env` only at startup, so restart `yarn start` after changing it.

## Client architecture

`src/App.js` renders the sections in order: `HeaderTwo` → `About` → `Work` → `Skills` → `Testimonial` → `Footer`, inside a styled-components `ThemeProvider` and a `BrowserRouter`. The router has no routes; it exists only because `Nav`'s logo uses `<Link>`. Navigation is plain `#anchor` links. The anchor ids `home, about, work, skills, testimonials, contact` are hard-coded in both `components/Nav/Nav.jsx` and `components/NavigationDots.jsx`, and must match the `idName` passed to `AppWrap`.

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

All styling is styled-components; there's no CSS framework, and `index.css` only does a reset and loads the font. `src/Utils/Theme.js` defines `modernTheme` (dark) and `modernLightTheme`. Use theme keys (`primary`, `secondary`, `tertiary`, `main` = cyan accent, `primaryBg`, `secondaryBg`, `softBlack`, `white`, …) through `${({ theme }) => theme.x}`. Shared primitives such as `AppContainer`, `HeadText`, `Ptext`, `BoldText`, background wrappers and gradients live in `components/globelStyle.js`. Breakpoints are hard-coded per file, commonly 450/500px (mobile), 940px (desktop nav) and 2000px (large screens).

`App.js` keeps `darkMode` state, but nothing toggles it, so only the dark theme is ever used. Several colors are also hard-coded (the Nav background, the loader, `SocialMedia` icon color), so the light theme is incomplete.

### Hero / 3D

`container/HeaderTwo` (`id="home"`, background image `assets/herobg1.png`) renders `Nav` and `components/Hero`. `Hero` is itself wrapped in `AppWrap(Hero, "home", HeroSection)`, so the hero gets its own social bar and nav dots, and the page ends up with two elements with `id="home"`. `Hero` renders `components/canvas/Computers`, a react-three-fiber `<Canvas>` (styled as `MyCanvas`) with `frameloop="demand"` and horizontal-only `OrbitControls`. It loads `public/sci_-_fi_computer_game_ready/scene.gltf` via `useGLTF`, and its scale and position change with `matchMedia` breakpoints (≤500px, 501–1279px). `components/Loader` shows load progress through drei's `useProgress`. `public/desktop_pc/` is an unused alternate model.

## Sanity data flow

`src/client.js` exports `client` (`@sanity/client`, `useCdn: true`, API version `2023-01-01`, empty token) and `urlFor(source)` (`@sanity/image-url`). Image fields are passed to `urlFor()` directly as `src`.

Queries are plain GROQ `*[_type == "<name>"]` with no projections, ordering or filters. The `_type` must equal the `name` in `backend/schemas/*.js`, and every type must be registered in `backend/schemas/schema.js`. File names don't always match type names:

| Schema file | `_type` | Fields used by client | Used in |
|---|---|---|---|
| `about.js` | `abouts` | `title`, `description`, `imgUrl` | About |
| `works.js` | `works` | `title`, `description`, `projectLink`, `codeLink`, `imgUrl`, `tags[] {name, color}` | Work |
| `skills.js` | `skills` | `name`, `bgColor`, `icon` | Skills |
| `experiences.js` | `experiences` | `year`, `works[]` (each a `workExperience`: `name`, `company`, `desc[] {text}`) | Skills |
| `tstmol.js` | `testimonials` | `name`, `company`, `image`, `feedback` | Testimonial |
| `brands.js` | `brands` | `name`, `imgUrl` | Testimonial |
| `contact.js` | `contact` | `name`, `email`, `message` | Footer (write) |

`workExperience` is declared as a `document` but is only used inline inside `experiences.works`. `tags[].color` is stored as hex without `#`, because the client prepends it.

The contact form (`container/Footer`) first calls `client.create({ _type: "contact", … })` and only sends the EmailJS email inside its `.then`. The client has no token, and Sanity normally rejects unauthenticated writes. In that case the email is never sent, and since there's no `.catch`, the button stays on "Sending".

To add a content type: create the schema in `backend/schemas/`, register it in `schema.js`, deploy or run the Studio, then query it from a container.

## Known issues (found by reading the code)

- `container/Work`: the category filter does `work.tags.includes(item)` on an array of `{name, color}` objects, so every filter except "All" shows nothing. The categories are hard-coded. `animateCard` state is set but never used.
- `container/Testimonial`: `{testimonials.length && …}` renders a literal `0` when there are no testimonials.
- `container/About`: the module-level `abouts` array (referencing nonexistent `images.about01`…) is dead code, shadowed by state.
- Undefined theme keys: `theme.primry` (typo, `components/Work/style/Work.js`) and `theme.grayColor` (`globelStyle.js`).
- `SocialMedia` icons are not links.
- `React.StrictMode` is commented out in `src/index.js`.
