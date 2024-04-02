import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueFacingDecoratorHmr from "vite-plugin-vue-facing-decorator-hmr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      // entry: resolve(__dirname, "src/index.ts"),
      entry: "src/index.ts",
      name: "vue-vuetify-class-lib-boilerplate",
      // the name of the output files when the build is run
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "vue",
        "vuetify",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    vueFacingDecoratorHmr(),
  ],
})
