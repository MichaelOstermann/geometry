# dropLeftPx

```ts
function Rect.dropLeftPx(rect: Rect, amount: number): Rect
```

Removes a specified number of pixels from the rectangle's width at the left edge, moving the left position rightward.

## Example

::: code-group

```ts [data-first]
Rect.dropLeftPx({ left: 10, top: 20, width: 100, height: 80 }, 25);
// { left: 35, top: 20, width: 75, height: 80 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropLeftPx(25));
// { left: 35, top: 20, width: 75, height: 80 }
```

:::
