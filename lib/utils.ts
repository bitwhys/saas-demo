import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import plugin from 'tailwindcss/plugin'
import kebabCase from 'lodash.kebabcase'
import { radixColorScales } from '@/lib/plugin/tokens/colors'

export type BitTailwindPluginOptions = {
  scaling: number
  grey: 'slate' | 'gray' | 'mauve' | 'sage' | 'olive' | 'sand'
  accent: keyof typeof radixColorScales
  radius: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

type PluginWithOptions = typeof plugin.withOptions<Partial<BitTailwindPluginOptions>>

export type HandlerParamType = Parameters<PluginWithOptions>[0]
export type ThemeParamType = Parameters<PluginWithOptions>[1]
type GetKeyCallback = (str: string) => string
type GetValueCallback = (str: string) => string
export const createCustomScaleFunction = ({
  getKey,
  getValue,
}: {
  getKey?: GetKeyCallback
  getValue?: GetValueCallback
}) => {
  return function transformScale(scale: Record<string, string>) {
    const entries = Object.entries(scale)
    return entries.reduce(
      (acc, curr) => {
        const [key, value] = curr
        const _key = getKey ? getKey(key) : key
        acc[_key] = getValue ? getValue(value) : value
        return acc
      },
      {} as Record<string, string>,
    )
  }
}

/**
 * Converts a hexadecimal color code to HSL (Hue, Saturation, Lightness).
 * This function supports both short (e.g., "#fff") and full (e.g., "#ffffff") hex formats.
 *
 * @param {string} hex - The hexadecimal color code to be converted.
 * @returns {string} A string representing the HSL values:
 *           - H (Hue) as an angle in degrees [0, 360)
 *           - S (Saturation) as a percentage [0, 100]
 *           - L (Lightness) as a percentage [0, 100]
 * If the input hex code is invalid, the function may return incorrect results.
 */
function hexToHSL(hex: string): string {
  // Convert hex to RGB first
  let r: number = 0,
    g: number = 0,
    b: number = 0
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16)
    g = parseInt(hex[2] + hex[2], 16)
    b = parseInt(hex[3] + hex[3], 16)
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16)
    g = parseInt(hex.substring(3, 5), 16)
    b = parseInt(hex.substring(5, 7), 16)
  }

  // Then convert RGB to HSL
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h: number,
    s: number,
    l: number = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    // @ts-ignore
    h /= 6
  }

  // @ts-ignore
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}
export const getFunctionToTransformScaleToNamedHslVariables = (name: string) =>
  createCustomScaleFunction({
    getKey: str => {
      const regex = /\d{1,3}\b/g
      // @ts-ignore
      let [scale] = str.match(regex)
      return `--${name}-${scale}`
    },
    getValue: str => hexToHSL(str),
  })

export const getPluginOptions = (partialOptions: Partial<BitTailwindPluginOptions> = {}) => ({
  grey: partialOptions.grey ?? 'sand',
  accent: partialOptions.accent ?? 'orange',
  radius: partialOptions.radius ?? 'lg',
  scaling: partialOptions.scaling ?? 1,
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const transformCamelCaseObjectToKebabCase = createCustomScaleFunction({
  getKey: str => kebabCase(str),
})
