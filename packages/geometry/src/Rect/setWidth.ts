import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * Sets the width of the rectangle to the specified value. Negative values are clamped to 0.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.setWidth({ left: 10, top: 20, width: 100, height: 50 }, 150);
 * // { left: 10, top: 20, width: 150, height: 50 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setWidth(150));
 * // { left: 10, top: 20, width: 150, height: 50 }
 * ```
 */
export const setWidth = dfdl((rect: Rect, width: number): Rect => {
    return merge(rect, { width: Math.max(width, 0) })
}, 2)
