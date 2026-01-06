<div align="center">

<h1>geometry</h1>

![Minified](https://img.shields.io/badge/Minified-8.00_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff) ![Minzipped](https://img.shields.io/badge/Minzipped-2.00_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff)

**Functional geometry utilities.**

[Documentation](https://MichaelOstermann.github.io/geometry)

</div>

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

## Tree-shaking

### Installation

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

### Usage

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

## Rect

### alignBottom

```ts
function Rect.alignBottom(target: Rect, source: Rect): Rect
```

Aligns the bottom edge of the `target` rectangle to the bottom edge of the `source` rectangle by moving the `target` rectangle vertically.

#### Example

```ts [data-first]
Rect.alignBottom(
    { left: 10, top: 10, width: 100, height: 50 },
    { left: 50, top: 30, width: 80, height: 40 },
);
// { left: 10, top: 20, width: 100, height: 50 }
```

```ts [data-last]
pipe(
    { left: 10, top: 10, width: 100, height: 50 },
    Rect.alignBottom({ left: 50, top: 30, width: 80, height: 40 }),
);
// { left: 10, top: 20, width: 100, height: 50 }
```

### alignCenter

```ts
function Rect.alignCenter(target: Rect, source: Rect): Rect
```

Aligns the center point of the `target` rectangle to the center point of the `source` rectangle by moving the `target` rectangle both horizontally and vertically.

#### Example

```ts [data-first]
Rect.alignCenter(
    { left: 10, top: 10, width: 100, height: 50 },
    { left: 50, top: 30, width: 80, height: 40 },
);
// { left: 50, top: 40, width: 100, height: 50 }
```

```ts [data-last]
pipe(
    { left: 10, top: 10, width: 100, height: 50 },
    Rect.alignCenter({ left: 50, top: 30, width: 80, height: 40 }),
);
// { left: 50, top: 40, width: 100, height: 50 }
```

### alignCenterX

```ts
function Rect.alignCenterX(target: Rect, source: Rect): Rect
```

Aligns the horizontal center of the `target` rectangle to the horizontal center of the `source` rectangle by moving the `target` rectangle horizontally only.

#### Example

```ts [data-first]
Rect.alignCenterX(
    { left: 10, top: 10, width: 100, height: 50 },
    { left: 50, top: 30, width: 80, height: 40 },
);
// { left: 50, top: 10, width: 100, height: 50 }
```

```ts [data-last]
pipe(
    { left: 10, top: 10, width: 100, height: 50 },
    Rect.alignCenterX({ left: 50, top: 30, width: 80, height: 40 }),
);
// { left: 50, top: 10, width: 100, height: 50 }
```

### alignCenterY

```ts
function Rect.alignCenterY(target: Rect, source: Rect): Rect
```

Aligns the vertical center of the `target` rectangle to the vertical center of the `source` rectangle by moving the `target` rectangle vertically only.

#### Example

```ts [data-first]
Rect.alignCenterY(
    { left: 10, top: 10, width: 100, height: 50 },
    { left: 50, top: 30, width: 80, height: 40 },
);
// { left: 10, top: 25, width: 100, height: 50 }
```

```ts [data-last]
pipe(
    { left: 10, top: 10, width: 100, height: 50 },
    Rect.alignCenterY({ left: 50, top: 30, width: 80, height: 40 }),
);
// { left: 10, top: 25, width: 100, height: 50 }
```

### alignLeft

```ts
function Rect.alignLeft(target: Rect, source: Rect): Rect
```

Aligns the left edge of the `target` rectangle to the left edge of the `source` rectangle by moving the `target` rectangle horizontally.

#### Example

```ts [data-first]
Rect.alignLeft(
    { left: 10, top: 10, width: 100, height: 50 },
    { left: 50, top: 30, width: 80, height: 40 },
);
// { left: 50, top: 10, width: 100, height: 50 }
```

```ts [data-last]
pipe(
    { left: 10, top: 10, width: 100, height: 50 },
    Rect.alignLeft({ left: 50, top: 30, width: 80, height: 40 }),
);
// { left: 50, top: 10, width: 100, height: 50 }
```

### alignRight

```ts
function Rect.alignRight(target: Rect, source: Rect): Rect
```

Aligns the right edge of the `target` rectangle to the right edge of the `source` rectangle by moving the `target` rectangle horizontally.

#### Example

```ts [data-first]
Rect.alignRight(
    { left: 10, top: 10, width: 100, height: 50 },
    { left: 50, top: 30, width: 80, height: 40 },
);
// { left: 30, top: 10, width: 100, height: 50 }
```

```ts [data-last]
pipe(
    { left: 10, top: 10, width: 100, height: 50 },
    Rect.alignRight({ left: 50, top: 30, width: 80, height: 40 }),
);
// { left: 30, top: 10, width: 100, height: 50 }
```

### alignTop

```ts
function Rect.alignTop(target: Rect, source: Rect): Rect
```

Aligns the top edge of the `target` rectangle to the top edge of the `source` rectangle by moving the `target` rectangle vertically.

#### Example

```ts [data-first]
Rect.alignTop(
    { left: 10, top: 10, width: 100, height: 50 },
    { left: 50, top: 30, width: 80, height: 40 },
);
// { left: 10, top: 30, width: 100, height: 50 }
```

```ts [data-last]
pipe(
    { left: 10, top: 10, width: 100, height: 50 },
    Rect.alignTop({ left: 50, top: 30, width: 80, height: 40 }),
);
// { left: 10, top: 30, width: 100, height: 50 }
```

### area

```ts
function Rect.area(rect: Rect): number
```

Calculates the area of a rectangle by multiplying its width and height.

#### Example

```ts [data-first]
Rect.area({ left: 10, top: 20, width: 100, height: 50 });
// 5000
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.area());
// 5000
```

### bottom

```ts
function Rect.bottom(rect: Rect): number
```

Gets the bottom y-coordinate of a rectangle.

#### Example

```ts [data-first]
Rect.bottom({ left: 10, top: 20, width: 100, height: 50 });
// 70
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.bottom());
// 70
```

### centerX

```ts
function Rect.centerX(rect: Rect): number
```

Gets the horizontal center x-coordinate of a rectangle.

#### Example

```ts [data-first]
Rect.centerX({ left: 10, top: 20, width: 100, height: 50 });
// 60
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.centerX());
// 60
```

### centerY

```ts
function Rect.centerY(rect: Rect): number
```

Gets the vertical center y-coordinate of a rectangle.

#### Example

```ts [data-first]
Rect.centerY({ left: 10, top: 20, width: 100, height: 50 });
// 45
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.centerY());
// 45
```

### clamp

```ts
function Rect.clamp(target: Rect, source: Rect): Rect
```

Constrains the `target` rectangle to fit within the boundaries of the `source` rectangle, adjusting position and size as needed.

#### Example

```ts [data-first]
Rect.clamp(
    { left: 50, top: 60, width: 200, height: 100 },
    { left: 0, top: 0, width: 150, height: 120 },
);
// { left: 0, top: 0, width: 150, height: 100 }
```

```ts [data-last]
pipe(
    { left: 50, top: 60, width: 200, height: 100 },
    Rect.clamp({ left: 0, top: 0, width: 150, height: 120 }),
);
// { left: 0, top: 0, width: 150, height: 100 }
```

### contain

```ts
function Rect.contain(target: Rect, source: Rect): Rect
```

Scales the `target` rectangle down proportionally so it fits entirely within the `source` rectangle while maintaining its aspect ratio, then centers it within the `source`.

#### Example

```ts [data-first]
Rect.contain(
    { left: 10, top: 20, width: 200, height: 100 },
    { left: 0, top: 0, width: 150, height: 120 },
);
// { left: 37.5, top: 30, width: 75, height: 60 }
```

```ts [data-last]
pipe(
    { left: 10, top: 20, width: 200, height: 100 },
    Rect.contain({ left: 0, top: 0, width: 150, height: 120 }),
);
// { left: 37.5, top: 30, width: 75, height: 60 }
```

### contains

```ts
function Rect.contains(a: Rect, b: Rect): boolean
```

Checks if rectangle `a` completely contains rectangle `b` within its boundaries.

#### Example

```ts [data-first]
Rect.contains(
    { left: 0, top: 0, width: 100, height: 100 },
    { left: 10, top: 20, width: 50, height: 30 },
);
// true
```

```ts [data-last]
pipe(
    { left: 0, top: 0, width: 100, height: 100 },
    Rect.contains({ left: 10, top: 20, width: 50, height: 30 }),
);
// true
```

### cover

```ts
function Rect.cover(target: Rect, source: Rect): Rect
```

Scales the `target` rectangle up proportionally so it completely covers the `source` rectangle while maintaining its aspect ratio, then centers it within the `source`.

#### Example

```ts [data-first]
Rect.cover(
    { left: 10, top: 20, width: 100, height: 50 },
    { left: 0, top: 0, width: 150, height: 120 },
);
// { left: -75, top: -30, width: 300, height: 150 }
```

```ts [data-last]
pipe(
    { left: 10, top: 20, width: 100, height: 50 },
    Rect.cover({ left: 0, top: 0, width: 150, height: 120 }),
);
// { left: -75, top: -30, width: 300, height: 150 }
```

### distance

```ts
function Rect.distance(a: Rect, b: Rect): number
```

Calculates the shortest distance between two rectangles. Returns 0 if the rectangles intersect.

#### Example

```ts [data-first]
Rect.distance(
    { left: 0, top: 0, width: 50, height: 50 },
    { left: 100, top: 0, width: 50, height: 50 },
);
// 50
```

```ts [data-last]
pipe(
    { left: 0, top: 0, width: 50, height: 50 },
    Rect.distance({ left: 100, top: 0, width: 50, height: 50 }),
);
// 50
```

### dropBottomPct

```ts
function Rect.dropBottomPct(rect: Rect, amount: number): Rect
```

Removes a percentage of the rectangle's height from the bottom edge. The amount should be between 0 and 1.

#### Example

```ts [data-first]
Rect.dropBottomPct({ left: 10, top: 20, width: 100, height: 80 }, 0.25);
// { left: 10, top: 20, width: 100, height: 60 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropBottomPct(0.25));
// { left: 10, top: 20, width: 100, height: 60 }
```

### dropBottomPx

```ts
function Rect.dropBottomPx(rect: Rect, amount: number): Rect
```

Removes a specified number of pixels from the rectangle's height at the bottom edge.

#### Example

```ts [data-first]
Rect.dropBottomPx({ left: 10, top: 20, width: 100, height: 80 }, 20);
// { left: 10, top: 20, width: 100, height: 60 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropBottomPx(20));
// { left: 10, top: 20, width: 100, height: 60 }
```

### dropLeftPct

```ts
function Rect.dropLeftPct(rect: Rect, amount: number): Rect
```

Removes a percentage of the rectangle's width from the left edge, moving the left position rightward. The amount should be between 0 and 1.

#### Example

```ts [data-first]
Rect.dropLeftPct({ left: 10, top: 20, width: 100, height: 80 }, 0.25);
// { left: 35, top: 20, width: 75, height: 80 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropLeftPct(0.25));
// { left: 35, top: 20, width: 75, height: 80 }
```

### dropLeftPx

```ts
function Rect.dropLeftPx(rect: Rect, amount: number): Rect
```

Removes a specified number of pixels from the rectangle's width at the left edge, moving the left position rightward.

#### Example

```ts [data-first]
Rect.dropLeftPx({ left: 10, top: 20, width: 100, height: 80 }, 25);
// { left: 35, top: 20, width: 75, height: 80 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropLeftPx(25));
// { left: 35, top: 20, width: 75, height: 80 }
```

### dropRightPct

```ts
function Rect.dropRightPct(rect: Rect, amount: number): Rect
```

Removes a percentage of the rectangle's width from the right edge. The amount should be between 0 and 1.

#### Example

```ts [data-first]
Rect.dropRightPct({ left: 10, top: 20, width: 100, height: 80 }, 0.25);
// { left: 10, top: 20, width: 75, height: 80 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropRightPct(0.25));
// { left: 10, top: 20, width: 75, height: 80 }
```

### dropRightPx

```ts
function Rect.dropRightPx(rect: Rect, amount: number): Rect
```

Removes a specified number of pixels from the rectangle's width at the right edge.

#### Example

```ts [data-first]
Rect.dropRightPx({ left: 10, top: 20, width: 100, height: 80 }, 25);
// { left: 10, top: 20, width: 75, height: 80 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropRightPx(25));
// { left: 10, top: 20, width: 75, height: 80 }
```

### dropTopPct

```ts
function Rect.dropTopPct(rect: Rect, amount: number): Rect
```

Removes a percentage of the rectangle's height from the top edge, moving the top position downward. The amount should be between 0 and 1.

#### Example

```ts [data-first]
Rect.dropTopPct({ left: 10, top: 20, width: 100, height: 80 }, 0.25);
// { left: 10, top: 40, width: 100, height: 60 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropTopPct(0.25));
// { left: 10, top: 40, width: 100, height: 60 }
```

### dropTopPx

```ts
function Rect.dropTopPx(rect: Rect, amount: number): Rect
```

Removes a specified number of pixels from the rectangle's height at the top edge, moving the top position downward.

#### Example

```ts [data-first]
Rect.dropTopPx({ left: 10, top: 20, width: 100, height: 80 }, 20);
// { left: 10, top: 40, width: 100, height: 60 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropTopPx(20));
// { left: 10, top: 40, width: 100, height: 60 }
```

### expand

```ts
function Rect.expand(rect: Rect, amount: number): Rect
```

Expands the rectangle in all directions by the specified amount.

#### Example

```ts [data-first]
Rect.expand({ left: 10, top: 20, width: 100, height: 50 }, 10);
// { left: 0, top: 10, width: 120, height: 70 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.expand(10));
// { left: 0, top: 10, width: 120, height: 70 }
```

### expandX

```ts
function Rect.expandX(rect: Rect, amount: number): Rect
```

Expands the rectangle horizontally by the specified amount.

#### Example

```ts [data-first]
Rect.expandX({ left: 10, top: 20, width: 100, height: 50 }, 10);
// { left: 0, top: 20, width: 120, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.expandX(10));
// { left: 0, top: 20, width: 120, height: 50 }
```

### expandY

```ts
function Rect.expandY(rect: Rect, amount: number): Rect
```

Expands the rectangle vertically by the specified amount.

#### Example

```ts [data-first]
Rect.expandY({ left: 10, top: 20, width: 100, height: 50 }, 10);
// { left: 10, top: 10, width: 100, height: 70 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.expandY(10));
// { left: 10, top: 10, width: 100, height: 70 }
```

### fromDOMRect

```ts
function Rect.fromDOMRect(rect: DOMRectReadOnly): Rect
```

Converts a DOMRectReadOnly object (from getBoundingClientRect or similar) into a Rect.

#### Example

```ts [data-first]
const domRect = element.getBoundingClientRect();
Rect.fromDOMRect(domRect);
// { left: 10, top: 20, width: 100, height: 50 }
```

```ts [data-last]
const domRect = element.getBoundingClientRect();
pipe(domRect, Rect.fromDOMRect());
// { left: 10, top: 20, width: 100, height: 50 }
```

### fromEdges

```ts
function Rect.fromEdges(edges: { bottom: number, left: number, right: number, top: number }): Rect
```

Creates a rectangle from edge coordinates.

#### Example

```ts [data-first]
Rect.fromEdges({ left: 10, top: 20, right: 110, bottom: 70 });
// { left: 10, top: 20, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, right: 110, bottom: 70 }, Rect.fromEdges());
// { left: 10, top: 20, width: 100, height: 50 }
```

### fromElement

```ts
function Rect.fromElement(element: HTMLElement): Rect
```

Creates a rectangle from an HTML element's bounding client rectangle.

#### Example

```ts [data-first]
const div = document.querySelector("div");
Rect.fromElement(div);
// { left: 10, top: 20, width: 100, height: 50 }
```

```ts [data-last]
const div = document.querySelector("div");
pipe(div, Rect.fromElement());
// { left: 10, top: 20, width: 100, height: 50 }
```

### fromWindow

```ts
function Rect.fromWindow(): Rect
```

Creates a rectangle representing the browser window's viewport dimensions.

#### Example

```ts [data-first]
Rect.fromWindow();
// { left: 0, top: 0, width: 1920, height: 1080 }
```

```ts [data-last]
pipe(Rect.fromWindow());
// { left: 0, top: 0, width: 1920, height: 1080 }
```

### height

```ts
function Rect.height(rect: Rect): number
```

Gets the height of a rectangle.

#### Example

```ts [data-first]
Rect.height({ left: 10, top: 20, width: 100, height: 50 });
// 50
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.height());
// 50
```

### intersection

```ts
function Rect.intersection(a: Rect, b: Rect): Rect
```

Calculates the intersection rectangle of two rectangles. Returns the origin rectangle if they don't intersect.

#### Example

```ts [data-first]
Rect.intersection(
    { left: 0, top: 0, width: 50, height: 50 },
    { left: 25, top: 25, width: 50, height: 50 },
);
// { left: 25, top: 25, width: 25, height: 25 }
```

```ts [data-last]
pipe(
    { left: 0, top: 0, width: 50, height: 50 },
    Rect.intersection({ left: 25, top: 25, width: 50, height: 50 }),
);
// { left: 25, top: 25, width: 25, height: 25 }
```

### intersects

```ts
function Rect.intersects(a: Rect, b: Rect): boolean
```

Checks if two rectangles intersect or overlap with each other.

#### Example

```ts [data-first]
Rect.intersects(
    { left: 0, top: 0, width: 50, height: 50 },
    { left: 25, top: 25, width: 50, height: 50 },
);
// true
```

```ts [data-last]
pipe(
    { left: 0, top: 0, width: 50, height: 50 },
    Rect.intersects({ left: 25, top: 25, width: 50, height: 50 }),
);
// true
```

### isEmpty

```ts
function Rect.isEmpty(rect: Rect): boolean
```

Checks if a rectangle is empty (has zero width or zero height).

#### Example

```ts [data-first]
Rect.isEmpty({ left: 10, top: 20, width: 0, height: 50 });
// true
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 0, height: 50 }, Rect.isEmpty());
// true
```

### isEqual

```ts
function Rect.isEqual(a: Rect, b: Rect): boolean
```

Checks if two rectangles are equal by comparing their position and dimensions.

#### Example

```ts [data-first]
Rect.isEqual(
    { left: 10, top: 20, width: 100, height: 50 },
    { left: 10, top: 20, width: 100, height: 50 },
);
// true
```

```ts [data-last]
pipe(
    { left: 10, top: 20, width: 100, height: 50 },
    Rect.isEqual({ left: 10, top: 20, width: 100, height: 50 }),
);
// true
```

### isOrigin

```ts
function Rect.isOrigin(rect: Rect): boolean
```

Checks if a rectangle is the origin rectangle (positioned at 0,0 with zero width and height).

#### Example

```ts [data-first]
Rect.isOrigin({ left: 0, top: 0, width: 0, height: 0 });
// true
```

```ts [data-last]
pipe({ left: 0, top: 0, width: 0, height: 0 }, Rect.isOrigin());
// true
```

### left

```ts
function Rect.left(rect: Rect): number
```

Gets the left x-coordinate of a rectangle.

#### Example

```ts [data-first]
Rect.left({ left: 10, top: 20, width: 100, height: 50 });
// 10
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.left());
// 10
```

### map

```ts
function Rect.map(rect: Rect, transform: (rect: Rect) => Partial<Rect>): Rect
```

Applies a transformation function to a rectangle, merging the returned partial rectangle with the original.

#### Example

```ts [data-first]
Rect.map({ left: 10, top: 20, width: 100, height: 50 }, (r) => ({
    width: r.width * 2,
}));
// { left: 10, top: 20, width: 200, height: 50 }
```

```ts [data-last]
pipe(
    { left: 10, top: 20, width: 100, height: 50 },
    Rect.map((r) => ({ width: r.width * 2 })),
);
// { left: 10, top: 20, width: 200, height: 50 }
```

### merge

```ts
function Rect.merge(target: Rect, source: Partial<Rect>): Rect
```

Merges a partial rectangle into a target rectangle, creating a new rectangle with updated properties.

#### Example

```ts [data-first]
Rect.merge(
    { left: 10, top: 20, width: 100, height: 50 },
    { width: 150, height: 75 },
);
// { left: 10, top: 20, width: 150, height: 75 }
```

```ts [data-last]
pipe(
    { left: 10, top: 20, width: 100, height: 50 },
    Rect.merge({ width: 150, height: 75 }),
);
// { left: 10, top: 20, width: 150, height: 75 }
```

### moveBottomTo

```ts
function Rect.moveBottomTo(rect: Rect, bottom: number): Rect
```

Moves the rectangle so its bottom edge is positioned at the specified y-coordinate.

#### Example

```ts [data-first]
Rect.moveBottomTo({ left: 10, top: 20, width: 100, height: 50 }, 100);
// { left: 10, top: 50, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.moveBottomTo(100));
// { left: 10, top: 50, width: 100, height: 50 }
```

### moveLeftTo

```ts
function Rect.moveLeftTo(rect: Rect, left: number): Rect
```

Moves the rectangle so its left edge is positioned at the specified x-coordinate.

#### Example

```ts [data-first]
Rect.moveLeftTo({ left: 10, top: 20, width: 100, height: 50 }, 50);
// { left: 50, top: 20, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.moveLeftTo(50));
// { left: 50, top: 20, width: 100, height: 50 }
```

### moveRightTo

```ts
function Rect.moveRightTo(rect: Rect, right: number): Rect
```

Moves the rectangle so its right edge is positioned at the specified x-coordinate.

#### Example

```ts [data-first]
Rect.moveRightTo({ left: 10, top: 20, width: 100, height: 50 }, 150);
// { left: 50, top: 20, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.moveRightTo(150));
// { left: 50, top: 20, width: 100, height: 50 }
```

### moveTopTo

```ts
function Rect.moveTopTo(rect: Rect, top: number): Rect
```

Moves the rectangle so its top edge is positioned at the specified y-coordinate.

#### Example

```ts [data-first]
Rect.moveTopTo({ left: 10, top: 20, width: 100, height: 50 }, 50);
// { left: 10, top: 50, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.moveTopTo(50));
// { left: 10, top: 50, width: 100, height: 50 }
```

### normalize

```ts
function Rect.normalize(rect: Rect): Rect
```

Normalizes a rectangle by ensuring positive width and height, adjusting position as needed if dimensions were negative.

#### Example

```ts [data-first]
Rect.normalize({ left: 50, top: 60, width: -30, height: -40 });
// { left: 20, top: 20, width: 30, height: 40 }
```

```ts [data-last]
pipe({ left: 50, top: 60, width: -30, height: -40 }, Rect.normalize());
// { left: 20, top: 20, width: 30, height: 40 }
```

### origin

```ts
const Rect.origin: Rect
```

A constant representing the origin rectangle (positioned at 0,0 with zero width and height).

#### Example

```ts [example]
Rect.origin;
// { left: 0, top: 0, width: 0, height: 0 }
```

### placeAboveBy

```ts
function Rect.placeAboveBy(target: Rect, source: Rect, distance: number): Rect
```

Positions a `target` rectangle above a `source` rectangle with a specified distance between them. The `target` rectangle is moved so its bottom edge is positioned above the `source` rectangle's top edge by the given distance.

#### Example

```ts [data-first]
Rect.placeAboveBy(
    { left: 50, top: 100, width: 40, height: 30 },
    { left: 0, top: 60, width: 100, height: 20 },
    10,
);
// { left: 50, top: 30, width: 40, height: 30 }
```

```ts [data-last]
pipe(
    { left: 50, top: 100, width: 40, height: 30 },
    Rect.placeAboveBy({ left: 0, top: 60, width: 100, height: 20 }, 10),
);
// { left: 50, top: 30, width: 40, height: 30 }
```

### placeBelowBy

```ts
function Rect.placeBelowBy(target: Rect, source: Rect, distance: number): Rect
```

Positions a `target` rectangle below a `source` rectangle with a specified distance between them. The `target` rectangle is moved so its top edge is positioned below the `source` rectangle's top edge by the given distance.

#### Example

```ts [data-first]
Rect.placeBelowBy(
    { left: 50, top: 10, width: 40, height: 30 },
    { left: 0, top: 20, width: 100, height: 20 },
    10,
);
// { left: 50, top: 30, width: 40, height: 30 }
```

```ts [data-last]
pipe(
    { left: 50, top: 10, width: 40, height: 30 },
    Rect.placeBelowBy({ left: 0, top: 20, width: 100, height: 20 }, 10),
);
// { left: 50, top: 30, width: 40, height: 30 }
```

### placeLeftOfBy

```ts
function Rect.placeLeftOfBy(target: Rect, source: Rect, distance: number): Rect
```

Positions a `target` rectangle to the left of a `source` rectangle with a specified distance between them. The `target` rectangle is moved so its right edge is positioned to the left of the `source` rectangle's left edge by the given distance.

#### Example

```ts [data-first]
Rect.placeLeftOfBy(
    { left: 100, top: 50, width: 40, height: 30 },
    { left: 60, top: 20, width: 100, height: 20 },
    10,
);
// { left: 10, top: 50, width: 40, height: 30 }
```

```ts [data-last]
pipe(
    { left: 100, top: 50, width: 40, height: 30 },
    Rect.placeLeftOfBy({ left: 60, top: 20, width: 100, height: 20 }, 10),
);
// { left: 10, top: 50, width: 40, height: 30 }
```

### placeRightOfBy

```ts
function Rect.placeRightOfBy(target: Rect, source: Rect, distance: number): Rect
```

Positions a `target` rectangle to the right of a `source` rectangle with a specified distance between them. The `target` rectangle is moved so its left edge is positioned to the right of the `source` rectangle's right edge by the given distance.

#### Example

```ts [data-first]
Rect.placeRightOfBy(
    { left: 10, top: 50, width: 40, height: 30 },
    { left: 20, top: 20, width: 100, height: 20 },
    10,
);
// { left: 130, top: 50, width: 40, height: 30 }
```

```ts [data-last]
pipe(
    { left: 10, top: 50, width: 40, height: 30 },
    Rect.placeRightOfBy({ left: 20, top: 20, width: 100, height: 20 }, 10),
);
// { left: 130, top: 50, width: 40, height: 30 }
```

### right

```ts
function Rect.right(rect: Rect): number
```

Gets the right x-coordinate of a rectangle.

#### Example

```ts [data-first]
Rect.right({ left: 10, top: 20, width: 100, height: 50 });
// 110
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.right());
// 110
```

### scale

```ts
function Rect.scale(rect: Rect, factor: number): Rect
```

Scales the rectangle by the specified factor in both dimensions while keeping it centered at the same position.

#### Example

```ts [data-first]
Rect.scale({ left: 10, top: 20, width: 100, height: 50 }, 1.5);
// { left: -15, top: 7.5, width: 150, height: 75 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.scale(1.5));
// { left: -15, top: 7.5, width: 150, height: 75 }
```

### scaleX

```ts
function Rect.scaleX(rect: Rect, factor: number): Rect
```

Scales the rectangle horizontally by the specified factor while keeping it horizontally centered.

#### Example

```ts [data-first]
Rect.scaleX({ left: 10, top: 20, width: 100, height: 50 }, 1.5);
// { left: -15, top: 20, width: 150, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.scaleX(1.5));
// { left: -15, top: 20, width: 150, height: 50 }
```

### scaleY

```ts
function Rect.scaleY(rect: Rect, factor: number): Rect
```

Scales the rectangle vertically by the specified factor while keeping it vertically centered.

#### Example

```ts [data-first]
Rect.scaleY({ left: 10, top: 20, width: 100, height: 50 }, 1.5);
// { left: 10, top: 7.5, width: 100, height: 75 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.scaleY(1.5));
// { left: 10, top: 7.5, width: 100, height: 75 }
```

### setBottom

```ts
function Rect.setBottom(rect: Rect, bottom: number): Rect
```

Sets the bottom edge of a rectangle to a specific y-coordinate. The rectangle's height is adjusted to reach the new bottom position while keeping the top edge fixed.

#### Example

```ts [data-first]
Rect.setBottom({ left: 10, top: 20, width: 100, height: 50 }, 80);
// { left: 10, top: 20, width: 100, height: 60 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setBottom(80));
// { left: 10, top: 20, width: 100, height: 60 }
```

### setCenter

```ts
function Rect.setCenter(rect: Rect, x: number, y: number): Rect
```

Sets the center point of the rectangle to the specified coordinates.

#### Example

```ts [data-first]
Rect.setCenter({ left: 10, top: 20, width: 100, height: 50 }, 75, 60);
// { left: 25, top: 35, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setCenter(75, 60));
// { left: 25, top: 35, width: 100, height: 50 }
```

### setCenterX

```ts
function Rect.setCenterX(rect: Rect, x: number): Rect
```

Sets the horizontal center position of the rectangle to the specified x-coordinate.

#### Example

```ts [data-first]
Rect.setCenterX({ left: 10, top: 20, width: 100, height: 50 }, 75);
// { left: 25, top: 20, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setCenterX(75));
// { left: 25, top: 20, width: 100, height: 50 }
```

### setCenterY

```ts
function Rect.setCenterY(rect: Rect, y: number): Rect
```

Sets the vertical center position of the rectangle to the specified y-coordinate.

#### Example

```ts [data-first]
Rect.setCenterY({ left: 10, top: 20, width: 100, height: 50 }, 60);
// { left: 10, top: 35, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setCenterY(60));
// { left: 10, top: 35, width: 100, height: 50 }
```

### setHeight

```ts
function Rect.setHeight(rect: Rect, height: number): Rect
```

Sets the height of the rectangle to the specified value. Negative values are clamped to 0.

#### Example

```ts [data-first]
Rect.setHeight({ left: 10, top: 20, width: 100, height: 50 }, 80);
// { left: 10, top: 20, width: 100, height: 80 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setHeight(80));
// { left: 10, top: 20, width: 100, height: 80 }
```

### setLeft

```ts
function Rect.setLeft(rect: Rect, left: number): Rect
```

Sets the left edge of a rectangle to a specific x-coordinate. The rectangle's width is adjusted to maintain the right edge position while moving the left edge to the new position.

#### Example

```ts [data-first]
Rect.setLeft({ left: 20, top: 10, width: 100, height: 50 }, 30);
// { left: 30, top: 10, width: 90, height: 50 }
```

```ts [data-last]
pipe({ left: 20, top: 10, width: 100, height: 50 }, Rect.setLeft(30));
// { left: 30, top: 10, width: 90, height: 50 }
```

### setRight

```ts
function Rect.setRight(rect: Rect, right: number): Rect
```

Sets the right edge of a rectangle to a specific x-coordinate. The rectangle's width is adjusted to reach the new right position while keeping the left edge fixed.

#### Example

```ts [data-first]
Rect.setRight({ left: 10, top: 20, width: 100, height: 50 }, 130);
// { left: 10, top: 20, width: 120, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setRight(130));
// { left: 10, top: 20, width: 120, height: 50 }
```

### setTop

```ts
function Rect.setTop(rect: Rect, top: number): Rect
```

Sets the top edge of a rectangle to a specific y-coordinate. The rectangle's height is adjusted to maintain the bottom edge position while moving the top edge to the new position.

#### Example

```ts [data-first]
Rect.setTop({ left: 10, top: 20, width: 100, height: 50 }, 30);
// { left: 10, top: 30, width: 100, height: 40 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setTop(30));
// { left: 10, top: 30, width: 100, height: 40 }
```

### setWidth

```ts
function Rect.setWidth(rect: Rect, width: number): Rect
```

Sets the width of the rectangle to the specified value. Negative values are clamped to 0.

#### Example

```ts [data-first]
Rect.setWidth({ left: 10, top: 20, width: 100, height: 50 }, 150);
// { left: 10, top: 20, width: 150, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setWidth(150));
// { left: 10, top: 20, width: 150, height: 50 }
```

### shrink

```ts
function Rect.shrink(rect: Rect, amount: number): Rect
```

Shrinks a rectangle by moving all edges inward by the specified amount.

#### Example

```ts [data-first]
Rect.shrink({ left: 10, top: 20, width: 100, height: 60 }, 15);
// { left: 25, top: 35, width: 70, height: 30 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 60 }, Rect.shrink(15));
// { left: 25, top: 35, width: 70, height: 30 }
```

### shrinkX

```ts
function Rect.shrinkX(rect: Rect, amount: number): Rect
```

Shrinks a rectangle horizontally by moving the left and right edges inward by the specified amount.

#### Example

```ts [data-first]
Rect.shrinkX({ left: 10, top: 20, width: 100, height: 60 }, 15);
// { left: 25, top: 20, width: 70, height: 60 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 60 }, Rect.shrinkX(15));
// { left: 25, top: 20, width: 70, height: 60 }
```

### shrinkY

```ts
function Rect.shrinkY(rect: Rect, amount: number): Rect
```

Shrinks a rectangle vertically by moving the top and bottom edges inward by the specified amount.

#### Example

```ts [data-first]
Rect.shrinkY({ left: 10, top: 20, width: 100, height: 60 }, 10);
// { left: 10, top: 30, width: 100, height: 40 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 60 }, Rect.shrinkY(10));
// { left: 10, top: 30, width: 100, height: 40 }
```

### snapAbove

```ts
function Rect.snapAbove(target: Rect, source: Rect): Rect
```

Positions a `target` rectangle directly above a `source` rectangle with no gap between them. The `target` rectangle's bottom edge is aligned with the `source` rectangle's top edge.

#### Example

```ts [data-first]
Rect.snapAbove(
    { left: 50, top: 100, width: 40, height: 30 },
    { left: 0, top: 60, width: 100, height: 20 },
);
// { left: 50, top: 30, width: 40, height: 30 }
```

```ts [data-last]
pipe(
    { left: 50, top: 100, width: 40, height: 30 },
    Rect.snapAbove({ left: 0, top: 60, width: 100, height: 20 }),
);
// { left: 50, top: 30, width: 40, height: 30 }
```

### snapBelow

```ts
function Rect.snapBelow(target: Rect, source: Rect): Rect
```

Positions a `target` rectangle directly below a `source` rectangle with no gap between them. The `target` rectangle's top edge is aligned with the `source` rectangle's top edge (same as placeBelowBy with distance 0).

#### Example

```ts [data-first]
Rect.snapBelow(
    { left: 50, top: 10, width: 40, height: 30 },
    { left: 0, top: 20, width: 100, height: 20 },
);
// { left: 50, top: 20, width: 40, height: 30 }
```

```ts [data-last]
pipe(
    { left: 50, top: 10, width: 40, height: 30 },
    Rect.snapBelow({ left: 0, top: 20, width: 100, height: 20 }),
);
// { left: 50, top: 20, width: 40, height: 30 }
```

### snapLeftOf

```ts
function Rect.snapLeftOf(target: Rect, source: Rect): Rect
```

Positions a `target` rectangle directly to the left of a `source` rectangle with no gap between them. The `target` rectangle's right edge is aligned with the `source` rectangle's left edge.

#### Example

```ts [data-first]
Rect.snapLeftOf(
    { left: 100, top: 50, width: 40, height: 30 },
    { left: 60, top: 20, width: 100, height: 20 },
);
// { left: 20, top: 50, width: 40, height: 30 }
```

```ts [data-last]
pipe(
    { left: 100, top: 50, width: 40, height: 30 },
    Rect.snapLeftOf({ left: 60, top: 20, width: 100, height: 20 }),
);
// { left: 20, top: 50, width: 40, height: 30 }
```

### snapRightOf

```ts
function Rect.snapRightOf(target: Rect, source: Rect): Rect
```

Positions a `target` rectangle directly to the right of a `source` rectangle with no gap between them. The `target` rectangle's left edge is aligned with the `source` rectangle's right edge.

#### Example

```ts [data-first]
Rect.snapRightOf(
    { left: 10, top: 50, width: 40, height: 30 },
    { left: 20, top: 20, width: 100, height: 20 },
);
// { left: 120, top: 50, width: 40, height: 30 }
```

```ts [data-last]
pipe(
    { left: 10, top: 50, width: 40, height: 30 },
    Rect.snapRightOf({ left: 20, top: 20, width: 100, height: 20 }),
);
// { left: 120, top: 50, width: 40, height: 30 }
```

### takeBottomPct

```ts
function Rect.takeBottomPct(rect: Rect, amount: number): Rect
```

Takes a percentage of the rectangle from the bottom. Returns a new rectangle that represents the bottom portion of the original rectangle, with the height calculated as a percentage (0-1) of the original height.

#### Example

```ts [data-first]
Rect.takeBottomPct({ left: 10, top: 20, width: 100, height: 80 }, 0.25);
// { left: 10, top: 80, width: 100, height: 20 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.takeBottomPct(0.25));
// { left: 10, top: 80, width: 100, height: 20 }
```

### takeBottomPx

```ts
function Rect.takeBottomPx(rect: Rect, amount: number): Rect
```

Takes a specified number of pixels from the bottom of the rectangle, creating a new rectangle that represents only the bottom portion.

#### Example

```ts [data-first]
Rect.takeBottomPx({ left: 10, top: 20, width: 100, height: 80 }, 30);
// { left: 10, top: 70, width: 100, height: 30 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.takeBottomPx(30));
// { left: 10, top: 70, width: 100, height: 30 }
```

### takeLeftPct

```ts
function Rect.takeLeftPct(rect: Rect, amount: number): Rect
```

Takes a percentage of the rectangle from the left. Returns a new rectangle that represents the left portion of the original rectangle, with the width calculated as a percentage (0-1) of the original width.

#### Example

```ts [data-first]
Rect.takeLeftPct({ left: 10, top: 20, width: 100, height: 50 }, 0.3);
// { left: 10, top: 20, width: 30, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.takeLeftPct(0.3));
// { left: 10, top: 20, width: 30, height: 50 }
```

### takeLeftPx

```ts
function Rect.takeLeftPx(rect: Rect, amount: number): Rect
```

Takes a specified number of pixels from the left side of the rectangle, creating a new rectangle that represents only the left portion.

#### Example

```ts [data-first]
Rect.takeLeftPx({ left: 10, top: 20, width: 100, height: 80 }, 40);
// { left: 10, top: 20, width: 40, height: 80 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.takeLeftPx(40));
// { left: 10, top: 20, width: 40, height: 80 }
```

### takeRightPct

```ts
function Rect.takeRightPct(rect: Rect, amount: number): Rect
```

Takes a percentage of the rectangle from the right. Returns a new rectangle that represents the right portion of the original rectangle, with the width calculated as a percentage (0-1) of the original width.

#### Example

```ts [data-first]
Rect.takeRightPct({ left: 10, top: 20, width: 100, height: 50 }, 0.4);
// { left: 70, top: 20, width: 40, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.takeRightPct(0.4));
// { left: 70, top: 20, width: 40, height: 50 }
```

### takeRightPx

```ts
function Rect.takeRightPx(rect: Rect, amount: number): Rect
```

Takes a specific number of pixels from the right side of the rectangle. Returns a new rectangle that represents the rightmost portion of the original rectangle with the specified pixel width.

#### Example

```ts [data-first]
Rect.takeRightPx({ left: 10, top: 20, width: 100, height: 50 }, 30);
// { left: 80, top: 20, width: 30, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.takeRightPx(30));
// { left: 80, top: 20, width: 30, height: 50 }
```

### takeTopPct

```ts
function Rect.takeTopPct(rect: Rect, amount: number): Rect
```

Takes a percentage of the rectangle from the top. Returns a new rectangle that represents the top portion of the original rectangle, with the height calculated as a percentage (0-1) of the original height.

#### Example

```ts [data-first]
Rect.takeTopPct({ left: 10, top: 20, width: 100, height: 80 }, 0.25);
// { left: 10, top: 20, width: 100, height: 20 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.takeTopPct(0.25));
// { left: 10, top: 20, width: 100, height: 20 }
```

### top

```ts
function Rect.top(rect: Rect): number
```

Gets the top y-coordinate of a rectangle.

#### Example

```ts [data-first]
Rect.top({ left: 10, top: 20, width: 100, height: 50 });
// 20
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.top());
// 20
```

### transform

```ts
function Rect.transform(rect: Rect, transform: (value: number, key: keyof Rect, rect: Rect) => number): Rect
```

Applies a transformation function to each numeric property of the rectangle.

#### Example

```ts [data-first]
Rect.transform({ left: 10, top: 20, width: 100, height: 50 }, (value, key) =>
    key === "left" || key === "top" ? value * 2 : value,
);
// { left: 20, top: 40, width: 100, height: 50 }
```

```ts [data-last]
pipe(
    { left: 10, top: 20, width: 100, height: 50 },
    Rect.transform((value, key) =>
        key === "left" || key === "top" ? value * 2 : value,
    ),
);
// { left: 20, top: 40, width: 100, height: 50 }
```

### translate

```ts
function Rect.translate(rect: Rect, amount: number): Rect
```

Translates (moves) the rectangle by the specified amount in both horizontal and vertical directions.

#### Example

```ts [data-first]
Rect.translate({ left: 10, top: 20, width: 100, height: 50 }, 15);
// { left: 25, top: 35, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.translate(15));
// { left: 25, top: 35, width: 100, height: 50 }
```

### translateX

```ts
function Rect.translateX(rect: Rect, amount: number): Rect
```

Translates (moves) the rectangle horizontally by the specified amount.

#### Example

```ts [data-first]
Rect.translateX({ left: 10, top: 20, width: 100, height: 50 }, 15);
// { left: 25, top: 20, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.translateX(15));
// { left: 25, top: 20, width: 100, height: 50 }
```

### translateY

```ts
function Rect.translateY(rect: Rect, amount: number): Rect
```

Translates (moves) the rectangle vertically by the specified amount.

#### Example

```ts [data-first]
Rect.translateY({ left: 10, top: 20, width: 100, height: 50 }, 15);
// { left: 10, top: 35, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.translateY(15));
// { left: 10, top: 35, width: 100, height: 50 }
```

### union

```ts
function Rect.union(a: Rect, b: Rect): Rect
```

Calculates the union of two rectangles, returning the smallest rectangle that contains both rectangles.

#### Example

```ts [data-first]
Rect.union(
    { left: 0, top: 0, width: 50, height: 50 },
    { left: 25, top: 25, width: 50, height: 50 },
);
// { left: 0, top: 0, width: 75, height: 75 }
```

```ts [data-last]
pipe(
    { left: 0, top: 0, width: 50, height: 50 },
    Rect.union({ left: 25, top: 25, width: 50, height: 50 }),
);
// { left: 0, top: 0, width: 75, height: 75 }
```

### width

```ts
function Rect.width(rect: Rect): number
```

Gets the width of a rectangle.

#### Example

```ts [data-first]
Rect.width({ left: 10, top: 20, width: 100, height: 50 });
// 100
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.width());
// 100
```
