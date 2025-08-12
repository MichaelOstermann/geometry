import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"
import { moveLeftTo } from "./moveLeftTo"

/**
 * Aligns the left edge of the `target` rectangle to the left edge of the `source` rectangle by moving the `target` rectangle horizontally.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.alignLeft(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     { left: 50, top: 30, width: 80, height: 40 },
 * );
 * // { left: 50, top: 10, width: 100, height: 50 }
 *
 * // data-last
 * pipe(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     Rect.alignLeft({ left: 50, top: 30, width: 80, height: 40 }),
 * );
 * // { left: 50, top: 10, width: 100, height: 50 }
 * ```
 */
export const alignLeft = dfdl((target: Rect, source: Rect): Rect => {
    return moveLeftTo(target, source.left)
}, 2)
