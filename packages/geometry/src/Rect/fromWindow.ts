import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"

/**
 * # fromWindow
 *
 * ```ts
 * function Rect.fromWindow(): Rect
 * ```
 *
 * Creates a rectangle representing the browser window's viewport dimensions.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.fromWindow();
 * // { left: 0, top: 0, width: 1920, height: 1080 }
 * ```
 *
 * ```ts [data-last]
 * pipe(Rect.fromWindow());
 * // { left: 0, top: 0, width: 1920, height: 1080 }
 * ```
 *
 */
export const fromWindow = dfdl((): Rect => {
    return {
        height: window.innerHeight,
        left: 0,
        top: 0,
        width: window.innerWidth,
    }
}, 0)
