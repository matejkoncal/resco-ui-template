# Resco UI starter

A small React + Vite + TypeScript project for a custom [Resco Offline HTML](https://docs.resco.net/wiki/Offline_HTML) screen. [JSBridge](https://www.npmjs.com/package/@resconet/jsbridge) is installed and the sample screen reads the client configuration and opens a native alert. The page also works as a browser preview when no Resco client is present.

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

To deploy from Studio Resco, connect GitHub, select this repository and a Resco connection and project, then ask the App Builder agent to release the branch. App Builder uses release tags in the form `resco-deploy/<branch>/<version>`. The optional `HomeReplacement` setting replaces the mobile app's home screen. Publish the Resco project after reviewing the uploaded files and home screen setting.

This template contains no GitHub or Resco credentials. Do not put tokens or secrets in frontend source: every built asset is visible to users of the app.

## Start a repository

Choose **Use this template** on GitHub, or ask the Studio Resco agent to create a new UI project. Give each UI project its own repository.
