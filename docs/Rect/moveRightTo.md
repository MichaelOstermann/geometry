# moveRightTo

```ts
function Rect.moveRightTo(rect: Rect, right: number): Rect
```

Moves the rectangle so its right edge is positioned at the specified x-coordinate.

## Example

::: code-group

```ts [data-first]
Rect.moveRightTo({ left: 10, top: 20, width: 100, height: 50 }, 150);
// { left: 50, top: 20, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.moveRightTo(150));
// { left: 50, top: 20, width: 100, height: 50 }
```

:::
