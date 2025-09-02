import { defineConfig } from "tsdown"

export default defineConfig({
    clean: true,
    dts: true,
    entry: ["./src/**.{js,ts}"],
    format: "esm",
    treeshake: false,
    unbundle: true,
    copy: [
        { from: "./src/Rect/index.d.ts", to: "./dist/Rect/index.d.ts" },
    ],
})
