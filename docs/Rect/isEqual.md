# isEqual

```ts
function Rect.isEqual(a: Rect, b: Rect): boolean
```

Checks if two rectangles are equal by comparing their position and dimensions.

## Example

::: code-group

```ts [data-first]
Rect.isEqual(
    { left: 10, top: 20, width: 100, height: 50 },
    { left: 10, top: 20, width: 100, height: 50 },
);
// true
```

```ts [data-last]
pipe(
    { left: 10, top: 20, width: 100, height: 50 },
    Rect.isEqual({ left: 10, top: 20, width: 100, height: 50 }),
);
// true
```

:::
