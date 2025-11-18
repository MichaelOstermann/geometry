import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * Sets the center point of the rectangle to the specified coordinates.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.setCenter({ left: 10, top: 20, width: 100, height: 50 }, 75, 60);
 * // { left: 25, top: 35, width: 100, height: 50 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setCenter(75, 60));
 * // { left: 25, top: 35, width: 100, height: 50 }
 * ```
 */
export const setCenter = dfdl((rect: Rect, x: number, y: number): Rect => {
    return merge(rect, {
        left: x - (rect.width / 2),
        top: y - (rect.height / 2),
    })
}, 3)
