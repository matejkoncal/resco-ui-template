# Resco UI starter

A small React + Vite + TypeScript project for a fully web-based [Resco Offline HTML](https://docs.resco.net/wiki/Offline_HTML) app targeting Resco Essential. [JSBridge](https://www.npmjs.com/package/@resconet/jsbridge) is installed for non-UI client APIs: the sample reads client configuration and renders a message in React. The page also works as a browser preview when no Resco client is present.

All screens, record lists, detail/create/edit forms, lookups, dialogs and navigation belong in the web app. Use non-UI JSBridge APIs to read and save data. Native MobileCRM forms, views, dialogs and navigation are not supported for this Essential app. See `AGENTS.md` for the agent instructions.

## Work locally

Use Node.js 22.12 or later:

```sh
npm ci
npm run dev
```

Edit `src/App.tsx` for your screen and `src/styles.css` for its styles. The sample `MobileCRM.Configuration.requestObject` call in `App.tsx` shows how to read client data and handle an error. JSBridge APIs work when the page runs in a Resco client. The plain browser preview does not simulate CRM data.

## Build and deploy

```sh
npm run build
```

The build writes `dist/index.html` and its assets and copies the root `resco.manifest.json` to `dist/resco.manifest.json` byte for byte. `base: './'` in `vite.config.ts` keeps the asset paths relative to `index.html`, so the whole `dist` directory can live under any Offline HTML folder. Keep the directory structure and filename capitalization intact.

The root manifest uses schema version `1`. List each entity the app accesses by its lowercase logical name in `entities`, with each name listed once. The starter only reads client configuration, so its entity list is empty.

To deploy from Studio Resco, connect GitHub, select an Essential Woodford project and this repository and branch, then use **Build and publish**. App Builder pushes a release tag in the form `resco-deploy/<branch>/<version>`; the webhook builds the app and uploads it to the linked projects. The web app automatically provides the Essential project's home UI. Studio waits for a successful upload and then publishes the selected Woodford project. Tags pushed directly from Git build and upload the linked projects without automatically publishing them.

This template contains no GitHub or Resco credentials. Do not put tokens or secrets in frontend source: every built asset is visible to users of the app.

## Start a repository

Choose **Use this template** on GitHub, or ask the Studio Resco agent to create a new UI project. Give each UI project its own repository.
