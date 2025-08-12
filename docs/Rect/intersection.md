# intersection

```ts
function Rect.intersection(a: Rect, b: Rect): Rect
```

Calculates the intersection rectangle of two rectangles. Returns the origin rectangle if they don't intersect.

## Example

::: code-group

```ts [data-first]
Rect.intersection(
    { left: 0, top: 0, width: 50, height: 50 },
    { left: 25, top: 25, width: 50, height: 50 },
);
// { left: 25, top: 25, width: 25, height: 25 }
```

```ts [data-last]
pipe(
    { left: 0, top: 0, width: 50, height: 50 },
    Rect.intersection({ left: 25, top: 25, width: 50, height: 50 }),
);
// { left: 25, top: 25, width: 25, height: 25 }
```

:::
