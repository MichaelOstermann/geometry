import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * Moves the rectangle so its left edge is positioned at the specified x-coordinate.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.moveLeftTo({ left: 10, top: 20, width: 100, height: 50 }, 50);
 * // { left: 50, top: 20, width: 100, height: 50 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.moveLeftTo(50));
 * // { left: 50, top: 20, width: 100, height: 50 }
 * ```
 */
export const moveLeftTo = dfdl((rect: Rect, left: number): Rect => {
    return merge(rect, { left })
}, 2)
