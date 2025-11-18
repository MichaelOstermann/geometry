import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"

/**
 * Gets the top y-coordinate of a rectangle.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.top({ left: 10, top: 20, width: 100, height: 50 });
 * // 20
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.top());
 * // 20
 * ```
 */
export const top = dfdl((rect: Rect): number => {
    return rect.top
}, 1)
