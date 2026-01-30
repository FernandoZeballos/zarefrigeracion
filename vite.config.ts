import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),

    { enforce: "pre", ...mdx() },

    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    tailwindcss(),
    checker({ typescript: true }),
  ],
});
