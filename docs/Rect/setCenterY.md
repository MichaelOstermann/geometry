# setCenterY

```ts
function Rect.setCenterY(rect: Rect, y: number): Rect
```

Sets the vertical center position of the rectangle to the specified y-coordinate.

## Example

::: code-group

```ts [data-first]
Rect.setCenterY({ left: 10, top: 20, width: 100, height: 50 }, 60);
// { left: 10, top: 35, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setCenterY(60));
// { left: 10, top: 35, width: 100, height: 50 }
```

:::
