# alignCenterY

```ts
function Rect.alignCenterY(target: Rect, source: Rect): Rect
```

Aligns the vertical center of the `target` rectangle to the vertical center of the `source` rectangle by moving the `target` rectangle vertically only.

## Example

::: code-group

```ts [data-first]
Rect.alignCenterY(
    { left: 10, top: 10, width: 100, height: 50 },
    { left: 50, top: 30, width: 80, height: 40 },
);
// { left: 10, top: 25, width: 100, height: 50 }
```

```ts [data-last]
pipe(
    { left: 10, top: 10, width: 100, height: 50 },
    Rect.alignCenterY({ left: 50, top: 30, width: 80, height: 40 }),
);
// { left: 10, top: 25, width: 100, height: 50 }
```

:::
