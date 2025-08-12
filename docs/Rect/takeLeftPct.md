# takeLeftPct

```ts
function Rect.takeLeftPct(rect: Rect, amount: number): Rect
```

Takes a percentage of the rectangle from the left. Returns a new rectangle that represents the left portion of the original rectangle, with the width calculated as a percentage (0-1) of the original width.

## Example

::: code-group

```ts [data-first]
Rect.takeLeftPct({ left: 10, top: 20, width: 100, height: 50 }, 0.3);
// { left: 10, top: 20, width: 30, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.takeLeftPct(0.3));
// { left: 10, top: 20, width: 30, height: 50 }
```

:::
