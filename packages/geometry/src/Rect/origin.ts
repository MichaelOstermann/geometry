import type { Rect } from "./types"

/**
 * A constant representing the origin rectangle (positioned at 0,0 with zero width and height).
 *
 * @example
 * ```ts
 * // example
 * Rect.origin;
 * // { left: 0, top: 0, width: 0, height: 0 }
 * ```
 */
export const origin: Rect = { height: 0, left: 0, top: 0, width: 0 }
