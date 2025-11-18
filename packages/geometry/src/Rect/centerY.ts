import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"

/**
 * Gets the vertical center y-coordinate of a rectangle.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.centerY({ left: 10, top: 20, width: 100, height: 50 });
 * // 45
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.centerY());
 * // 45
 * ```
 */
export const centerY = dfdl((rect: Rect): number => {
    return rect.top + rect.height / 2
}, 1)
