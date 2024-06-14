import type { Metadata } from 'next'
import { Inter, Teko } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const teko = Teko({
  weight: ['500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-teko',
});

export const metadata: Metadata = {
  title: 'Dagmawi Nebeyu | Front-end Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${teko.variable} ${inter.className}`}>{children}</body>
    </html>
  )
}
