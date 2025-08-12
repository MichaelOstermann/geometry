import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * Gets the width of a rectangle.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.width({ left: 10, top: 20, width: 100, height: 50 });
 * // 100
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.width());
 * // 100
 * ```
 */
export const width = dfdl((rect: Rect): number => {
    return rect.width
}, 1)
