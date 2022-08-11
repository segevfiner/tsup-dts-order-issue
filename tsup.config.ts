import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    sourcemap: true,
    dts: true,
  },
  {
    entry: ["browser/index.ts"],
    outDir: "dist/browser",
    format: ["esm"],
    external: [".."],
    sourcemap: true,
    dts: true,
    tsconfig: "browser/tsconfig.json",
  },
  {
    entry: ["node/index.ts"],
    outDir: "dist/node",
    format: ["cjs"],
    external: [".."],
    sourcemap: true,
    dts: true,
    tsconfig: "node/tsconfig.json",
  },
]);
