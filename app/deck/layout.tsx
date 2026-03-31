import type { Metadata } from 'next'
import { DM_Sans, Outfit } from 'next/font/google'
import './deck.css'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Irys Agency — Présentation',
  robots: { index: false, follow: false },
}

export default function DeckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`${dmSans.variable} ${outfit.variable}`}
      style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-dm-sans), sans-serif' }}
    >
      {children}
    </div>
  )
}
