import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * Sets the height of the rectangle to the specified value. Negative values are clamped to 0.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.setHeight({ left: 10, top: 20, width: 100, height: 50 }, 80);
 * // { left: 10, top: 20, width: 100, height: 80 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setHeight(80));
 * // { left: 10, top: 20, width: 100, height: 80 }
 * ```
 */
export const setHeight = dfdl((rect: Rect, height: number): Rect => {
    return merge(rect, { height: Math.max(height, 0) })
}, 2)
