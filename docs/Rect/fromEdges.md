# fromEdges

```ts
function Rect.fromEdges(edges: { bottom: number, left: number, right: number, top: number }): Rect
```

Creates a rectangle from edge coordinates.

## Example

::: code-group

```ts [data-first]
Rect.fromEdges({ left: 10, top: 20, right: 110, bottom: 70 });
// { left: 10, top: 20, width: 100, height: 50 }
```

```ts [data-last]
pipe({ left: 10, top: 20, right: 110, bottom: 70 }, Rect.fromEdges());
// { left: 10, top: 20, width: 100, height: 50 }
```

:::
