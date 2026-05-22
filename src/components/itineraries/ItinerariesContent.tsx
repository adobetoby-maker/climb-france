import Link from 'next/link'
import { itineraries } from '@/lib/itineraries'

export default function ItinerariesContent() {
  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black text-white mb-4">Trip Itineraries</h1>
        <p className="text-gray-400 text-lg mb-12">
          Pre-planned climbing trips from weekend breaks to two-week grand tours.
        </p>
        <div className="grid gap-6">
          {itineraries.map((it) => (
            <div key={it.slug} className="bg-[#12122A] border border-gray-700 rounded-xl p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-xl font-bold text-white">{it.title}</h2>
                <span className="text-sm text-gray-400 shrink-0">{it.duration}</span>
              </div>
              <p className="text-gray-300">{it.description}</p>
              <div className="mt-4">
                <Link href="/contact" className="text-[#1B74C8] font-semibold hover:underline text-sm">
                  Get trip advice →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
