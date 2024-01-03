import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import tailwindAnimatePlugin from 'tailwindcss-animate'
import plugin from 'tailwindcss/plugin'
import { getFunctionToTransformScaleToNamedHslVariables, getPluginOptions } from './lib/utils'
import { getRadixColorScales } from './lib/plugin/tokens/colors'

const config: Config = {
  darkMode: 'class',
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    tailwindAnimatePlugin,
    plugin(function ({ addBase }) {
      const { grey, accent, radius, scaling } = getPluginOptions({})
      const [light, dark, alpha, darkAlpha] = getRadixColorScales(grey)
      const [accentLight, accentDark, accentAlpha, accentDarkAlpha] = getRadixColorScales(accent)

      const getGreyPalette = getFunctionToTransformScaleToNamedHslVariables('grey')
      const getInvertedGreyPalette = getFunctionToTransformScaleToNamedHslVariables('grey-inverted')
      const getGreyAlphaPalette = getFunctionToTransformScaleToNamedHslVariables('grey-alpha')
      const getAccentPalette = getFunctionToTransformScaleToNamedHslVariables('accent')
      const getAccentAlphaPalette = getFunctionToTransformScaleToNamedHslVariables('accent-alpha')

      console.log(JSON.stringify(getAccentAlphaPalette(light), null, 2))
      addBase([
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
        {
          ':root': {
            ...getGreyPalette(light),
            ...getInvertedGreyPalette(dark),
            ...getGreyAlphaPalette(alpha),
            ...getAccentPalette(accentLight),
            ...getAccentAlphaPalette(accentAlpha),
          },
          '.dark': {
            ...getGreyPalette(dark),
            ...getInvertedGreyPalette(light),
            ...getGreyAlphaPalette(darkAlpha),
            ...getAccentPalette(accentDark),
            ...getAccentAlphaPalette(accentDarkAlpha),
          },
        },
      ])
    }),
  ],
}
export default config
