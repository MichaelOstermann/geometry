# expandY

```ts
function Rect.expandY(rect: Rect, amount: number): Rect
```

Expands the rectangle vertically by the specified amount.

## Example

::: code-group

```ts [data-first]
Rect.expandY({ left: 10, top: 20, width: 100, height: 50 }, 10);
// { left: 10, top: 10, width: 100, height: 70 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.expandY(10));
// { left: 10, top: 10, width: 100, height: 70 }
```

:::
