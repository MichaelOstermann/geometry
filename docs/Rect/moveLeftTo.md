# moveLeftTo

```ts
function Rect.moveLeftTo(rect: Rect, left: number): Rect
```

Moves the rectangle so its left edge is positioned at the specified x-coordinate.

## Example

::: code-group

```ts [data-first]
Rect.moveLeftTo({ left: 10, top: 20, width: 100, height: 50 }, 50);
// { left: 50, top: 20, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.moveLeftTo(50));
// { left: 50, top: 20, width: 100, height: 50 }
```

:::
