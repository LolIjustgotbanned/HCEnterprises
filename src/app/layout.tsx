import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HC Enterprises | Revenue Growth Agency',
  description:
    'HC Enterprises builds brand strategy, digital systems, and performance marketing engines for ambitious brands across North America.',
  keywords: [
    'marketing agency',
    'brand strategy',
    'revenue growth',
    'performance marketing',
    'digital marketing',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'HC Enterprises',
    title: 'HC Enterprises | Revenue Growth Agency',
    description:
      'HC Enterprises builds brand strategy, digital systems, and performance marketing engines for ambitious brands across North America.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
      style={{ colorScheme: 'dark', backgroundColor: '#000000' }}
    >
      <body className="antialiased bg-black">{children}</body>
    </html>
  )
}
