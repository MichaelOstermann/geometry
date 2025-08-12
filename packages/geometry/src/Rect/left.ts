import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * Gets the left x-coordinate of a rectangle.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.left({ left: 10, top: 20, width: 100, height: 50 });
 * // 10
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.left());
 * // 10
 * ```
 */
export const left = dfdl((rect: Rect): number => {
    return rect.left
}, 1)
