# AK Portfolio

Personal portfolio site. `client/` is the React site; `backend/` is the Sanity Studio (v6) that holds its content.

## Run locally

Requires Node 22.12+ and yarn 1 (`npm i -g yarn`).

```bash
# Site — http://localhost:3000
cd client
yarn install
cp .env.example .env    # add EmailJS keys if you need the contact form
yarn start

# Content Studio — http://localhost:3333 (optional; needs a Sanity login with access to project 243wh60p)
cd backend
yarn install
yarn start
```

The site reads content from the public Sanity `production` dataset, so the Studio doesn't need to be running to see the site.
