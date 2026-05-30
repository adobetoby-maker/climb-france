import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { COMMANDS, TRAVEL_PHRASES, KNOT_STEPS, GEAR } from '@/lib/climbing-vocab'

export function generateMetadata(): Metadata {
  return generatePageMetadata(
    'Learn Climbing Basics — Commands, Knots & French Phrases',
    'Essential climbing commands, the figure-eight knot step by step, key gear explained, and French phrases every climber needs at the crag.',
    '/learn'
  )
}

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <p className="text-[#D4185A] font-bold uppercase tracking-widest text-sm mb-4">
          Climbing Basics
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
          Learn Before You Go
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          Essential commands, knot steps, gear reference, and the French phrases you need at the crag.
        </p>
      </section>

      {/* Climbing commands */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-white font-black text-2xl mb-6">Climbing Commands</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {COMMANDS.map((cmd) => (
            <div
              key={cmd.en}
              className="bg-[#12122A] border border-gray-700 rounded-xl px-5 py-4"
            >
              <p className="text-white font-black text-base">{cmd.en}</p>
              <p className="text-[#D4185A] text-sm font-semibold mt-1">{cmd.fr}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Figure-eight knot */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-white font-black text-2xl mb-2">Figure-Eight Follow-Through</h2>
        <p className="text-gray-400 text-sm mb-6">The standard tie-in knot for sport and multi-pitch climbing.</p>
        <div className="space-y-3">
          {KNOT_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#12122A] border border-gray-700 rounded-xl px-5 py-4 flex items-start gap-4"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4185A] text-white font-black text-sm flex items-center justify-center">
                {step.step}
              </span>
              <p className="text-gray-300 text-sm leading-relaxed pt-1">{step.en}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gear reference */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-white font-black text-2xl mb-6">Gear Reference</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {GEAR.map((item) => (
            <div
              key={item.id}
              className="bg-[#12122A] border border-gray-700 rounded-xl px-5 py-4 flex items-start gap-3"
            >
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <div>
                <p className="text-white font-bold">{item.names.en}</p>
                <p className="text-gray-400 text-sm mt-0.5">{item.description.en}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* French phrases */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <h2 className="text-white font-black text-2xl mb-2">French Phrases at the Crag</h2>
        <p className="text-gray-400 text-sm mb-6">Climbers in France generally speak English at international crags, but local guide services and campsite staff may not. These phrases help.</p>
        <div className="space-y-3">
          {TRAVEL_PHRASES.map((phrase) => (
            <div
              key={phrase.en}
              className="bg-[#12122A] border border-gray-700 rounded-xl px-5 py-4 grid sm:grid-cols-2 gap-2"
            >
              <p className="text-white text-sm font-semibold">{phrase.en}</p>
              <p className="text-[#D4185A] text-sm font-semibold">{phrase.fr}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Language tool callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-[#12122A] border border-[#D4185A]/40 rounded-xl p-6">
          <p className="text-[#D4185A] font-bold text-sm uppercase tracking-wide mb-2">
            Language Training
          </p>
          <h3 className="text-white font-black text-lg mb-2">
            Want to go deeper on French?
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            LinguaLens has a climbing-specific French module with spaced repetition, listening drills, and crag vocabulary.
          </p>
          <a
            href="https://language-lens-elite.worker-bee.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4185A] text-white font-black px-6 py-3 rounded-xl text-sm hover:bg-[#D4185A]/90 transition-colors cursor-pointer"
          >
            Try LinguaLens →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        <div className="border-t border-gray-700 pt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="/routes"
            className="inline-block bg-[#D4185A] text-white font-black px-8 py-4 rounded-xl text-base hover:bg-[#D4185A]/90 transition-colors cursor-pointer"
          >
            Browse Routes →
          </Link>
          <Link
            href="/gear"
            className="inline-block border border-gray-600 text-gray-300 font-bold px-8 py-4 rounded-xl text-base hover:border-[#D4185A] hover:text-white transition-colors cursor-pointer"
          >
            Gear Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
