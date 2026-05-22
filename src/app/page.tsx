import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import HomeContent from '@/components/home/HomeContent'

export function generateMetadata(): Metadata {
  return generatePageMetadata(
    'Climb France — Rock Climbing Guide to Fontainebleau, Verdon & Céüse',
    'The complete guide to rock climbing in France. Fontainebleau bouldering, Verdon multi-pitch, Céüse sport climbing — routes, logistics, accommodation, and when to go.',
    '/',
    'photo-1504280390367-361c6d9f38f4'
  )
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the best time to climb in France?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on the sector. Fontainebleau is best October–March (cool temps, good friction on sandstone). Verdon runs April–June and September–October. Céüse is June–September. Calanques is October–May (fire closures in summer). Gorges du Tarn is best May–June and September–October.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need trad gear for climbing in France?',
      acceptedAnswer: { '@type': 'Answer', text: 'For most sport climbing at Céüse, Calanques, and Gorges du Tarn — no. Bring 12 quickdraws and a 70m rope. Verdon multi-pitch requires a few cams and nuts plus a 60m double or 2×50m setup for long routes. Fontainebleau is bouldering — no rope needed at all.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Fontainebleau from Paris?',
      acceptedAnswer: { '@type': 'Answer', text: 'Take the RER D or Transilien from Gare de Lyon to Fontainebleau-Avon station (45 min, €8 each way). Then 20 min walk or taxi to the main Apremont and Bas Cuvier circuits. No car needed — it is the only major climbing destination in the world accessible by commuter train from a capital city.' },
    },
    {
      '@type': 'Question',
      name: 'What gear do I need for Verdon?',
      acceptedAnswer: { '@type': 'Answer', text: 'Verdon multi-pitch requires two 50m ropes or one 60m dry-treated rope, 12–15 quickdraws, a small rack of cams (0.5–2") and nuts, a belay device for two-rope rappels, and a helmet. Descents typically involve 40m rappels — a 60m single rope will not reach many anchors. Two half-ropes is the local standard.' },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <HomeContent />
    </>
  )
}
