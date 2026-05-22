'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang, type Lang } from '@/context/lang'
import { content } from '@/lib/content'

const LANG_LABELS: Record<Lang, string> = { en: 'EN', fr: 'FR', de: 'DE' }

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { lang, setLang } = useLang()
  const c = content[lang]

  const navLinks = [
    { href: '/routes', label: c.nav.routes },
    { href: '/itineraries', label: c.nav.itineraries },
    { href: '/bases', label: c.nav.bases },
    { href: '/gear', label: c.nav.gear },
    { href: '/learn', label: lang === 'fr' ? 'Langue 🧗' : lang === 'de' ? 'Sprache 🧗' : 'Language 🧗' },
    { href: '/guided-tours', label: c.nav.guidedTours },
    { href: '/travel-tips', label: c.nav.travelTips },
    { href: '/blog', label: c.nav.blog },
  ]

  return (
    <nav className="bg-[#1A1A2E] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-[#D4185A] font-black text-xl uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4185A] rounded"
          >
            Climb France
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4185A] rounded px-1 ${
                  pathname.startsWith(link.href)
                    ? 'text-[#D4185A] font-semibold'
                    : 'text-white/80 hover:text-[#D4185A]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language toggle */}
            <div className="flex items-center gap-0.5 bg-white/10 rounded-lg p-0.5">
              {(['en', 'fr', 'de'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`text-xs font-bold px-2.5 py-1.5 rounded-md transition-colors ${
                    lang === l
                      ? 'bg-[#D4185A] text-[#1A1A2E]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>

            <Link
              href="/contact"
              className="text-sm bg-[#D4185A] text-black font-bold px-4 py-2 rounded hover:bg-[#D4185A]/90 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4185A]"
            >
              {c.nav.planTrip}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white focus-visible:ring-2 focus-visible:ring-[#D4185A] rounded"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#12122A]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith(link.href)
                    ? 'bg-[#D4185A]/10 text-[#D4185A]'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile language toggle */}
            <div className="flex items-center gap-1 px-3 py-2">
              {(['en', 'fr', 'de'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`text-xs font-bold px-3 py-1.5 rounded-md transition-colors ${
                    lang === l
                      ? 'bg-[#D4185A] text-[#1A1A2E]'
                      : 'bg-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>

            <div className="pt-2 pb-1">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-[#D4185A] text-black font-bold px-4 py-3 rounded-lg hover:bg-[#D4185A]/90 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4185A]"
              >
                {c.nav.planTripMobile}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
