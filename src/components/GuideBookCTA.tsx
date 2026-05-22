import Link from 'next/link'

interface Props {
  compact?: boolean
}

export default function GuideBookCTA({ compact = false }: Props) {
  if (compact) {
    return (
      <div className="flex items-center justify-between gap-4 bg-[#16213E] border border-[#1B74C8]/20 rounded-xl px-5 py-4">
        <div>
          <p className="text-sm font-bold text-white">France Climbing Field Guide — Free</p>
          <p className="text-xs text-gray-400 mt-0.5">6 routes · hospital directory · Greek phrase book · trip journal · print as PDF</p>
        </div>
        <Link
          href="/guide/france"
          className="shrink-0 text-sm font-bold px-4 py-2 rounded-lg bg-[#1B74C8] text-[#1A1A2E] hover:bg-[#1B74C8]/90 transition-colors whitespace-nowrap"
        >
          Preview →
        </Link>
      </div>
    )
  }

  return (
    <div className="my-10 rounded-2xl border border-[#1B74C8]/30 bg-gradient-to-br from-[#12122A] to-[#1e1835] p-8 text-center">
      <p className="text-[#1B74C8] text-xs font-bold uppercase tracking-widest mb-3">Field Guide</p>
      <h2 className="text-2xl font-black text-white mb-3">Take the whole guide offline.</h2>
      <p className="text-gray-400 text-sm mb-2 max-w-lg mx-auto">
        All 6 routes, emergency phrases with phonetic pronunciation, hospital directory for every
        crag, trip journal pages, gear checklist, and local guide contacts — formatted for print
        or PDF save.
      </p>
      <p className="text-[#17A589] font-bold text-lg mb-6">$9.99</p>
      <div className="flex justify-center gap-3 flex-wrap">
        <Link
          href="/guide/france"
          className="inline-block font-bold text-sm px-6 py-3 rounded-xl bg-[#1B74C8] text-[#1A1A2E] hover:bg-[#1B74C8]/90 transition-colors"
        >
          Preview the guide →
        </Link>
        <a
          href="/guide/france"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-bold text-sm px-6 py-3 rounded-xl border border-[#1B74C8]/40 text-[#1B74C8] hover:bg-[#1B74C8]/10 transition-colors"
        >
          Buy on Gumroad — $9.99
        </a>
      </div>
      <p className="text-gray-600 text-xs mt-4">Print-ready PDF. Instant download. No DRM.</p>
    </div>
  )
}
