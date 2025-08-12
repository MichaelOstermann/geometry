# takeRightPct

```ts
function Rect.takeRightPct(rect: Rect, amount: number): Rect
```

Takes a percentage of the rectangle from the right. Returns a new rectangle that represents the right portion of the original rectangle, with the width calculated as a percentage (0-1) of the original width.

## Example

::: code-group

```ts [data-first]
Rect.takeRightPct({ left: 10, top: 20, width: 100, height: 50 }, 0.4);
// { left: 70, top: 20, width: 40, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.takeRightPct(0.4));
// { left: 70, top: 20, width: 40, height: 50 }
```

:::
