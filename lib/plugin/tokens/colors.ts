import {
  slate,
  slateDark,
  slateA,
  slateDarkA,
  gray,
  grayDark,
  grayA,
  grayDarkA,
  sage,
  sageDark,
  sageA,
  sageDarkA,
  sand,
  sandDark,
  sandA,
  sandDarkA,
  olive,
  oliveDark,
  oliveA,
  oliveDarkA,
  mauve,
  mauveDark,
  mauveA,
  mauveDarkA,
  lime,
  limeDark,
  limeA,
  limeDarkA,
  crimson,
  crimsonDark,
  crimsonA,
  crimsonDarkA,
} from '@radix-ui/colors'

const radixColorScales = {
  slate: [slate, slateDark, slateA, slateDarkA],
  gray: [gray, grayDark, grayA, grayDarkA],
  sage: [sage, sageDark, sageA, sageDarkA],
  sand: [sand, sandDark, sandA, sandDarkA],
  olive: [olive, oliveDark, oliveA, oliveDarkA],
  mauve: [mauve, mauveDark, mauveA, mauveDarkA],
  lime: [lime, limeDark, limeA, limeDarkA],
  crimson: [crimson, crimsonDark, crimsonA, crimsonDarkA],
}
export const getRadixColorScales = (scale: keyof typeof radixColorScales) => {
  return radixColorScales[scale]
}
export const getRadixPaletteObject = (palette: 'neutral' | 'accent') => ({
  1: `var(--${palette}-1)`,
  2: `var(--${palette}-2)`,
  3: `var(--${palette}-3)`,
  4: `var(--${palette}-4)`,
  5: `var(--${palette}-5)`,
  6: `var(--${palette}-6)`,
  7: `var(--${palette}-7)`,
  8: `var(--${palette}-8)`,
  9: `var(--${palette}-9)`,
  10: `var(--${palette}-10)`,
  11: `var(--${palette}-11)`,
  12: `var(--${palette}-12)`,
  a1: `var(--${palette}-alpha-1)`,
  a2: `var(--${palette}-alpha-2)`,
  a3: `var(--${palette}-alpha-3)`,
  a4: `var(--${palette}-alpha-4)`,
  a5: `var(--${palette}-alpha-5)`,
  a6: `var(--${palette}-alpha-6)`,
  a7: `var(--${palette}-alpha-7)`,
  a8: `var(--${palette}-alpha-8)`,
  a9: `var(--${palette}-alpha-9)`,
  a10: `var(--${palette}-alpha-10)`,
  a11: `var(--${palette}-alpha-11)`,
  a12: `var(--${palette}-alpha-12)`,
  'inverted-1': `var(--${palette}-inverted-1)`,
  'inverted-2': `var(--${palette}-inverted-2)`,
  'inverted-3': `var(--${palette}-inverted-3)`,
  'inverted-4': `var(--${palette}-inverted-4)`,
  'inverted-5': `var(--${palette}-inverted-5)`,
  'inverted-6': `var(--${palette}-inverted-6)`,
  'inverted-7': `var(--${palette}-inverted-7)`,
  'inverted-8': `var(--${palette}-inverted-8)`,
  'inverted-9': `var(--${palette}-inverted-9)`,
  'inverted-10': `var(--${palette}-inverted-10)`,
  'inverted-11': `var(--${palette}-inverted-11)`,
  'inverted-12': `var(--${palette}-inverted-12)`,
})