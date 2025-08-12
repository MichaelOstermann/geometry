# isOrigin

```ts
function Rect.isOrigin(rect: Rect): boolean
```

Checks if a rectangle is the origin rectangle (positioned at 0,0 with zero width and height).

## Example

::: code-group

```ts [data-first]
Rect.isOrigin({ left: 0, top: 0, width: 0, height: 0 });
// true
```

```ts [data-last]
pipe({ left: 0, top: 0, width: 0, height: 0 }, Rect.isOrigin());
// true
```

:::
