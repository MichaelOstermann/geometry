import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * Creates a rectangle representing the browser window's viewport dimensions.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.fromWindow();
 * // { left: 0, top: 0, width: 1920, height: 1080 }
 *
 * // data-last
 * pipe(Rect.fromWindow());
 * // { left: 0, top: 0, width: 1920, height: 1080 }
 * ```
 */
export const fromWindow = dfdl((): Rect => {
    return {
        height: window.innerHeight,
        left: 0,
        top: 0,
        width: window.innerWidth,
    }
}, 0)
