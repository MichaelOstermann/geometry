# merge

```ts
function Rect.merge(target: Rect, source: Partial<Rect>): Rect
```

Merges a partial rectangle into a target rectangle, creating a new rectangle with updated properties.

## Example

::: code-group

```ts [data-first]
Rect.merge(
    { left: 10, top: 20, width: 100, height: 50 },
    { width: 150, height: 75 },
);
// { left: 10, top: 20, width: 150, height: 75 }
```

```ts [data-last]
pipe(
    { left: 10, top: 20, width: 100, height: 50 },
    Rect.merge({ width: 150, height: 75 }),
);
// { left: 10, top: 20, width: 150, height: 75 }
```

:::
