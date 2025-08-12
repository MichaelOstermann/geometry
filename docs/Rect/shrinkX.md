# shrinkX

```ts
function Rect.shrinkX(rect: Rect, amount: number): Rect
```

Shrinks a rectangle horizontally by moving the left and right edges inward by the specified amount.

## Example

::: code-group

```ts [data-first]
Rect.shrinkX({ left: 10, top: 20, width: 100, height: 60 }, 15);
// { left: 25, top: 20, width: 70, height: 60 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 60 }, Rect.shrinkX(15));
// { left: 25, top: 20, width: 70, height: 60 }
```

:::
