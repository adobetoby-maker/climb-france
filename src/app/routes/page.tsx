import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { routes } from '@/lib/routes'

export function generateMetadata(): Metadata {
  return {
    title: 'France Climbing Routes — Fontainebleau, Verdon, Céüse, Calanques | Climb France',
    description: '5 climbing routes across France — Fontainebleau sandstone bouldering, Verdon multi-pitch, Céüse sport, Calanques limestone, and Gorges du Tarn. Grades, gear lists, approach notes.',
  }
}

function DifficultyStars({ difficulty }: { difficulty: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <span className="flex gap-0.5" aria-label={`Difficulty ${difficulty} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < difficulty ? 'text-[#1B74C8]' : 'text-gray-600'} aria-hidden="true">★</span>
      ))}
    </span>
  )
}

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          All Routes
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          5 routes across France — sandstone bouldering, Mediterranean multi-pitch, and elite sport crags.
        </p>

        <div className="grid gap-6">
          {routes.map((route) => {
            const heroSrc = route.images.hero.startsWith('/')
              ? route.images.hero
              : `https://images.unsplash.com/${route.images.hero}?w=800&q=80`

            return (
              <Link
                key={route.slug}
                href={`/routes/${route.slug}`}
                className="group bg-[#12122A] border border-gray-700 rounded-2xl overflow-hidden flex flex-col sm:flex-row hover:border-[#1B74C8]/60 transition-colors"
              >
                <div className="relative w-full sm:w-72 shrink-0 aspect-video sm:aspect-auto sm:h-auto overflow-hidden">
                  <Image
                    src={heroSrc}
                    alt={route.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, 288px"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs font-bold bg-[#1B74C8] text-[#1A1A2E] px-2 py-0.5 rounded">
                        {route.grade.yosemite} / {route.grade.french}
                      </span>
                      <span className="text-xs font-bold bg-[#17A589] text-[#1A1A2E] px-2 py-0.5 rounded capitalize">
                        {route.style.replace('-', ' ')}
                      </span>
                      <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded">
                        {route.region}
                      </span>
                    </div>
                    <h2 className="text-xl font-black text-white group-hover:text-[#1B74C8] transition-colors mb-1 truncate">
                      {route.name}
                    </h2>
                    <p className="text-gray-400 text-sm mb-3">{route.baseCity} · {route.approachTime} approach</p>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                      {route.description.slice(0, 180)}...
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-3">
                      <DifficultyStars difficulty={route.grade.difficulty} />
                      <span className="text-gray-400 text-sm">{route.rating} ({route.reviewCount} reviews)</span>
                    </div>
                    <span className="text-[#1B74C8] font-semibold text-sm">View route →</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
