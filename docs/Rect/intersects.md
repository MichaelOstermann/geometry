# intersects

```ts
function Rect.intersects(a: Rect, b: Rect): boolean
```

Checks if two rectangles intersect or overlap with each other.

## Example

::: code-group

```ts [data-first]
Rect.intersects(
    { left: 0, top: 0, width: 50, height: 50 },
    { left: 25, top: 25, width: 50, height: 50 },
);
// true
```

```ts [data-last]
pipe(
    { left: 0, top: 0, width: 50, height: 50 },
    Rect.intersects({ left: 25, top: 25, width: 50, height: 50 }),
);
// true
```

:::
