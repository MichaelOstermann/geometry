import type { Rect } from "."
import { dfdl } from "@monstermann/dfdl"

/**
 * Converts a DOMRectReadOnly object (from getBoundingClientRect or similar) into a Rect.
 *
 * @example
 * ```ts
 * // data-first
 * const domRect = element.getBoundingClientRect();
 * Rect.fromDOMRect(domRect);
 * // { left: 10, top: 20, width: 100, height: 50 }
 *
 * // data-last
 * const domRect = element.getBoundingClientRect();
 * pipe(domRect, Rect.fromDOMRect());
 * // { left: 10, top: 20, width: 100, height: 50 }
 * ```
 */
export const fromDOMRect = dfdl((rect: DOMRectReadOnly): Rect => {
    return {
        height: rect.height,
        left: rect.left,
        top: rect.top,
        width: rect.width,
    }
}, 1)
