---
aside: true
---

# geometry

<Badge type="info" class="size">
    <span>Minified</span>
    <span>8.00 KB</span>
</Badge>

<Badge type="info" class="size">
    <span>Minzipped</span>
    <span>2.00 KB</span>
</Badge>

**Functional geometry utilities.**

## Example

```ts
import { Rect } from "@monstermann/geometry";

const anchorElement = document.querySelector(".anchor");
const popoverElement = document.querySelector(".popover");

const boundaryRect = pipe(Rect.fromWindow(), Rect.shrink(20));

const anchorRect = Rect.fromElement(anchorElement);

const popoverRect = pipe(
    Rect.fromElement(popoverElement),
    Rect.alignTop(anchorRect),
    Rect.placeRightOf(anchorRect, 10),
    Rect.clamp(boundaryRect),
);

Object.assign(popoverElement.style, {
    position: "absolute",
    translate: `transform(${popoverRect.left}px, ${popoverRect.top}px)`,
    maxHeight: `${boundaryRect.height}px`,
    maxWidth: `${boundaryRect.width}px`,
});
```

## Installation

::: code-group

```sh [npm]
npm install @monstermann/geometry
```

```sh [pnpm]
pnpm add @monstermann/geometry
```

```sh [yarn]
yarn add @monstermann/geometry
```

```sh [bun]
bun add @monstermann/geometry
```

:::

## Tree-shaking

### Installation

::: code-group

```sh [npm]
npm install -D @monstermann/tree-shake-geometry @monstermann/unplugin-tree-shake-import-namespaces
```

```sh [pnpm]
pnpm -D add @monstermann/tree-shake-geometry @monstermann/unplugin-tree-shake-import-namespaces
```

```sh [yarn]
yarn -D add @monstermann/tree-shake-geometry @monstermann/unplugin-tree-shake-import-namespaces
```

```sh [bun]
bun -D add @monstermann/tree-shake-geometry @monstermann/unplugin-tree-shake-import-namespaces
```

:::

### Usage

::: code-group

```ts [Vite]
// vite.config.ts
import treeshake from "@monstermann/unplugin-tree-shake-import-namespaces/vite";
import treeshakeGeometry from "@monstermann/tree-shake-geometry";

export default defineConfig({
    plugins: [
        treeshake({
            resolve: [treeshakeGeometry],
        }),
    ],
});
```

```ts [Rollup]
// rollup.config.js
import treeshake from "@monstermann/unplugin-tree-shake-import-namespaces/rollup";
import treeshakeGeometry from "@monstermann/tree-shake-geometry";

export default {
    plugins: [
        treeshake({
            resolve: [treeshakeGeometry],
        }),
    ],
};
```

```ts [Rolldown]
// rolldown.config.js
import treeshake from "@monstermann/unplugin-tree-shake-import-namespaces/rolldown";
import treeshakeGeometry from "@monstermann/tree-shake-geometry";

export default {
    plugins: [
        treeshake({
            resolve: [treeshakeGeometry],
        }),
    ],
};
```

```ts [Webpack]
// webpack.config.js
const treeshake = require("@monstermann/unplugin-tree-shake-import-namespaces/webpack");
const treeshakeGeometry = require("@monstermann/tree-shake-geometry");

module.exports = {
    plugins: [
        treeshake({
            resolve: [treeshakeGeometry],
        }),
    ],
};
```

```ts [Rspack]
// rspack.config.js
const treeshake = require("@monstermann/unplugin-tree-shake-import-namespaces/rspack");
const treeshakeGeometry = require("@monstermann/tree-shake-geometry");

module.exports = {
    plugins: [
        treeshake({
            resolve: [treeshakeGeometry],
        }),
    ],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import treeshake from "@monstermann/unplugin-tree-shake-import-namespaces/esbuild";
import treeshakeGeometry from "@monstermann/tree-shake-geometry";

build({
    plugins: [
        treeshake({
            resolve: [treeshakeGeometry],
        }),
    ],
});
```

:::
