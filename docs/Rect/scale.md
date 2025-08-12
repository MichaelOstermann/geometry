# scale

```ts
function Rect.scale(rect: Rect, factor: number): Rect
```

Scales the rectangle by the specified factor in both dimensions while keeping it centered at the same position.

## Example

::: code-group

```ts [data-first]
Rect.scale({ left: 10, top: 20, width: 100, height: 50 }, 1.5);
// { left: -15, top: 7.5, width: 150, height: 75 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.scale(1.5));
// { left: -15, top: 7.5, width: 150, height: 75 }
```

:::
