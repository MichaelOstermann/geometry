# takeLeftPx

```ts
function Rect.takeLeftPx(rect: Rect, amount: number): Rect
```

Takes a specified number of pixels from the left side of the rectangle, creating a new rectangle that represents only the left portion.

## Example

::: code-group

```ts [data-first]
Rect.takeLeftPx({ left: 10, top: 20, width: 100, height: 80 }, 40);
// { left: 10, top: 20, width: 40, height: 80 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.takeLeftPx(40));
// { left: 10, top: 20, width: 40, height: 80 }
```

:::
