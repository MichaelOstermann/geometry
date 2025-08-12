# setCenter

```ts
function Rect.setCenter(rect: Rect, x: number, y: number): Rect
```

Sets the center point of the rectangle to the specified coordinates.

## Example

::: code-group

```ts [data-first]
Rect.setCenter({ left: 10, top: 20, width: 100, height: 50 }, 75, 60);
// { left: 25, top: 35, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setCenter(75, 60));
// { left: 25, top: 35, width: 100, height: 50 }
```

:::
