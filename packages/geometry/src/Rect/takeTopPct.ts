import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"
import { clamp } from "./internals/clamp"
import { merge } from "./merge"

/**
 * Takes a percentage of the rectangle from the top. Returns a new rectangle that represents the top portion of the original rectangle, with the height calculated as a percentage (0-1) of the original height.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.takeTopPct({ left: 10, top: 20, width: 100, height: 80 }, 0.25);
 * // { left: 10, top: 20, width: 100, height: 20 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.takeTopPct(0.25));
 * // { left: 10, top: 20, width: 100, height: 20 }
 * ```
 */
export const takeTopPct = dfdl((rect: Rect, amount: number): Rect => {
    return merge(rect, { height: rect.height * clamp(amount, 0, 1) })
}, 2)
