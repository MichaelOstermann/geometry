# shrinkY

```ts
function Rect.shrinkY(rect: Rect, amount: number): Rect
```

Shrinks a rectangle vertically by moving the top and bottom edges inward by the specified amount.

## Example

::: code-group

```ts [data-first]
Rect.shrinkY({ left: 10, top: 20, width: 100, height: 60 }, 10);
// { left: 10, top: 30, width: 100, height: 40 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 60 }, Rect.shrinkY(10));
// { left: 10, top: 30, width: 100, height: 40 }
```

:::
