# contains

```ts
function Rect.contains(a: Rect, b: Rect): boolean
```

Checks if rectangle `a` completely contains rectangle `b` within its boundaries.

## Example

::: code-group

```ts [data-first]
Rect.contains(
    { left: 0, top: 0, width: 100, height: 100 },
    { left: 10, top: 20, width: 50, height: 30 },
);
// true
```

```ts [data-last]
pipe(
    { left: 0, top: 0, width: 100, height: 100 },
    Rect.contains({ left: 10, top: 20, width: 50, height: 30 }),
);
// true
```

:::
