# area

```ts
function Rect.area(rect: Rect): number
```

Calculates the area of a rectangle by multiplying its width and height.

## Example

::: code-group

```ts [data-first]
Rect.area({ left: 10, top: 20, width: 100, height: 50 });
// 5000
```

```ts [data-last]
pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.area());
// 5000
```

:::
