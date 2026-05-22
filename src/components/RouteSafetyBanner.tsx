import { AFFILIATES } from '@/lib/affiliates'

export default function RouteSafetyBanner() {
  return (
    <div className="mt-16 pt-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-white text-sm">Insured for this route?</p>
          <p className="text-xs text-gray-400 mt-0.5">
            World Nomads covers climbing evacuations, medical emergencies, and trip cancellation for adventure athletes.
          </p>
        </div>
        <a
          href={AFFILIATES.worldNomads.url} // TODO: Replace with real CJ Affiliate link
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-bold px-4 py-2 rounded-lg border border-[#1B74C8]/40 text-[#1B74C8] hover:bg-[#1B74C8]/10 transition-colors"
        >
          Get insured →
        </a>
      </div>
    </div>
  )
}
