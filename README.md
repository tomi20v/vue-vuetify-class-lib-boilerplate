# Vue 3 + Vuetify 3 + TypeScript + Vite + vue-facing-decorator for lib development

Just a boilerplate put together with aforementioned libs and objective

## things to do after checkout

- set project/file names in
  - package.json.name
  - vite.config.ts
- develop in src/
  - ```docker-compose up```
- build
  - ```npm run build```
- publish/copy to target project
- if you have problems of vuetify components not being registered, you can try including all components and directives
  to the createVuetify({...}) call
  ```import * as components from "vuetify/components";```
  ```import * as directives from "vuetify/directives";```

