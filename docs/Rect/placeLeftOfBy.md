# placeLeftOfBy

```ts
function Rect.placeLeftOfBy(target: Rect, source: Rect, distance: number): Rect
```

Positions a `target` rectangle to the left of a `source` rectangle with a specified distance between them. The `target` rectangle is moved so its right edge is positioned to the left of the `source` rectangle's left edge by the given distance.

## Example

::: code-group

```ts [data-first]
Rect.placeLeftOfBy(
    { left: 100, top: 50, width: 40, height: 30 },
    { left: 60, top: 20, width: 100, height: 20 },
    10,
);
// { left: 10, top: 50, width: 40, height: 30 }
```

```ts [data-last]
pipe(
    { left: 100, top: 50, width: 40, height: 30 },
    Rect.placeLeftOfBy({ left: 60, top: 20, width: 100, height: 20 }, 10),
);
// { left: 10, top: 50, width: 40, height: 30 }
```

:::
