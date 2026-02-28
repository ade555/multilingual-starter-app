// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { lingoCompilerPlugin } from "@lingo.dev/compiler/vite"; // import from Lingo.dev

export default defineConfig({
  plugins: [
    // lingoCompilerPlugin
    lingoCompilerPlugin({
      sourceRoot: "src",
      sourceLocale: "en",
      targetLocales: ["es", "de", "fr"],
      models: "lingo.dev",
      dev: {
        usePseudotranslator: false,
      },
    }),
    react(),
  ],
});
