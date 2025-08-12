import type { Rect } from "./types.js"
import { dfdl } from "@monstermann/dfdl"

/**
 * Checks if two rectangles intersect or overlap with each other.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.intersects(
 *     { left: 0, top: 0, width: 50, height: 50 },
 *     { left: 25, top: 25, width: 50, height: 50 },
 * );
 * // true
 *
 * // data-last
 * pipe(
 *     { left: 0, top: 0, width: 50, height: 50 },
 *     Rect.intersects({ left: 25, top: 25, width: 50, height: 50 }),
 * );
 * // true
 * ```
 */
export const intersects = dfdl((a: Rect, b: Rect): boolean => {
    return !(
        a.left >= (b.left + b.width)
        || (a.left + a.width) <= b.left
        || a.top >= (b.top + b.height)
        || (a.top + a.height) <= b.top
    )
}, 2)
