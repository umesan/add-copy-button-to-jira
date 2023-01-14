import { crx, defineManifest } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import manifest from "./src/manifest.json";

const common = {
  plugins: [react(), crx({ manifest })],
};

const develop = {
  ...common,
  build: {
    outDir: "dist/develop",
  },
};

const production = {
  ...common,
  build: {
    outDir: "dist/production",
  },
};

export default defineConfig(({ command }) => {
  if (command === "build") {
    return production;
  }
  return develop;
});
