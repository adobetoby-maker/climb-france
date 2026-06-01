'use client'
import Link from 'next/link'
import { useLang } from '@/context/lang'
import { content } from '@/lib/content'

const worldClimbingSites = [
  { label: 'Climb Idaho', href: 'https://climb-idaho.vercel.app' },
  { label: 'Climb Brasil', href: 'https://climbbrasil.com' },
  { label: 'Climb Utah', href: 'https://climb-utah.worker-bee.app' },
]

export default function Footer() {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <footer className="bg-[#12122A] border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-[#D4185A] font-black text-lg uppercase tracking-wider">
              Climb France
            </Link>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-xs">
              {c.footer.tagline}
            </p>
          </div>

          {/* Site links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">France</h3>
            <ul className="space-y-2">
              <li><Link href="/routes" className="text-gray-400 text-sm hover:text-[#D4185A] transition-colors">{c.footer.routes}</Link></li>
              <li><Link href="/bases" className="text-gray-400 text-sm hover:text-[#D4185A] transition-colors">{c.footer.bases}</Link></li>
              <li><Link href="/itineraries" className="text-gray-400 text-sm hover:text-[#D4185A] transition-colors">{c.footer.itineraries}</Link></li>
              <li><Link href="/gear" className="text-gray-400 text-sm hover:text-[#D4185A] transition-colors">{c.footer.gear}</Link></li>
              <li><Link href="/blog" className="text-gray-400 text-sm hover:text-[#D4185A] transition-colors">{c.footer.blog}</Link></li>
            </ul>
          </div>

          {/* World Climbing */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              World Climbing
            </h3>
            <ul className="space-y-2">
              {worldClimbingSites.map((site) => (
                <li key={site.href}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-[#D4185A] transition-colors"
                  >
                    {site.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/explore" className="text-[#D4185A] text-sm font-semibold hover:underline">
                  {c.nav.explore} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 text-sm hover:text-[#D4185A] transition-colors">{c.footer.contact}</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-gray-400 text-sm hover:text-[#D4185A] transition-colors">{c.footer.affiliate}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Climb France. All rights reserved.
          </p>
          <Link href="/explore" className="text-xs text-gray-500 hover:text-[#D4185A] transition-colors">
            {c.nav.explore}
          </Link>
        </div>
      </div>
          <div className="text-center py-2 text-xs" style={{ opacity: 0.3 }}>
        <a
          href="https://worker-bee.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
        >
          Anderton &amp; Associates Web Services
        </a>
      </div>
</footer>
  )
}
