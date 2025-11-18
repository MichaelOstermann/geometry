import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"
import { centerX } from "./centerX"
import { merge } from "./merge"

/**
 * Scales the rectangle horizontally by the specified factor while keeping it horizontally centered.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.scaleX({ left: 10, top: 20, width: 100, height: 50 }, 1.5);
 * // { left: -15, top: 20, width: 150, height: 50 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.scaleX(1.5));
 * // { left: -15, top: 20, width: 150, height: 50 }
 * ```
 */
export const scaleX = dfdl((rect: Rect, factor: number): Rect => {
    const width = rect.width * Math.max(factor, 0)
    return merge(rect, {
        left: centerX(rect) - width / 2,
        width,
    })
}, 2)
