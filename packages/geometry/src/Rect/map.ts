import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * Applies a transformation function to a rectangle, merging the returned partial rectangle with the original.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.map({ left: 10, top: 20, width: 100, height: 50 }, (r) => ({
 *     width: r.width * 2,
 * }));
 * // { left: 10, top: 20, width: 200, height: 50 }
 *
 * // data-last
 * pipe(
 *     { left: 10, top: 20, width: 100, height: 50 },
 *     Rect.map((r) => ({ width: r.width * 2 })),
 * );
 * // { left: 10, top: 20, width: 200, height: 50 }
 * ```
 */
export const map = dfdl((rect: Rect, transform: (rect: Rect) => Partial<Rect>): Rect => {
    return merge(rect, transform(rect))
}, 2)
