import { fontFamily } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
import { getRadixColorScales, getRadixPaletteObject } from './tokens/colors'
import { getRadiusVariables } from './tokens/radius'
import { createCustomVariableFromScale, getPluginOptions } from '@/lib/utils'
import type { BitTailwindPluginOptions, HandlerParamType, ThemeParamType } from '@/lib/utils'
import kebabCase from 'lodash.kebabcase'
import { radixThemeDefault } from '@/themes/theme.radix-default'

const { colors, radius } = radixThemeDefault

const themeColorsKeyValuePairs = Object.entries(colors)
const themeColorsVariables = themeColorsKeyValuePairs.reduce(
  (acc, curr) => {
    const [key, value] = curr
    const _key = `--${kebabCase(key)}`
    acc[_key] = value
    return acc
  },
  {} as Record<string, string>,
)
const handler: HandlerParamType = options => {
  const { scaling, radius, neutral, accent } = getPluginOptions(options)

  return function ({ addBase }) {
    const [light, dark, alpha, darkAlpha] = getRadixColorScales(neutral)
    const [accentLight, accentDark, accentAlpha, accentDarkAlpha] = getRadixColorScales(accent)

    // 1a. Add styles to base layer
    addBase([
      // Josh Comeau rest
      {
        '*,*::before,*::after': { boxSizing: 'border-box' },
        '*': { margin: '0' },
        'html,body': { height: '100%', fontSize: '16px' },
        body: { lineHeight: String(1.5), WebkitFontSmoothing: 'antialiased' },
        'img,picture,video,canvas,svg': {
          display: 'block',
          maxWidth: '100%',
        },
        'input,button,textarea,select': { font: 'inherit' },
        'p,h1,h2,h3,h4,h5,h6': { overflowWrap: 'break-word' },
        '#root,#__next': { isolation: 'isolate' },
      },
      // palette CSS variables
      {
        ':root': {
          ...createCustomVariableFromScale('neutral', light),
          ...createCustomVariableFromScale('neutral-inverted', dark),
          ...createCustomVariableFromScale('neutral-alpha', alpha),
          ...createCustomVariableFromScale('accent', accentLight),
          ...createCustomVariableFromScale('accent-alpha', accentAlpha),
        },
        '.dark': {
          ...createCustomVariableFromScale('neutral', dark),
          ...createCustomVariableFromScale('neutral-inverted', light),
          ...createCustomVariableFromScale('neutral-alpha', darkAlpha),
          ...createCustomVariableFromScale('accent', accentDark),
          ...createCustomVariableFromScale('accent-alpha', accentDarkAlpha),
        },
      },
      // TODO: semantic CSS variables
      {
        ':root': {
          ...getRadiusVariables(Number(scaling), radius),
          ...themeColorsVariables,
        },
        '.dark': {
          [`--page-background`]: `var(--neutral-1)`,
        },
      },
      {
        body: {
          '@apply selection:bg-accent-9 selection:text-black': {},
        },
      },
    ])
  }
}

const theme: ThemeParamType = options => {
  return {
    theme: {
      extend: {
        colors: {
          black: `var(--black)`,
          neutral: getRadixPaletteObject('neutral'),
          accent: getRadixPaletteObject('accent'),
          //  semantic classes
        },
        textColor: {
          body: `var(--text-body-color)`,
          secondary: `var(--text-secondary-color)`,
        },
        borderRadius: {
          DEFAULT: `var(--radius-2)`,
          sm: `var(--radius-1)`,
          md: `var(--radius-2)`,
          lg: `var(--radius-3)`,
          xl: `var(--radius-4)`,
          '2xl': `var(--radius-5)`,
          '3xl': `var(--radius-6)`,
        },
        backgroundColor: {
          page: `var(--page-background)`,
        },
        borderColor: {
          DEFAULT: `var(--border)`,
        },
        fontFamily: {
          sans: ['Guminert', ...fontFamily.sans],
          title: ['Alternox', ...fontFamily.sans],
        },
        fontSize: {
          body: [
            '1rem',
            {
              lineHeight: '1.5rem',
            },
          ],
          h1: [
            '3.5rem',
            {
              lineHeight: '3.75rem',
            },
          ],
          h2: [
            '2.25rem',
            {
              lineHeight: '2.625rem',
            },
          ],
          h3: [
            '1.875rem',
            {
              lineHeight: '2.25rem',
            },
          ],
          h4: [
            '1.5rem',
            {
              lineHeight: '2rem',
            },
          ],
          h5: [
            '1.25rem',
            {
              lineHeight: '1.75rem',
            },
          ],
          h6: [
            '1.125rem',
            {
              lineHeight: '1.5rem',
            },
          ],
          mini: [
            '0.75rem',
            {
              lineHeight: '1.5rem',
            },
          ],
        },
      },
    },
  }
}
export const themePlugin = plugin.withOptions<Partial<BitTailwindPluginOptions>>(handler, theme)
