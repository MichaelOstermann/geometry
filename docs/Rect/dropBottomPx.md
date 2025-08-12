# dropBottomPx

```ts
function Rect.dropBottomPx(rect: Rect, amount: number): Rect
```

Removes a specified number of pixels from the rectangle's height at the bottom edge.

## Example

::: code-group

```ts [data-first]
Rect.dropBottomPx({ left: 10, top: 20, width: 100, height: 80 }, 20);
// { left: 10, top: 20, width: 100, height: 60 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropBottomPx(20));
// { left: 10, top: 20, width: 100, height: 60 }
```

:::
