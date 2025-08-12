import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"
import { moveTopTo } from "./moveTopTo"

/**
 * Aligns the top edge of the `target` rectangle to the top edge of the `source` rectangle by moving the `target` rectangle vertically.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.alignTop(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     { left: 50, top: 30, width: 80, height: 40 },
 * );
 * // { left: 10, top: 30, width: 100, height: 50 }
 *
 * // data-last
 * pipe(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     Rect.alignTop({ left: 50, top: 30, width: 80, height: 40 }),
 * );
 * // { left: 10, top: 30, width: 100, height: 50 }
 * ```
 */
export const alignTop = dfdl((target: Rect, source: Rect): Rect => {
    return moveTopTo(target, source.top)
}, 2)
