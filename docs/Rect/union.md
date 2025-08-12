# union

```ts
function Rect.union(a: Rect, b: Rect): Rect
```

Calculates the union of two rectangles, returning the smallest rectangle that contains both rectangles.

## Example

::: code-group

```ts [data-first]
Rect.union(
    { left: 0, top: 0, width: 50, height: 50 },
    { left: 25, top: 25, width: 50, height: 50 },
);
// { left: 0, top: 0, width: 75, height: 75 }
```

```ts [data-last]
pipe(
    { left: 0, top: 0, width: 50, height: 50 },
    Rect.union({ left: 25, top: 25, width: 50, height: 50 }),
);
// { left: 0, top: 0, width: 75, height: 75 }
```

:::
