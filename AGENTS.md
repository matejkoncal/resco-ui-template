# Resco UI development

- Use the installed `@resconet/jsbridge` package for Resco client APIs. Before adding or changing JSBridge calls, use `searchJsBridgeDocumentation` from the Resco MCP server to look up the relevant APIs. In OpenCode the tool may appear as `resco_searchJsBridgeDocumentation`.
- Keep the root `resco.manifest.json` at schema version `1`. Update its `entities` array when the app starts or stops accessing an entity. List each entity's lowercase logical name once. Use an empty array when the app only uses non-entity APIs such as `MobileCRM.Configuration`.
- Run `npm run build` to type-check the app and produce the Offline HTML files in `dist/`, including an exact copy of the manifest at `dist/resco.manifest.json`.
