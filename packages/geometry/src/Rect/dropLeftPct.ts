import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"
import { clamp } from "./internals/clamp"
import { merge } from "./merge"

/**
 * Removes a percentage of the rectangle's width from the left edge, moving the left position rightward. The amount should be between 0 and 1.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.dropLeftPct({ left: 10, top: 20, width: 100, height: 80 }, 0.25);
 * // { left: 35, top: 20, width: 75, height: 80 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropLeftPct(0.25));
 * // { left: 35, top: 20, width: 75, height: 80 }
 * ```
 */
export const dropLeftPct = dfdl((rect: Rect, amount: number): Rect => {
    const dw = rect.width * clamp(amount, 0, 1)
    return merge(rect, {
        left: rect.left + dw,
        width: rect.width - dw,
    })
}, 2)
