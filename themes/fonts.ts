import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const cabinetGrotesk = localFont({
  src: [
    {
      path: '../lib/fonts/cabinet-grotesk/CabinetGrotesk-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../lib/fonts/cabinet-grotesk/CabinetGrotesk-Extralight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../lib/fonts/cabinet-grotesk/CabinetGrotesk-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../lib/fonts/cabinet-grotesk/CabinetGrotesk-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../lib/fonts/cabinet-grotesk/CabinetGrotesk-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../lib/fonts/cabinet-grotesk/CabinetGrotesk-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../lib/fonts/cabinet-grotesk/CabinetGrotesk-Extrabold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../lib/fonts/cabinet-grotesk/CabinetGrotesk-Black.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-display',
})

export const guminert = localFont({
  src: [{ path: '../lib/fonts/guminert/Guminert-Light.woff2' }],
  display: 'swap',
  variable: '--font-sans',
})
export const inter = Inter({ subsets: ['latin'] })
export const robotoMono = Roboto_Mono({ subsets: ['latin'] })
