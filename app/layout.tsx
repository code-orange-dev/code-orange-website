import type { Metadata, Viewport } from 'next'
import { Inter, Permanent_Marker, Nunito, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import Analytics from '@/components/Analytics'
import MobileApplyCTA from '@/components/MobileApplyCTA'
import { SITE } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-permanent-marker',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}, ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: '/' },
  category: 'education',
  keywords: [
    'bitcoin developer school',
    'bitcoin education',
    'bitcoin bali',
    'bitcoin southeast asia',
    'learn bitcoin',
    'bitcoin workshops',
    'nostr',
    'lightning network',
    'self custody',
    'bitcoin node',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    title: `${SITE.name}, ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name}, ${SITE.tagline}`,
    description: SITE.description,
    creator: '@codeorangedevs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Cover lets us extend backgrounds into the iOS safe-areas (Dynamic Island, home bar)
  // and gives us env(safe-area-inset-*) to use in CSS.
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#F7931A' },
  ],
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${permanentMarker.variable} ${nunito.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg text-white antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        <JsonLd />
        <Navbar />
        <main id="main" className="min-h-screen">{children}</main>
        <Footer />
        <MobileApplyCTA />
        <Analytics />
      </body>
    </html>
  )
}
