import { defineConfig } from "@monstermann/barrels"

export default defineConfig([
    {
        directories: "./packages/geometry/src/*",
        files: "*.ts",
        type: "namespace",
    },
    {
        directories: "./packages/geometry/src",
        files: "*/index.ts",
        type: "flat",
    },
])
