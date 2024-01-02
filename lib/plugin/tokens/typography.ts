export const typography = (theme) => ({
  DEFAULT: {
    css: {
      '--tw-prose-body': theme('colors.neutral.11'),
      '--tw-prose-headings': theme('colors.neutral.12'),
      '--tw-prose-links': theme('colors.accent.11'),
      // '--tw-prose-links-hover': theme('colors.teal.600'),
      // '--tw-prose-underline': theme('colors.teal.500 / 0.2'),
      '--tw-prose-underline-hover': theme('colors.accent.8'),
      '--tw-prose-bold': theme('colors.neutral.12'),
      '--tw-prose-counters': theme('colors.neutral.12'),
      '--tw-prose-bullets': theme('colors.neutral.12'),
      '--tw-prose-hr': theme('colors.neutral.6'),
      '--tw-prose-quotes': theme('colors.neutral.10'),
      '--tw-prose-quote-borders': theme('colors.accent.9'),
      // '--tw-prose-captions': theme('colors.zinc.400'),
      '--tw-prose-code': theme('colors.neutral.12'),
      '--tw-prose-code-bg': theme('colors.black'),
      // '--tw-prose-pre-code': theme('colors.zinc.100'),
      '--tw-prose-pre-bg': theme('colors.black'),
      '--tw-prose-pre-border': 'transparent',
      '--tw-prose-th-borders': theme('colors.neutral.7'),
      '--tw-prose-td-borders': theme('colors.neutral.5'),
      //
      // '--tw-prose-invert-body': theme('colors.zinc.400'),
      // '--tw-prose-invert-headings': theme('colors.zinc.200'),
      // '--tw-prose-invert-links': theme('colors.teal.400'),
      // '--tw-prose-invert-links-hover': theme('colors.teal.400'),
      // '--tw-prose-invert-underline': theme('colors.teal.400 / 0.3'),
      // '--tw-prose-invert-underline-hover': theme('colors.teal.400'),
      // '--tw-prose-invert-bold': theme('colors.zinc.200'),
      // '--tw-prose-invert-counters': theme('colors.zinc.200'),
      // '--tw-prose-invert-bullets': theme('colors.zinc.200'),
      // '--tw-prose-invert-hr': theme('colors.zinc.700 / 0.4'),
      // '--tw-prose-invert-quote-borders': theme('colors.zinc.500'),
      // '--tw-prose-invert-captions': theme('colors.zinc.500'),
      // '--tw-prose-invert-code': theme('colors.zinc.300'),
      // '--tw-prose-invert-code-bg': theme('colors.zinc.200 / 0.05'),
      // '--tw-prose-invert-pre-code': theme('colors.zinc.100'),
      // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 0.4)',
      // '--tw-prose-invert-pre-border': theme('colors.zinc.200 / 0.1'),
      // '--tw-prose-invert-th-borders': theme('colors.zinc.700'),
      // '--tw-prose-invert-td-borders': theme('colors.zinc.800'),

      // Headings
      // h1: {
      //   fontSize: theme('fontSize.4xl')
      // },h2: {
      //   fontSize: theme('fontSize.3xl')
      // },h3: {
      //   fontSize: theme('fontSize.2xl')
      // },h4: {
      //   fontSize: theme('fontSize.xl')
      // },h5: {
      //   fontSize: theme('fontSize.lg')
      // },h6: {
      //   fontSize: theme('fontSize.base')
      // }

      // Code blocks
      pre: {
        color: 'var(--tw-prose-pre-code)',
        fontSize: theme('fontSize.sm')[0],
        fontWeight: theme('fontWeight.medium'),
        backgroundColor: 'var(--tw-prose-pre-bg)',
        borderRadius: theme('borderRadius.3xl'),
        padding: theme('spacing.8'),
        overflowX: 'auto',
        border: '1px solid',
        borderColor: 'var(--tw-prose-pre-border)',
      },
      'pre code': {
        display: 'inline',
        color: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        backgroundColor: 'transparent',
        borderRadius: 0,
        padding: 0,
      },

      // Blockquotes
      'blockquote p::before': {
        display: 'none'
      },'blockquote p::after': {
        display: 'none'
      },


    }
  }
})
