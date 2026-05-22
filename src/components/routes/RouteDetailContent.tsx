'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/context/lang'
import { content } from '@/lib/content'
import type { ClimbingRoute } from '@/lib/routes'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import GymPrerequisites from '@/components/GymPrerequisites'
import PhotoGallery from '@/components/PhotoGallery'
import RouteSafetyBanner from '@/components/RouteSafetyBanner'
import BookingCallout from '@/components/BookingCallout'
import GetYourGuideCallout from '@/components/GetYourGuideCallout'
import GuideBookCTA from '@/components/GuideBookCTA'

function DifficultyStars({ difficulty }: { difficulty: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <span className="flex gap-0.5" aria-label={`Difficulty ${difficulty} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < difficulty ? 'text-[#1B74C8]' : 'text-gray-600'} aria-hidden="true">
          ★
        </span>
      ))}
    </span>
  )
}

function SponsoredBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-bold bg-[#1B74C8]/10 text-[#1B74C8] border border-[#1B74C8]/30 px-2 py-0.5 rounded ml-2">
      {label}
    </span>
  )
}


type Props = {
  route: ClimbingRoute
  hasAffiliateGuide: boolean
  hasAffiliateLodging: boolean
}

export default function RouteDetailContent({ route, hasAffiliateGuide, hasAffiliateLodging }: Props) {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <article className="min-h-screen bg-[#1A1A2E]">
      {/* Hero */}
      <div className="relative h-80 md:h-96 w-full overflow-hidden">
        <Image
          src={route.images.hero.startsWith('/') ? route.images.hero : `https://images.unsplash.com/${route.images.hero}?w=1200&q=80`}
          alt={route.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm font-bold bg-[#1B74C8] text-[#1A1A2E] px-3 py-1 rounded">
                {route.grade.yosemite} / {route.grade.french}
              </span>
              <span className="text-sm font-bold bg-[#17A589] text-[#1A1A2E] px-3 py-1 rounded capitalize">
                {route.style.replace('-', ' ')}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {route.name}
            </h1>
            <p className="text-gray-300 mt-2 text-lg">{route.baseCity}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Quick facts */}
        <section className="mb-12" aria-labelledby="quick-facts-heading">
          <h2 id="quick-facts-heading" className="text-xl font-bold text-white mb-5">{c.labels.quickFacts}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: c.labels.pitches, value: String(route.pitches) },
              { label: c.labels.approach, value: route.approachTime },
              { label: c.labels.climbTime, value: route.climbTime },
              { label: c.labels.elevation, value: `${route.elevationGainMeters}m` },
              { label: c.labels.season, value: route.seasonBest.slice(0, 3).join(', ') + (route.seasonBest.length > 3 ? '…' : '') },
              { label: c.labels.totalDay, value: route.totalDayTime },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#12122A] rounded-lg p-4 border border-gray-700">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">{label}</p>
                <p className="text-white font-semibold text-sm leading-snug">{value}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-4">
            <DifficultyStars difficulty={route.grade.difficulty} />
            <span className="text-gray-400 text-sm">{route.rating} ({route.reviewCount} {c.labels.reviews})</span>
          </div>
        </section>

        {/* Description */}
        <section className="mb-12" aria-labelledby="description-heading">
          <h2 id="description-heading" className="text-xl font-bold text-white mb-4">{c.labels.aboutRoute}</h2>
          <p className="text-gray-300 leading-relaxed text-base">{route.description}</p>
        </section>

        {/* Crux */}
        <section className="mb-12" aria-labelledby="crux-heading">
          <div className="border-l-4 border-[#1B74C8] bg-[#12122A] rounded-r-xl p-6">
            <h2 id="crux-heading" className="text-[#1B74C8] font-bold text-lg mb-3 flex items-center gap-2">
              {c.labels.crux}
            </h2>
            <p className="text-gray-200 leading-relaxed">{route.cruxDescription}</p>
          </div>
        </section>

        {/* Before You Go — gym prerequisites */}
        <GymPrerequisites prereqs={route.gymPrerequisites} routeName={route.name} />

        {/* Warnings */}
        {route.warnings.length > 0 && (
          <section className="mb-12" aria-labelledby="warnings-heading">
            <h2 id="warnings-heading" className="text-xl font-bold text-white mb-4">{c.labels.warnings}</h2>
            <ul className="space-y-3">
              {route.warnings.map((w, i) => (
                <li key={i} className="flex gap-3 bg-red-950/40 border border-red-800/50 rounded-lg p-4">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5" aria-hidden="true">!</span>
                  <span className="text-red-200 text-sm leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Gear */}
        <section className="mb-12 grid sm:grid-cols-2 gap-6" aria-labelledby="gear-heading">
          <div>
            <h2 id="gear-heading" className="text-xl font-bold text-white mb-4">{c.labels.gear}</h2>
            <ul className="space-y-2">
              {route.gearRequired.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-300 text-sm">
                  <span className="text-[#17A589] mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{c.labels.gearMinimum}</h3>
            <ul className="space-y-2">
              {route.gearMinimum.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-300 text-sm">
                  <span className="text-gray-500 mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Photo gallery */}
        {route.gallery.length > 0 && (
          <PhotoGallery photos={route.gallery} routeName={route.name} />
        )}

        {/* Guide operator */}
        {route.guidedAvailable && route.guideOperator && (
          <section className="mb-12" aria-labelledby="guide-heading">
            <h2 id="guide-heading" className="text-xl font-bold text-white mb-4">{c.labels.guidedOptions}</h2>
            <div className="bg-[#12122A] border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-gray-400 text-sm">{c.labels.guided}</p>
                {hasAffiliateGuide && <SponsoredBadge label={c.labels.sponsored} />}
              </div>
              <a
                href={route.guideOperator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B74C8] font-bold text-lg hover:underline focus-visible:ring-2 focus-visible:ring-[#1B74C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12122A] rounded"
              >
                {route.guideOperator.name}
              </a>
              <p className="text-gray-300 mt-2">{route.guidePrice}</p>
              {hasAffiliateGuide && <AffiliateDisclosure />}
            </div>
            <GetYourGuideCallout query={`rock climbing ${route.baseCity} France`} routeName={route.name} />
          </section>
        )}

        {/* Nearby Eats */}
        <section className="mb-12" aria-labelledby="eats-heading">
          <h2 id="eats-heading" className="text-xl font-bold text-white mb-4">{c.labels.nearbyEats}</h2>
          <ul className="space-y-3">
            {route.nearbyEats.map((eat, i) => (
              <li key={i} className="bg-[#12122A] border border-gray-700 rounded-lg p-4 flex justify-between items-start gap-4">
                <div>
                  <p className="text-white font-semibold">{eat.name}</p>
                  <p className="text-gray-400 text-sm">{eat.type}</p>
                </div>
                <span className="text-[#17A589] font-semibold text-sm shrink-0">{eat.priceRange}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Lodging */}
        <section className="mb-12" aria-labelledby="lodging-heading">
          <h2 id="lodging-heading" className="text-xl font-bold text-white mb-4">{c.labels.lodging}</h2>
          <ul className="space-y-3">
            {route.lodging.map((lodge, i) => (
              <li key={i} className="bg-[#12122A] border border-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-1 flex-wrap">
                      {lodge.bookingUrl ? (
                        <a
                          href={lodge.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1B74C8] font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-[#1B74C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12122A] rounded"
                        >
                          {lodge.name}
                        </a>
                      ) : (
                        <p className="text-white font-semibold">{lodge.name}</p>
                      )}
                      {lodge.affiliate && <SponsoredBadge label={c.labels.sponsored} />}
                    </div>
                    <p className="text-gray-400 text-sm capitalize">{lodge.type}</p>
                  </div>
                  <span className="text-[#17A589] font-semibold text-sm shrink-0">{lodge.priceRange}</span>
                </div>
              </li>
            ))}
          </ul>
          {hasAffiliateLodging && <AffiliateDisclosure />}
          <BookingCallout city={route.baseCity} />
        </section>

        {/* Testimonials */}
        {route.testimonials.length > 0 && (
          <section className="mb-12" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="text-xl font-bold text-white mb-6">{c.labels.testimonials}</h2>
            <div className="space-y-6">
              {route.testimonials.map((t, i) => (
                <blockquote key={i} className="bg-[#12122A] border border-gray-700 rounded-xl p-6">
                  <p className="text-gray-200 italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <footer className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <cite className="text-white font-semibold not-italic">{t.author}</cite>
                      <span className="text-gray-500 text-sm ml-2">{t.date}</span>
                    </div>
                    <span className="text-xs font-bold bg-[#1B74C8] text-[#1A1A2E] px-2 py-1 rounded">
                      {t.grade}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        )}

        {/* Conversion CTA */}
        <section className="mb-12 bg-gradient-to-br from-[#12122A] to-[#1e1e3f] border border-[#1B74C8]/30 rounded-2xl p-8 text-center">
          <p className="text-[#1B74C8] text-sm font-bold uppercase tracking-widest mb-3">{c.labels.readyToClimb}</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
            Plan your {route.name} trip with a local expert
          </h2>
          <p className="text-gray-400 text-base mb-6 max-w-xl mx-auto">
            Get a personalised itinerary, gear checklist, and permit advice from climbers who have done this route — at no cost to you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1B74C8] text-[#1A1A2E] font-black px-8 py-3.5 rounded-xl text-base hover:bg-[#1B74C8]/90 transition-colors focus-visible:ring-2 focus-visible:ring-[#1B74C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A2E]"
          >
            {c.labels.freeAdvice}
          </Link>
          <p className="text-gray-600 text-xs mt-4">{c.labels.noSpam}</p>
        </section>

        <GuideBookCTA compact />

        <RouteSafetyBanner />

        {/* Back link */}
        <div className="pt-4 border-t border-gray-700">
          <Link
            href="/routes"
            className="inline-flex items-center gap-2 text-[#1B74C8] font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-[#1B74C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A2E] rounded"
          >
            {c.labels.backToRoutes}
          </Link>
        </div>
      </div>
    </article>
  )
}
