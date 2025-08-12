import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * Translates (moves) the rectangle horizontally by the specified amount.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.translateX({ left: 10, top: 20, width: 100, height: 50 }, 15);
 * // { left: 25, top: 20, width: 100, height: 50 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.translateX(15));
 * // { left: 25, top: 20, width: 100, height: 50 }
 * ```
 */
export const translateX = dfdl((rect: Rect, amount: number): Rect => {
    return merge(rect, { left: rect.left + amount })
}, 2)
