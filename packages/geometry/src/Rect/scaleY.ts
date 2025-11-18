import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"
import { centerY } from "./centerY"
import { merge } from "./merge"

/**
 * Scales the rectangle vertically by the specified factor while keeping it vertically centered.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.scaleY({ left: 10, top: 20, width: 100, height: 50 }, 1.5);
 * // { left: 10, top: 7.5, width: 100, height: 75 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.scaleY(1.5));
 * // { left: 10, top: 7.5, width: 100, height: 75 }
 * ```
 */
export const scaleY = dfdl((rect: Rect, factor: number): Rect => {
    const height = rect.height * Math.max(factor, 0)
    return merge(rect, {
        height,
        top: centerY(rect) - height / 2,
    })
}, 2)
