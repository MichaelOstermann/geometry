import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"
import { moveLeftTo } from "./moveLeftTo"

/**
 * Positions a `target` rectangle to the right of a `source` rectangle with a specified distance between them. The `target` rectangle is moved so its left edge is positioned to the right of the `source` rectangle's right edge by the given distance.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.placeRightOfBy(
 *     { left: 10, top: 50, width: 40, height: 30 },
 *     { left: 20, top: 20, width: 100, height: 20 },
 *     10,
 * );
 * // { left: 130, top: 50, width: 40, height: 30 }
 *
 * // data-last
 * pipe(
 *     { left: 10, top: 50, width: 40, height: 30 },
 *     Rect.placeRightOfBy({ left: 20, top: 20, width: 100, height: 20 }, 10),
 * );
 * // { left: 130, top: 50, width: 40, height: 30 }
 * ```
 */
export const placeRightOfBy = dfdl((target: Rect, source: Rect, distance: number): Rect => {
    return moveLeftTo(target, source.left + source.width + distance)
}, 3)
