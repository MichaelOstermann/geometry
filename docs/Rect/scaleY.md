# scaleY

```ts
function Rect.scaleY(rect: Rect, factor: number): Rect
```

Scales the rectangle vertically by the specified factor while keeping it vertically centered.

## Example

::: code-group

```ts [data-first]
Rect.scaleY({ left: 10, top: 20, width: 100, height: 50 }, 1.5);
// { left: 10, top: 7.5, width: 100, height: 75 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.scaleY(1.5));
// { left: 10, top: 7.5, width: 100, height: 75 }
```

:::
