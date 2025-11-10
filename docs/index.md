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
npm install -D @monstermann/unplugin-geometry
```

```sh [pnpm]
pnpm -D add @monstermann/unplugin-geometry
```

```sh [yarn]
yarn -D add @monstermann/unplugin-geometry
```

```sh [bun]
bun -D add @monstermann/unplugin-geometry
```

:::

### Usage

::: code-group

```ts [Vite]
// vite.config.ts
import geometry from "@monstermann/unplugin-geometry/vite";

export default defineConfig({
    plugins: [geometry()],
});
```

```ts [Rollup]
// rollup.config.js
import geometry from "@monstermann/unplugin-geometry/rollup";

export default {
    plugins: [geometry()],
};
```

```ts [Rolldown]
// rolldown.config.js
import geometry from "@monstermann/unplugin-geometry/rolldown";

export default {
    plugins: [geometry()],
};
```

```ts [Webpack]
// webpack.config.js
const geometry = require("@monstermann/unplugin-geometry/webpack");

module.exports = {
    plugins: [geometry()],
};
```

```ts [Rspack]
// rspack.config.js
const geometry = require("@monstermann/unplugin-geometry/rspack");

module.exports = {
    plugins: [geometry()],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import geometry from "@monstermann/unplugin-geometry/esbuild";

build({
    plugins: [geometry()],
});
```

:::
