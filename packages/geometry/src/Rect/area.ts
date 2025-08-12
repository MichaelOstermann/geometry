import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * Calculates the area of a rectangle by multiplying its width and height.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.area({ left: 10, top: 20, width: 100, height: 50 });
 * // 5000
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.area());
 * // 5000
 * ```
 */
export const area = dfdl((rect: Rect): number => {
    return rect.width * rect.height
}, 1)
