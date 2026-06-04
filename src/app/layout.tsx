import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { SITE } from '@/lib/constants'
import JsonLd from '@/components/seo/JsonLd'

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

const TITLE = 'HC Enterprises | Websites, CRM & Marketing for Local Businesses'

export const metadata: Metadata = {
  metadataBase: new URL('https://hc-enterprises.vercel.app'),
  title: {
    default: TITLE,
    template: '%s | HC Enterprises',
  },
  description: SITE.subTagline,
  keywords: [
    'local business marketing',
    'websites for small businesses',
    'websites for contractors',
    'GoHighLevel agency',
    'local SEO',
    'CRM setup',
    'landscaping marketing',
    'roofing marketing',
    'car detailing marketing',
    'social media marketing for local business',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hc-enterprises.vercel.app',
    siteName: 'HC Enterprises',
    title: TITLE,
    description: SITE.subTagline,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SITE.subTagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
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
      <body className="antialiased bg-black">
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
