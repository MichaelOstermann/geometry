import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"

/**
 * Gets the bottom y-coordinate of a rectangle.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.bottom({ left: 10, top: 20, width: 100, height: 50 });
 * // 70
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.bottom());
 * // 70
 * ```
 */
export const bottom = dfdl((rect: Rect): number => {
    return rect.top + rect.height
}, 1)
