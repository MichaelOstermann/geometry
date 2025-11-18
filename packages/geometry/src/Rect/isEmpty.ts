import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"

/**
 * Checks if a rectangle is empty (has zero width or zero height).
 *
 * @example
 * ```ts
 * // data-first
 * Rect.isEmpty({ left: 10, top: 20, width: 0, height: 50 });
 * // true
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 0, height: 50 }, Rect.isEmpty());
 * // true
 * ```
 */
export const isEmpty = dfdl((rect: Rect): boolean => {
    return rect.width === 0 || rect.height === 0
}, 1)
