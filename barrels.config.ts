import { defineConfig } from "@monstermann/barrels"
import { flat } from "@monstermann/barrels-flat"
import { namespace } from "@monstermann/barrels-namespace"

export default defineConfig([
    namespace({
        entries: "./packages/geometry/src/*",
    }),
    flat({
        entries: "./packages/geometry/src",
        include: ["*", "Rect/index.js"],
    }),
])
