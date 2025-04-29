import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "happy-dom",
    globals: true,
    exclude: ["tests/e2e", "node_modules"],
    setupFiles: "./tests/setup/vitest.setup.ts",
  },
});
