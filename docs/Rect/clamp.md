# clamp

```ts
function Rect.clamp(target: Rect, source: Rect): Rect
```

Constrains the `target` rectangle to fit within the boundaries of the `source` rectangle, adjusting position and size as needed.

## Example

::: code-group

```ts [data-first]
Rect.clamp(
    { left: 50, top: 60, width: 200, height: 100 },
    { left: 0, top: 0, width: 150, height: 120 },
);
// { left: 0, top: 0, width: 150, height: 100 }
```

```ts [data-last]
pipe(
    { left: 50, top: 60, width: 200, height: 100 },
    Rect.clamp({ left: 0, top: 0, width: 150, height: 120 }),
);
// { left: 0, top: 0, width: 150, height: 100 }
```

:::
