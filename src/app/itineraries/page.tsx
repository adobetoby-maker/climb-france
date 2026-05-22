import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import ItinerariesContent from '@/components/itineraries/ItinerariesContent'

export function generateMetadata(): Metadata {
  return generatePageMetadata(
    'France Climbing Itineraries — Pre-Built Rock Climbing Trips',
    'Pre-built rock climbing itineraries across France — Font weekend breaks, Verdon multi-pitch weeks, and the full 5-sector grand tour.',
    '/itineraries'
  )
}

export default function ItinerariesPage() {
  return <ItinerariesContent />
}
