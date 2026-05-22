'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { BaseCity } from '@/lib/bases'
import type { ClimbingRoute } from '@/lib/routes'
import { useLang } from '@/context/lang'
import { content } from '@/lib/content'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'

type Props = {
  base: BaseCity
  accessibleRoutes: ClimbingRoute[]
  hasAffiliateLinks: boolean
}

export default function BaseCityContent({ base, accessibleRoutes, hasAffiliateLinks }: Props) {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <div className="bg-[#1A1A2E] min-h-screen text-[#F5F0EB]">
      {/* Header */}
      <header className="bg-[#16213E] border-b border-white/10 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#1B74C8] text-black text-xs font-bold px-3 py-1 rounded uppercase tracking-widest">
              {base.airport.split(' ')[0].replace('(', '').replace(')', '')}
            </span>
            <span className="text-[#17A589] text-sm font-medium">{base.driveTimeToClimbs}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{base.name}</h1>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl">{base.description}</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">
        {/* Routes Accessible */}
        <section aria-labelledby="routes-heading">
          <h2
            id="routes-heading"
            className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-3"
          >
            {c.labels.routesAccessible}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {accessibleRoutes.map((route) => (
              <Link
                key={route.slug}
                href={`/routes/${route.slug}`}
                className="group flex gap-4 bg-[#16213E] rounded-xl overflow-hidden border border-white/10 hover:border-[#1B74C8]/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#1B74C8] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <div className="relative w-28 h-20 shrink-0">
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
                  <p className="text-gray-400 text-xs mt-1 capitalize">{route.style}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Restaurants */}
        <section aria-labelledby="restaurants-heading">
          <h2
            id="restaurants-heading"
            className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-3"
          >
            {c.bases.restaurants}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-400 text-xs uppercase tracking-wide border-b border-white/10">
                  <th className="pb-3 pr-4 font-medium">Name</th>
                  <th className="pb-3 pr-4 font-medium">Specialty</th>
                  <th className="pb-3 pr-4 font-medium">Price</th>
                  <th className="pb-3 pr-4 font-medium">Address</th>
                  <th className="pb-3 font-medium">Tip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {base.restaurants.map((r) => (
                  <tr key={r.name} className="align-top">
                    <td className="py-3 pr-4 text-white font-semibold whitespace-nowrap">{r.name}</td>
                    <td className="py-3 pr-4 text-gray-300">{r.specialty}</td>
                    <td className="py-3 pr-4 text-[#17A589] whitespace-nowrap font-medium">{r.priceRange}</td>
                    <td className="py-3 pr-4 text-gray-400 text-xs">{r.address}</td>
                    <td className="py-3 text-[#F5F0EB] text-xs italic">{r.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Lodging */}
        <section aria-labelledby="lodging-heading">
          <h2
            id="lodging-heading"
            className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-3"
          >
            {c.bases.lodging}
          </h2>
          {hasAffiliateLinks && <AffiliateDisclosure />}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {base.lodging.map((l) => (
              <div
                key={l.name}
                className="bg-[#16213E] rounded-xl border border-white/10 p-5"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold text-base leading-snug">{l.name}</h3>
                  {l.affiliate && (
                    <span className="shrink-0 text-[0.6rem] text-[#1B74C8] border border-[#1B74C8]/40 rounded px-1 py-0.5 uppercase tracking-wide">
                      partner
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{l.type}</p>
                <p className="text-[#17A589] font-semibold text-sm mb-3">{l.pricePerNight} / night</p>
                <p className="text-gray-300 text-sm italic">{l.tip}</p>
                {l.bookingUrl && (
                  <a
                    href={l.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[#1B74C8] text-sm hover:underline focus-visible:ring-2 focus-visible:ring-[#1B74C8] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                  >
                    Book now →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Getting Around */}
        <section aria-labelledby="getting-around-heading">
          <h2
            id="getting-around-heading"
            className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3"
          >
            {c.bases.gettingAround}
          </h2>
          <p className="text-gray-300 leading-relaxed">{base.gettingAround}</p>
        </section>

        {/* Emergency Information */}
        <section aria-labelledby="emergency-heading">
          <h2
            id="emergency-heading"
            className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3"
          >
            {c.bases.emergency}
          </h2>
          <div className="bg-red-950/50 border border-red-500/40 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-red-400 text-xl shrink-0 leading-none">!</span>
              <div className="space-y-2 text-sm">
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{c.bases.hospital}</p>
                    <p className="text-white font-semibold">{base.emergency.hospital}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Phone</p>
                    <a
                      href={`tel:${base.emergency.phone.replace(/\s/g, '')}`}
                      className="text-[#1B74C8] font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-[#1B74C8] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                    >
                      {base.emergency.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Distance</p>
                    <p className="text-white font-semibold">{base.emergency.distanceKm} km</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  Save this number before heading out. Emergency numbers in France: 15 (SAMU ambulance), 17 (police), 18 (fire/rescue), 112 (European emergency).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="pt-2">
          <Link
            href="/bases"
            className="inline-flex items-center gap-2 text-[#1B74C8] hover:underline focus-visible:ring-2 focus-visible:ring-[#1B74C8] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
          >
            {c.labels.back}
          </Link>
        </div>
      </div>
    </div>
  )
}
