'use client'
import Image from 'next/image'
import Link from 'next/link'
import type { Itinerary } from '@/lib/itineraries'
import type { ClimbingRoute } from '@/lib/routes'
import { useLang } from '@/context/lang'
import { content } from '@/lib/content'
import RouteSafetyBanner from '@/components/RouteSafetyBanner'
import LanguageThresholdCallout from '@/components/LanguageThresholdCallout'
import BookingCallout from '@/components/BookingCallout'

type Props = {
  itinerary: Itinerary
  includedRoutes: ClimbingRoute[]
}

function DaySection({ label, content: text }: { label: string; content: string }) {
  return (
    <div className="bg-[#F5F0EB] rounded-lg p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A2E]/60 mb-1">{label}</p>
      <p className="text-[#1A1A2E] text-sm leading-relaxed">{text}</p>
    </div>
  )
}

export default function ItineraryDetailContent({ itinerary, includedRoutes }: Props) {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <div className="bg-[#1A1A2E] min-h-screen text-[#F5F0EB]">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[380px] w-full">
        <Image
          src={`https://images.unsplash.com/${itinerary.heroImage}?w=1200&q=80`}
          alt={itinerary.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block bg-[#1B74C8] text-black text-xs font-bold px-3 py-1 rounded uppercase tracking-widest mb-4">
            {itinerary.duration.replace('-', ' ')}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {itinerary.name}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* Quick overview */}
        <section aria-label="Quick overview">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: c.labels.baseCity, value: itinerary.baseCity, color: 'text-[#F5F0EB]' },
              { label: 'Total Climbing', value: itinerary.totalClimbing, color: 'text-[#F5F0EB]' },
              { label: c.labels.difficulty, value: itinerary.difficulty, color: 'text-[#F5F0EB]' },
              { label: c.itineraries.costEstimate, value: itinerary.costEstimate, color: 'text-[#17A589]' },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-[#16213E] rounded-xl p-4 border border-white/10">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{label}</p>
                <p className={`${color} text-sm font-semibold leading-snug`}>{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best For callout */}
        <section aria-labelledby="bestfor-heading">
          <div className="border-l-4 border-[#1B74C8] bg-[#16213E] rounded-r-xl p-6">
            <h2 id="bestfor-heading" className="text-[#1B74C8] font-bold uppercase text-xs tracking-widest mb-2">
              {c.itineraries.bestFor}
            </h2>
            <p className="text-[#F5F0EB] text-base leading-relaxed">{itinerary.bestFor}</p>
          </div>
        </section>

        {/* Day-by-day */}
        <section aria-labelledby="daybyday-heading">
          <h2
            id="daybyday-heading"
            className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-3"
          >
            {c.itineraries.dayBy}
          </h2>
          <div className="space-y-8">
            {itinerary.dayByDay.map((day) => (
              <div key={day.day} className="bg-[#16213E] rounded-xl p-6 border border-white/10">
                <h3 className="text-[#1B74C8] font-bold text-lg mb-4">Day {day.day}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <DaySection label={c.itineraries.morning} content={day.morning} />
                  <DaySection label={c.itineraries.afternoon} content={day.afternoon} />
                  <DaySection label={c.itineraries.evening} content={day.evening} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Routes included */}
        {includedRoutes.length > 0 && (
          <section aria-labelledby="routes-heading">
            <h2
              id="routes-heading"
              className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-3"
            >
              Routes Included
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includedRoutes.map((route) => (
                <Link
                  key={route.slug}
                  href={`/routes/${route.slug}`}
                  className="group flex gap-4 bg-[#16213E] rounded-xl overflow-hidden border border-white/10 hover:border-[#1B74C8]/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#1B74C8] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <div className="relative w-28 shrink-0">
                    <Image
                      src={`https://images.unsplash.com/${route.images.hero}?w=800&q=80`}
                      alt={route.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <div className="py-3 pr-4 flex flex-col justify-center">
                    <p className="text-white font-semibold text-sm group-hover:text-[#1B74C8] transition-colors leading-snug">
                      {route.name}
                    </p>
                    <p className="text-[#1B74C8] text-xs mt-1">
                      {route.grade.yosemite} / {route.grade.french}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Gear list */}
        <section aria-labelledby="gear-heading">
          <h2
            id="gear-heading"
            className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-3"
          >
            Gear List
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {itinerary.gearList.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#F5F0EB] text-sm">
                <span className="text-[#17A589] mt-0.5 shrink-0">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Logistics */}
        <section aria-labelledby="logistics-heading">
          <h2
            id="logistics-heading"
            className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3"
          >
            {c.itineraries.logistics}
          </h2>
          <p className="text-gray-300 leading-relaxed">{itinerary.logisticsNotes}</p>
        </section>

        {/* Accommodation search */}
        <BookingCallout city={itinerary.baseCity} label={`Find accommodation in ${itinerary.baseCity}`} />

        {/* Language cross-sell for multi-day trips */}
        <LanguageThresholdCallout />

        <RouteSafetyBanner />

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/itineraries"
            className="inline-flex items-center gap-2 text-[#1B74C8] hover:underline focus-visible:ring-2 focus-visible:ring-[#1B74C8] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
          >
            {c.labels.back}
          </Link>
        </div>
      </div>
    </div>
  )
}
