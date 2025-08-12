# dropTopPx

```ts
function Rect.dropTopPx(rect: Rect, amount: number): Rect
```

Removes a specified number of pixels from the rectangle's height at the top edge, moving the top position downward.

## Example

::: code-group

```ts [data-first]
Rect.dropTopPx({ left: 10, top: 20, width: 100, height: 80 }, 20);
// { left: 10, top: 40, width: 100, height: 60 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropTopPx(20));
// { left: 10, top: 40, width: 100, height: 60 }
```

:::
