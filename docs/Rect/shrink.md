# shrink

```ts
function Rect.shrink(rect: Rect, amount: number): Rect
```

Shrinks a rectangle by moving all edges inward by the specified amount.

## Example

::: code-group

```ts [data-first]
Rect.shrink({ left: 10, top: 20, width: 100, height: 60 }, 15);
// { left: 25, top: 35, width: 70, height: 30 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 60 }, Rect.shrink(15));
// { left: 25, top: 35, width: 70, height: 30 }
```

:::
