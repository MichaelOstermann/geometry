# left

```ts
function Rect.left(rect: Rect): number
```

Gets the left x-coordinate of a rectangle.

## Example

::: code-group

```ts [data-first]
Rect.left({ left: 10, top: 20, width: 100, height: 50 });
// 10
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.left());
// 10
```

:::
