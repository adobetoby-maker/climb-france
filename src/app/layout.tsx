import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { LangProvider } from '@/context/lang'

const GA_ID = 'G-RP0TZ1MP7E'
const BASE_URL = 'https://climb-france.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Climb France — Rock Climbing Guide to Fontainebleau, Verdon & Céüse',
    template: '%s | Climb France',
  },
  description: 'The complete guide to rock climbing in France. Fontainebleau bouldering, Verdon multi-pitch, Céüse sport climbing — grades, gear, approach notes.',
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en': `${BASE_URL}/`,
      'fr': `${BASE_URL}/`,
      'de': `${BASE_URL}/`,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Climb France',
    title: 'Climb France — Rock Climbing Guide to Fontainebleau, Verdon & Céüse',
    description: 'The complete guide to rock climbing in France. Fontainebleau bouldering, Verdon multi-pitch, Céüse sport climbing — grades, gear, approach notes.',
    url: BASE_URL,
    locale: 'en_US',
    images: [{
      url: `${BASE_URL}/images/routes/france-verdon-gorge.jpg`,
      width: 1200,
      height: 630,
      alt: 'Verdon Gorge rock climbing — Climb France',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Climb France — Rock Climbing Guide to Fontainebleau, Verdon & Céüse',
    description: 'The complete guide to rock climbing in France. Fontainebleau bouldering, Verdon multi-pitch, Céüse sport climbing.',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Climb France',
  url: BASE_URL,
  description: 'The complete guide to rock climbing in France.',
}

const sportsActivitySchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Climb France — Rock Climbing Guide',
  description: 'The complete guide to rock climbing in France. Covering Fontainebleau, Verdon Gorge, Céüse, and more.',
  url: BASE_URL,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.2276,
    longitude: 2.2137,
  },
  image: `${BASE_URL}/images/routes/france-verdon-gorge.jpg`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsActivitySchema) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#1A1A2E]">
        <LangProvider>
          <Nav />
          {children}
          <Footer />
        </LangProvider>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
