import { AFFILIATES } from '@/lib/affiliates'

interface Props {
  city: string
  label?: string
}

export default function BookingCallout({ city, label }: Props) {
  return (
    <div className="mt-4 flex items-center justify-between gap-4 bg-[#12122A] border border-white/10 rounded-xl px-5 py-4">
      <div>
        <p className="text-sm font-semibold text-white">
          {label ?? `Find accommodation near ${city}`}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">Hotels, hostels, and guesthouses — compare and book.</p>
      </div>
      <a
        href={AFFILIATES.booking.hotelUrl(city)}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 text-sm font-bold px-4 py-2 rounded-lg border border-[#4A7C59]/40 text-[#4A7C59] hover:bg-[#4A7C59]/10 transition-colors whitespace-nowrap"
      >
        Search Booking.com →
      </a>
    </div>
  )
}
