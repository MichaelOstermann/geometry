# setBottom

```ts
function Rect.setBottom(rect: Rect, bottom: number): Rect
```

Sets the bottom edge of a rectangle to a specific y-coordinate. The rectangle's height is adjusted to reach the new bottom position while keeping the top edge fixed.

## Example

::: code-group

```ts [data-first]
Rect.setBottom({ left: 10, top: 20, width: 100, height: 50 }, 80);
// { left: 10, top: 20, width: 100, height: 60 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setBottom(80));
// { left: 10, top: 20, width: 100, height: 60 }
```

:::
