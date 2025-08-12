# fromDOMRect

```ts
function Rect.fromDOMRect(rect: DOMRectReadOnly): Rect
```

Converts a DOMRectReadOnly object (from getBoundingClientRect or similar) into a Rect.

## Example

::: code-group

```ts [data-first]
const domRect = element.getBoundingClientRect();
Rect.fromDOMRect(domRect);
// { left: 10, top: 20, width: 100, height: 50 }
```

```ts [data-last]
const domRect = element.getBoundingClientRect();
pipe(domRect, Rect.fromDOMRect());
// { left: 10, top: 20, width: 100, height: 50 }
```

:::
