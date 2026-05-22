import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import BasesPageContent from '@/components/bases/BasesPageContent'

export function generateMetadata(): Metadata {
  return generatePageMetadata(
    'France Climbing Base Cities — Where to Stay for Each Region',
    '5 climbing base cities in France: Paris, Moustiers-Sainte-Marie, Gap, Marseille, and Millau. Choose your hub by target sector.',
    '/bases'
  )
}

export default function BasesPage() {
  return <BasesPageContent />
}
