import type { Rect } from "./types"
import { dfdl } from "@monstermann/dfdl"
import { normalize } from "./normalize"

/**
 * Merges a partial rectangle into a target rectangle, creating a new rectangle with updated properties.
 *
 * @example
 * ```ts
 * // data-first
 * Rect.merge(
 *     { left: 10, top: 20, width: 100, height: 50 },
 *     { width: 150, height: 75 },
 * );
 * // { left: 10, top: 20, width: 150, height: 75 }
 *
 * // data-last
 * pipe(
 *     { left: 10, top: 20, width: 100, height: 50 },
 *     Rect.merge({ width: 150, height: 75 }),
 * );
 * // { left: 10, top: 20, width: 150, height: 75 }
 * ```
 */
const ks = ["top", "left", "width", "height"] as const

export const merge = dfdl((target: Rect, source: Partial<Rect>): Rect => {
    let copy: any
    for (const k of ks) {
        if (source[k] === undefined) continue
        if (target[k] === source[k]) continue
        if (!Number.isFinite(source[k])) return target
        copy ??= { ...target }
        copy[k] = source[k]
    }
    if (!copy) return target
    return normalize(copy)
}, 2)
