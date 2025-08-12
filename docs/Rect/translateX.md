# translateX

```ts
function Rect.translateX(rect: Rect, amount: number): Rect
```

Translates (moves) the rectangle horizontally by the specified amount.

## Example

::: code-group

```ts [data-first]
Rect.translateX({ left: 10, top: 20, width: 100, height: 50 }, 15);
// { left: 25, top: 20, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.translateX(15));
// { left: 25, top: 20, width: 100, height: 50 }
```

:::
