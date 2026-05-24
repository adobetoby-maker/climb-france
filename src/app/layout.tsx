import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import { LangProvider } from '@/context/lang'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: 'Climb France — Rock Climbing Guide to Fontainebleau, Verdon & Céüse',
  description: 'The complete guide to rock climbing in France. Fontainebleau bouldering, Verdon multi-pitch, Céüse sport climbing — grades, gear, approach notes.',
  openGraph: {
    title: 'Climb France',
    description: 'The complete guide to rock climbing in France.',
    images: [{ url: '/images/routes/france-verdon-gorge.jpg' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#1A1A2E]">
        <LangProvider>
          <Nav />
          {children}
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
