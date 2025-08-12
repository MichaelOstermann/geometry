# takeBottomPx

```ts
function Rect.takeBottomPx(rect: Rect, amount: number): Rect
```

Takes a specified number of pixels from the bottom of the rectangle, creating a new rectangle that represents only the bottom portion.

## Example

::: code-group

```ts [data-first]
Rect.takeBottomPx({ left: 10, top: 20, width: 100, height: 80 }, 30);
// { left: 10, top: 70, width: 100, height: 30 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.takeBottomPx(30));
// { left: 10, top: 70, width: 100, height: 30 }
```

:::
