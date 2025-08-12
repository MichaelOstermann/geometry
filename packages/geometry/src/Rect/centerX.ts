import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * Gets the horizontal center x-coordinate of a rectangle.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.centerX({ left: 10, top: 20, width: 100, height: 50 });
 * // 60
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.centerX());
 * // 60
 * ```
 */
export const centerX = dfdl((rect: Rect): number => {
    return rect.left + rect.width / 2
}, 1)
