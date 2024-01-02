import type { Config } from 'tailwindcss'
import { themePlugin } from '@/lib/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    themePlugin({
      neutral: 'sand',
    }),
  ],
}
export default config
