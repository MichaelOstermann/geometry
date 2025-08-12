import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * Moves the rectangle so its right edge is positioned at the specified x-coordinate.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.moveRightTo({ left: 10, top: 20, width: 100, height: 50 }, 150);
 * // { left: 50, top: 20, width: 100, height: 50 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.moveRightTo(150));
 * // { left: 50, top: 20, width: 100, height: 50 }
 * ```
 */
export const moveRightTo = dfdl((rect: Rect, right: number): Rect => {
    return merge(rect, { left: right - rect.width })
}, 2)
