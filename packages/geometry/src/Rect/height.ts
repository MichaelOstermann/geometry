import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * Gets the height of a rectangle.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.height({ left: 10, top: 20, width: 100, height: 50 });
 * // 50
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.height());
 * // 50
 * ```
 */
export const height = dfdl((rect: Rect): number => {
    return rect.height
}, 1)
