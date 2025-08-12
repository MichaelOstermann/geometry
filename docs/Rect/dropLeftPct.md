# dropLeftPct

```ts
function Rect.dropLeftPct(rect: Rect, amount: number): Rect
```

Removes a percentage of the rectangle's width from the left edge, moving the left position rightward. The amount should be between 0 and 1.

## Example

::: code-group

```ts [data-first]
Rect.dropLeftPct({ left: 10, top: 20, width: 100, height: 80 }, 0.25);
// { left: 35, top: 20, width: 75, height: 80 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropLeftPct(0.25));
// { left: 35, top: 20, width: 75, height: 80 }
```

:::
