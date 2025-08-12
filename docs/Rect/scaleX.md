# scaleX

```ts
function Rect.scaleX(rect: Rect, factor: number): Rect
```

Scales the rectangle horizontally by the specified factor while keeping it horizontally centered.

## Example

::: code-group

```ts [data-first]
Rect.scaleX({ left: 10, top: 20, width: 100, height: 50 }, 1.5);
// { left: -15, top: 20, width: 150, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.scaleX(1.5));
// { left: -15, top: 20, width: 150, height: 50 }
```

:::
