import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * Sets the vertical center position of the rectangle to the specified y-coordinate.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.setCenterY({ left: 10, top: 20, width: 100, height: 50 }, 60);
 * // { left: 10, top: 35, width: 100, height: 50 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setCenterY(60));
 * // { left: 10, top: 35, width: 100, height: 50 }
 * ```
 */
export const setCenterY = dfdl((rect: Rect, y: number): Rect => {
    return merge(rect, { top: y - (rect.height / 2) })
}, 2)
