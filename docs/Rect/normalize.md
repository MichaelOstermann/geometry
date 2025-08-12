# normalize

```ts
function Rect.normalize(rect: Rect): Rect
```

Normalizes a rectangle by ensuring positive width and height, adjusting position as needed if dimensions were negative.

## Example

::: code-group

```ts [data-first]
Rect.normalize({ left: 50, top: 60, width: -30, height: -40 });
// { left: 20, top: 20, width: 30, height: 40 }
```

```ts [data-last]
pipe({ left: 50, top: 60, width: -30, height: -40 }, Rect.normalize());
// { left: 20, top: 20, width: 30, height: 40 }
```

:::
