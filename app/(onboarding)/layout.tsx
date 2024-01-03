import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { HeroPattern } from '@/components/hero-pattern'

export const metadata: Metadata = {
  title: 'Onboarding - Entry Jobs',
  description: 'Setup your account',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen flex-col">
      <SiteHeader />
      <main className="flex w-full flex-1 justify-center px-5 pb-16 pt-8">{children}</main>
    </div>
  )
}
