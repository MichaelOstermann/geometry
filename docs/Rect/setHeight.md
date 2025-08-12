# setHeight

```ts
function Rect.setHeight(rect: Rect, height: number): Rect
```

Sets the height of the rectangle to the specified value. Negative values are clamped to 0.

## Example

::: code-group

```ts [data-first]
Rect.setHeight({ left: 10, top: 20, width: 100, height: 50 }, 80);
// { left: 10, top: 20, width: 100, height: 80 }
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setHeight(80));
// { left: 10, top: 20, width: 100, height: 80 }
```

:::
