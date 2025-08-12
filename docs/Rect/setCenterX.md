# setCenterX

```ts
function Rect.setCenterX(rect: Rect, x: number): Rect
```

Sets the horizontal center position of the rectangle to the specified x-coordinate.

## Example

::: code-group

```ts [data-first]
Rect.setCenterX({ left: 10, top: 20, width: 100, height: 50 }, 75);
// { left: 25, top: 20, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setCenterX(75));
// { left: 25, top: 20, width: 100, height: 50 }
```

:::
