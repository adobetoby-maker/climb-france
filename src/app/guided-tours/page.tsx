import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { AFFILIATES } from '@/lib/affiliates'

export function generateMetadata(): Metadata {
  return generatePageMetadata(
    'Guided Climbing Tours in France — Verdon, Céüse, Fontainebleau & Calanques',
    'Guided rock climbing tours and instruction in France. Half-day Fontainebleau circuits, multi-pitch Verdon descents, and sport climbing at Céüse with certified guides.',
    '/guided-tours'
  )
}

interface Tour {
  name: string
  area: string
  duration: string
  grade: string
  price: string
  included: string[]
  description: string
  guideUrl: string
}

const tours: Tour[] = [
  {
    name: 'Fontainebleau Bouldering Circuit',
    area: 'Fontainebleau, Île-de-France',
    duration: 'Half day (4 hrs)',
    grade: 'Font 4–6c+',
    price: 'From €90/person',
    included: ['FFME-certified guide', 'Circuit map', 'Chalk'],
    description: 'Your guide picks the circuit based on your level — from the white beginner slabs of Bas Cuvier to the technical Apremont Dalle. Train from Paris, climb with a pro, train back.',
    guideUrl: AFFILIATES.getYourGuide.tourUrl('Fontainebleau bouldering tour'),
  },
  {
    name: 'Verdon Multi-Pitch Descent',
    area: 'Gorges du Verdon, Provence',
    duration: 'Full day (8 hrs)',
    grade: '5a–6b',
    price: 'From €180/person',
    included: ['Breveté d\'État guide', 'Half ropes', 'Harness hire available', 'Transport from Moustiers'],
    description: 'Descend into the gorge on a classic 200m route. Your guide handles rope management, anchor selection, and the complex rappels back to the Couloir Samson. Suitable for experienced sport climbers making their first Verdon foray.',
    guideUrl: AFFILIATES.getYourGuide.tourUrl('Verdon Gorge climbing tour'),
  },
  {
    name: 'Céüse Sport Climbing',
    area: 'Céüse, Hautes-Alpes',
    duration: 'Full day (7 hrs including approach)',
    grade: '6a–7b',
    price: 'From €150/person',
    included: ['UIAGM guide', 'All climbing equipment', 'Picnic lunch'],
    description: 'The 1.5-hour approach earns access to the Blue Monster sector — perfect 6c–7b limestone at altitude. Your guide selects routes to push your grade on Céüse\'s famously long, sustained lines.',
    guideUrl: AFFILIATES.getYourGuide.tourUrl('Ceuse climbing tour France'),
  },
  {
    name: 'Calanques Limestone Half-Day',
    area: 'Calanques, Marseille',
    duration: 'Half day (4 hrs)',
    grade: '5b–7a',
    price: 'From €95/person',
    included: ['FFME-certified guide', 'Helmet', 'Equipment hire available'],
    description: 'Sea-cliff sport climbing above turquoise Mediterranean water. Short routes on featured limestone, boat views, and a guide who knows which sectors avoid the summer closure zones.',
    guideUrl: AFFILIATES.getYourGuide.tourUrl('Calanques climbing Marseille'),
  },
]

export default function GuidedToursPage() {
  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <p className="text-[#D4185A] font-bold uppercase tracking-widest text-sm mb-4">
          Guided Climbing
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
          Guided Tours in France
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          Hire a French guide for your first Verdon descent, a Font circuit above your grade, or a Céüse day with expert route selection.
        </p>
      </section>

      {/* Tour cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-8">
        {tours.map((tour) => (
          <div
            key={tour.name}
            className="bg-[#12122A] border border-gray-700 rounded-xl p-6 hover:border-[#D4185A]/50 transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-white font-black text-xl mb-1">{tour.name}</h2>
                <p className="text-[#D4185A] text-sm font-semibold">{tour.area}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-black text-lg">{tour.price}</p>
                <p className="text-gray-400 text-sm">{tour.duration}</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">{tour.description}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-xs bg-[#D4185A]/20 text-[#D4185A] px-3 py-1 rounded-full font-semibold">
                {tour.grade}
              </span>
              {tour.included.map((item) => (
                <span key={item} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                  {item}
                </span>
              ))}
            </div>

            <a
              href={tour.guideUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-[#D4185A] text-white font-black px-6 py-3 rounded-xl text-sm hover:bg-[#D4185A]/90 transition-colors cursor-pointer"
            >
              Check Availability →
            </a>
          </div>
        ))}
      </section>

      {/* Why use a guide */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="border-t border-gray-700 pt-12">
          <h2 className="text-white font-black text-2xl mb-6">When a Guide Makes Sense</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: 'First Verdon descent',
                body: 'The rappel sequences are complex. Retreat mid-gorge is nearly impossible. A guide turns a stressful day into a confident one.',
              },
              {
                title: 'Pushing your grade',
                body: 'French limestone is technical and polished on popular lines. A guide provides real-time feedback on footwork and clipping technique.',
              },
              {
                title: 'Unknown area',
                body: 'Local guides know which routes are in condition, which sectors avoid the crowds, and which approach shortcuts matter.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#12122A] border border-gray-700 rounded-xl p-5">
                <p className="text-[#D4185A] font-black text-sm uppercase tracking-wide mb-2">{title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 text-center">
        <p className="text-gray-400 mb-4">Not sure which tour fits your level?</p>
        <Link
          href="/contact"
          className="inline-block bg-[#D4185A] text-white font-black px-8 py-4 rounded-xl text-base hover:bg-[#D4185A]/90 transition-colors cursor-pointer"
        >
          Ask Us for a Recommendation
        </Link>
      </section>
    </main>
  )
}
