# height

```ts
function Rect.height(rect: Rect): number
```

Gets the height of a rectangle.

## Example

::: code-group

```ts [data-first]
Rect.height({ left: 10, top: 20, width: 100, height: 50 });
// 50
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.height());
// 50
```

:::
