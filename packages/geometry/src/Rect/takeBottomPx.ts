import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"
import { clamp } from "./internals/clamp"
import { merge } from "./merge"

/**
 * Takes a specified number of pixels from the bottom of the rectangle, creating a new rectangle that represents only the bottom portion.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.takeBottomPx({ left: 10, top: 20, width: 100, height: 80 }, 30);
 * // { left: 10, top: 70, width: 100, height: 30 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.takeBottomPx(30));
 * // { left: 10, top: 70, width: 100, height: 30 }
 * ```
 */
export const takeBottomPx = dfdl((rect: Rect, amount: number): Rect => {
    const height = clamp(amount, 0, rect.height)
    return merge(rect, {
        height,
        top: rect.top + rect.height - height,
    })
}, 2)
