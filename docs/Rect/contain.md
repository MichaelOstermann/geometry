# contain

```ts
function Rect.contain(target: Rect, source: Rect): Rect
```

Scales the `target` rectangle down proportionally so it fits entirely within the `source` rectangle while maintaining its aspect ratio, then centers it within the `source`.

## Example

::: code-group

```ts [data-first]
Rect.contain(
    { left: 10, top: 20, width: 200, height: 100 },
    { left: 0, top: 0, width: 150, height: 120 },
);
// { left: 37.5, top: 30, width: 75, height: 60 }
```

```ts [data-last]
pipe(
    { left: 10, top: 20, width: 200, height: 100 },
    Rect.contain({ left: 0, top: 0, width: 150, height: 120 }),
);
// { left: 37.5, top: 30, width: 75, height: 60 }
```

:::
