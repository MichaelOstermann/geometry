# distance

```ts
function Rect.distance(a: Rect, b: Rect): number
```

Calculates the shortest distance between two rectangles. Returns 0 if the rectangles intersect.

## Example

::: code-group

```ts [data-first]
Rect.distance(
    { left: 0, top: 0, width: 50, height: 50 },
    { left: 100, top: 0, width: 50, height: 50 },
);
// 50
```

```ts [data-last]
pipe(
    { left: 0, top: 0, width: 50, height: 50 },
    Rect.distance({ left: 100, top: 0, width: 50, height: 50 }),
);
// 50
```

:::
