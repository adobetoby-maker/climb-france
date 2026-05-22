import { AFFILIATES } from '@/lib/affiliates'

interface Props {
  query: string
  routeName?: string
}

export default function GetYourGuideCallout({ query, routeName }: Props) {
  return (
    <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#12122A] border border-[#7C9CF0]/20 rounded-xl px-5 py-4">
      <div className="flex-1">
        <p className="text-sm font-semibold text-white">
          Book a guided climbing tour{routeName ? ` — ${routeName}` : ''}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">
          Local certified guides. Gear included. Skip the logistics.
        </p>
      </div>
      <a
        href={AFFILIATES.getYourGuide.tourUrl(query)} // TODO: Replace CLIMBKALYMNOS with real GetYourGuide partner_id
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 text-sm font-bold px-4 py-2 rounded-lg border border-[#7C9CF0]/40 text-[#7C9CF0] hover:bg-[#7C9CF0]/10 transition-colors whitespace-nowrap"
      >
        Browse on GetYourGuide →
      </a>
    </div>
  )
}
