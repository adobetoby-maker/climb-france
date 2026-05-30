import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Link from 'next/link'

export function generateMetadata(): Metadata {
  return generatePageMetadata(
    'Affiliate Disclosure — Climb France',
    'Climb France uses affiliate links to gear shops, guided tour operators, and accommodation booking sites. Here is how that works.',
    '/affiliate-disclosure'
  )
}

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-24">
        <p className="text-[#D4185A] font-bold uppercase tracking-widest text-sm mb-4">
          Transparency
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tight">
          Affiliate Disclosure
        </h1>

        <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p>
            Climb France contains affiliate links to gear retailers, accommodation booking sites, and guided tour operators. When you click one of these links and make a purchase, we may earn a small commission at no extra cost to you.
          </p>

          <h2 className="text-white font-black text-xl mt-8 mb-3">What We Link To</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-400">
            <li>Amazon — climbing gear recommendations (tag: <code className="text-[#D4185A]">climbfrance-20</code>)</li>
            <li>Booking.com — accommodation near climbing areas</li>
            <li>GetYourGuide — guided climbing tours and instructors</li>
            <li>World Nomads — travel insurance for adventure activities</li>
          </ul>

          <h2 className="text-white font-black text-xl mt-8 mb-3">Our Editorial Policy</h2>
          <p>
            Affiliate relationships never influence which routes, gear, or operators we recommend. We only link to products and services we have personally used or thoroughly researched. Commission rates are set by the affiliate platforms — we have no control over pricing and we do not accept payment for editorial coverage.
          </p>

          <h2 className="text-white font-black text-xl mt-8 mb-3">Guided Tours</h2>
          <p>
            Some guide operators listed on this site are affiliate partners. Individual route pages clearly mark sponsored listings. Non-sponsored operators are listed because they are the best option for that area — not because of any commercial relationship.
          </p>

          <h2 className="text-white font-black text-xl mt-8 mb-3">Questions</h2>
          <p>
            If you have questions about how we use affiliate links or want to know whether a specific recommendation is sponsored, contact us at{' '}
            <Link href="/contact" className="text-[#D4185A] hover:underline cursor-pointer">
              our contact page
            </Link>
            .
          </p>

          <p className="text-gray-500 text-sm mt-10 pt-6 border-t border-gray-700">
            Last updated: May 2026. In compliance with FTC guidelines on endorsements and testimonials.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="text-[#D4185A] font-bold hover:underline text-sm"
          >
            ← Back to Climb France
          </Link>
        </div>
      </section>
    </main>
  )
}
