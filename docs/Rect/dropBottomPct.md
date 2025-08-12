# dropBottomPct

```ts
function Rect.dropBottomPct(rect: Rect, amount: number): Rect
```

Removes a percentage of the rectangle's height from the bottom edge. The amount should be between 0 and 1.

## Example

::: code-group

```ts [data-first]
Rect.dropBottomPct({ left: 10, top: 20, width: 100, height: 80 }, 0.25);
// { left: 10, top: 20, width: 100, height: 60 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropBottomPct(0.25));
// { left: 10, top: 20, width: 100, height: 60 }
```

:::
