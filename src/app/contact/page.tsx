import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Link from 'next/link'

export function generateMetadata(): Metadata {
  return generatePageMetadata(
    'Contact Climb France — Route Beta, Trip Advice & Questions',
    'Questions about a route, guide recommendations, or trip planning for climbing in France? Send us a message — we reply within 48 hours.',
    '/contact'
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      {/* Header */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <p className="text-[#D4185A] font-bold uppercase tracking-widest text-sm mb-4">
          Get in Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
          Contact Us
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Questions about a route, guide recommendations, or trip planning? We&apos;ll reply within 48 hours.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-24">
        <form
          action="https://formspree.io/f/climb-france"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-[#12122A] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4185A] transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-[#12122A] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4185A] transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full bg-[#12122A] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4185A] transition-colors resize-none"
              placeholder="What route are you planning? What grades do you climb? Any specific questions?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4185A] text-white font-black px-8 py-4 rounded-xl text-base hover:bg-[#D4185A]/90 transition-colors cursor-pointer"
          >
            Send message
          </button>
        </form>

        <div className="mt-12 border-t border-gray-700 pt-10">
          <h2 className="text-white font-black text-xl mb-4">Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is the best time to visit Fontainebleau?',
                a: 'October through March. Cool temperatures give friction on sandstone. Avoid summer — heat destroys skin and dries the forest.',
              },
              {
                q: 'Do I need a guide for Verdon?',
                a: 'For single-pitch sport routes on the rim — no. For multi-pitch descents into the gorge, we strongly recommend a local guide for your first visit. Retreating mid-route is very difficult.',
              },
              {
                q: 'Which area suits a 6b climber?',
                a: 'Céüse has a deep 6b–7b sport band. Fontainebleau has bouldering circuits at every level. Calanques suits 6a–7a sport climbers with an eye for sea views.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <p className="text-white font-bold mb-1">{q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
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
