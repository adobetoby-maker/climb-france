import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export function generateMetadata(): Metadata {
  return generatePageMetadata(
    'Explore More Climbing Destinations',
    'From French limestone to Aegean tufa — our full network of world-class climbing guides.',
    '/explore',
    'photo-1471874708374-8966c85e021b'
  )
}

interface Destination {
  name: string
  country: string
  areas: string
  description: string
  url: string
  image: string
  grades: string
}

const destinations: Destination[] = [
  {
    name: 'Climb Idaho',
    country: 'USA',
    areas: 'City of Rocks · The Fins · Sawtooth',
    description:
      'Granite domes, basalt sport, and alpine ridgelines. Idaho\'s climbing is dramatic, remote, and uncrowded.',
    url: 'https://climb-idaho.vercel.app',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&fit=crop',
    grades: '5.6–5.14d',
  },
  {
    name: 'Climb Brasil',
    country: 'Brazil',
    areas: 'Rio · Pancas · Pedra do Baú',
    description:
      'Tropical granite towers, multi-pitch sea cliffs, and the world\'s most scenic urban climbing.',
    url: 'https://climbbrasil.com',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80&fit=crop',
    grades: '5.7–5.15a',
  },
  {
    name: 'Climb Spain',
    country: 'Spain',
    areas: 'Costa Blanca · Siurana · El Chorro',
    description:
      'Europe\'s most climbed limestone. Winter sun on the coast, hard redpoints inland, trad in the Pyrenees.',
    url: 'https://climb-spain.worker-bee.app',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop',
    grades: '5a–9c',
  },
  {
    name: 'Climb Utah',
    country: 'USA',
    areas: 'Indian Creek · Zion · Moab',
    description:
      'Desert crack climbing perfection. Sandstone that turns gold in afternoon light, towers that test every grade.',
    url: 'https://climb-utah.worker-bee.app',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80&fit=crop',
    grades: '5.8–5.14d',
  },
  {
    name: 'Climb Kalymnos',
    country: 'Greece',
    areas: 'Grande Grotta · Odyssey · Spartan Wall',
    description:
      'Aegean tufa climbing on overhanging limestone with blue water views. The world\'s best sport climbing destination.',
    url: 'https://climb-kalymnos.worker-bee.app',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80&fit=crop',
    grades: '5a–9b',
  },
]

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      {/* Hero */}
      <section className="relative flex items-end pb-16 overflow-hidden" style={{ minHeight: '55vh' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1471874708374-8966c85e021b?w=1920&q=85&fit=crop"
            alt="World climbing destinations — mountain landscape"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/60 to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <p className="text-[#D4185A] font-bold uppercase tracking-widest text-sm mb-4">
            World Climbing Network
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            Explore More Climbing<br />Destinations
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            From French limestone to Aegean tufa — our full network of world-class climbing guides.
          </p>
        </div>
      </section>

      {/* Destination grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <a
              key={dest.url}
              href={dest.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#12122A] border border-gray-700 rounded-xl overflow-hidden hover:border-[#D4185A]/60 transition-colors block"
            >
              {/* Card image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={`${dest.name} — ${dest.areas}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
              </div>

              {/* Card body */}
              <div className="p-5">
                {/* Country + grade badges */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold bg-[#D4185A] text-white px-2.5 py-1 rounded-full">
                    {dest.country}
                  </span>
                  <span className="text-xs font-mono text-gray-400 border border-gray-600 px-2 py-0.5 rounded">
                    {dest.grades}
                  </span>
                </div>

                {/* Site name */}
                <h2 className="text-white font-black text-xl mb-1 group-hover:text-[#D4185A] transition-colors">
                  {dest.name}
                </h2>

                {/* Areas tagline */}
                <p className="text-[#D4185A] text-xs font-semibold uppercase tracking-wide mb-3">
                  {dest.areas}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {dest.description}
                </p>

                {/* CTA */}
                <span className="text-[#D4185A] font-bold text-sm group-hover:underline">
                  Visit →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Back to France CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <div className="border-t border-gray-700 pt-16">
          <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-4">
            You are currently on
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
            Climb France
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            The complete guide to Fontainebleau, Verdon, Céüse, Calanques, and Gorges du Tarn.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#D4185A] text-white font-black px-8 py-4 rounded-xl text-base hover:bg-[#D4185A]/90 transition-colors"
          >
            ← Back to France
          </Link>
        </div>
      </section>
    </main>
  )
}
