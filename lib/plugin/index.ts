import { fontFamily } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
import { getRadixColorScales, getRadixPaletteObject } from './tokens/colors'
import { getFunctionToTransformScaleToNamedHslVariables, getPluginOptions } from '../utils'
import type { ThemeParamType } from '../utils'

const getNeutralPalette = getFunctionToTransformScaleToNamedHslVariables('neutral')
const getNeutralInvertedPalette = getFunctionToTransformScaleToNamedHslVariables('neutral-inverted')
const getNeutralAlphaPalette = getFunctionToTransformScaleToNamedHslVariables('neutral-alpha')
const getAccentPalette = getFunctionToTransformScaleToNamedHslVariables('accent')
const getAccentAlphaPalette = getFunctionToTransformScaleToNamedHslVariables('accent-alpha')

// @ts-ignore
export const handler = function ({ addBase }) {
  const { neutral, accent, radius, scaling } = getPluginOptions({})
  const [light, dark, alpha, darkAlpha] = getRadixColorScales(neutral)
  const [accentLight, accentDark, accentAlpha, accentDarkAlpha] = getRadixColorScales(
    accent as 'sand',
  )

  // 1a. Add styles to base layer
  addBase([
    // FIXME: Josh Comeau rest
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
    // TODO: palette CSS variables
    {
      ':root': {
        ...getNeutralPalette(light),
        ...getNeutralInvertedPalette(dark),
        ...getNeutralAlphaPalette(alpha),
        ...getAccentPalette(accentLight),
        ...getAccentAlphaPalette(accentAlpha),
      },
      '.dark': {
        ...getNeutralPalette(dark),
        ...getNeutralInvertedPalette(light),
        ...getNeutralAlphaPalette(darkAlpha),
        ...getAccentPalette(accentDark),
        ...getAccentAlphaPalette(accentDarkAlpha),
      },
    },
    // TODO: semantic CSS variables
    {
      ':root': {
        // ...getRadiusVariables(Number(scaling), radius),
        // ...themeColorsVariables,
      },
      '.dark': {
        // [`--page-background`]: `var(--neutral-1)`,
      },
    },
    {
      body: {
        '@apply selection:bg-accent-9 selection:text-black font-sans': {},
      },
    },
  ])
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
          sans: ['var(--font-sans)', ...fontFamily.sans],
          heading: ['var(--font-heading)', ...fontFamily.sans],
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
export const themePlugin = plugin(handler)
