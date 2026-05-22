import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import { LangProvider } from '@/context/lang'

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
      </body>
    </html>
  )
}
