# setWidth

```ts
function Rect.setWidth(rect: Rect, width: number): Rect
```

Sets the width of the rectangle to the specified value. Negative values are clamped to 0.

## Example

::: code-group

```ts [data-first]
Rect.setWidth({ left: 10, top: 20, width: 100, height: 50 }, 150);
// { left: 10, top: 20, width: 150, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setWidth(150));
// { left: 10, top: 20, width: 150, height: 50 }
```

:::
