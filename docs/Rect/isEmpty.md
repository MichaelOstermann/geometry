# isEmpty

```ts
function Rect.isEmpty(rect: Rect): boolean
```

Checks if a rectangle is empty (has zero width or zero height).

## Example

::: code-group

```ts [data-first]
Rect.isEmpty({ left: 10, top: 20, width: 0, height: 50 });
// true
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 0, height: 50 }, Rect.isEmpty());
// true
```

:::
