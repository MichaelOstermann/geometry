import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"
import { setHeight } from "./setHeight"

/**
 * Sets the bottom edge of a rectangle to a specific y-coordinate. The rectangle's height is adjusted to reach the new bottom position while keeping the top edge fixed.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.setBottom({ left: 10, top: 20, width: 100, height: 50 }, 80);
 * // { left: 10, top: 20, width: 100, height: 60 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setBottom(80));
 * // { left: 10, top: 20, width: 100, height: 60 }
 * ```
 */
export const setBottom = dfdl((rect: Rect, bottom: number): Rect => {
    return setHeight(rect, (Math.max(rect.top, bottom)) - rect.top)
}, 2)
