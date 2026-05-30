import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Link from 'next/link'

export function generateMetadata(): Metadata {
  return generatePageMetadata(
    'France Climbing Travel Tips — Getting There, Transport & Logistics',
    'Practical travel advice for climbing in France. Getting from Paris to Fontainebleau, renting a car for Verdon, seasonal weather, camping, and what to eat near each crag.',
    '/travel-tips'
  )
}

interface TipSection {
  title: string
  tips: { heading: string; body: string }[]
}

const sections: TipSection[] = [
  {
    title: 'Getting to the Crags',
    tips: [
      {
        heading: 'Fontainebleau from Paris',
        body: 'RER D or Transilien from Gare de Lyon to Fontainebleau-Avon station — 45 minutes, around €8 each way. The forest is 20 minutes on foot or a €10 taxi. No car needed. It is the only world-class bouldering area accessible by commuter rail from a capital city.',
      },
      {
        heading: 'Driving to Verdon',
        body: 'Rent a car. The gorge has no reliable public transport. Lyon or Nice airports are the closest hubs — 2.5 hrs drive. Moustiers-Sainte-Marie is the base town; park at the Maline car park to access the gorge rim. Arrive early — spaces fill by 9am in summer.',
      },
      {
        heading: 'Céüse by car',
        body: 'Gap is the nearest city, served by train from Grenoble and Marseille. From Gap, it is a 30-minute drive to the Céüse parking. The 1.5-hour approach starts from the car park. No shuttle. No exceptions.',
      },
      {
        heading: 'Calanques from Marseille',
        body: 'Bus 21 from Marseille city centre runs to Luminy campus — the closest bus stop to the main Calanques access. In summer, the road is closed to private vehicles. Walk, bike, or take the bus.',
      },
    ],
  },
  {
    title: 'Seasons and Weather',
    tips: [
      {
        heading: 'Fontainebleau',
        body: 'October through March. Cool temperatures (5–15°C) give maximum friction on sandstone. Summer is too hot and humid — skin sweats off holds. Rain makes boulders slick but clears within a day.',
      },
      {
        heading: 'Verdon Gorge',
        body: 'April–June and September–October. Summers hit 35°C on the south-facing walls — dangerously hot on long routes. Spring brings wildflowers and reliable weather windows.',
      },
      {
        heading: 'Céüse',
        body: 'June–September. The area sits at 1900m — nights are cold even in August. Afternoon thunderstorms are common; start early and watch for cloud build-up by noon.',
      },
      {
        heading: 'Calanques',
        body: 'October–May. Fire closure from mid-June to mid-September shuts most access routes. Check the Parc National des Calanques website before any summer visit.',
      },
    ],
  },
  {
    title: 'Camping and Accommodation',
    tips: [
      {
        heading: 'Camping at Font',
        body: 'Camping des Gorges de Franchard is the most popular site — within cycling distance of Apremont and Rocher Canon. Book ahead for weekends. Wild camping is not permitted in the forest.',
      },
      {
        heading: 'Bivouac at Verdon',
        body: 'Camping les Gorges du Verdon near La Palud-sur-Verdon is the climbers\' hub. The bar posts conditions and route beta. Arrive by 7pm for a spot in peak season.',
      },
      {
        heading: 'Gîte at Céüse',
        body: 'Most Céüse climbers stay in Gap or at the small gîte at Sigoyer. Self-catering is common — the approach and descent drain the day.',
      },
    ],
  },
  {
    title: 'Etiquette and Access',
    tips: [
      {
        heading: 'Font land access',
        body: 'The forest is owned by the French state and managed by ONF. Stay on marked paths between boulders. No tick marks on coloured circuit boulders — use erasable chalk only.',
      },
      {
        heading: 'Verdon anchor ethics',
        body: 'Never cut fixed ropes or remove old tat. Old anchors at Verdon are historical infrastructure. Add slings above, do not strip what is there.',
      },
      {
        heading: 'Calanques fire season',
        body: 'The Parc National enforces closures with fines. Access restrictions change daily based on wind and humidity. Check the prefecture website the morning of your planned visit.',
      },
    ],
  },
]

export default function TravelTipsPage() {
  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <p className="text-[#D4185A] font-bold uppercase tracking-widest text-sm mb-4">
          Logistics
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
          France Climbing Travel Tips
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          Getting to the crags, reading the seasons, finding a campsite, and respecting access rules.
        </p>
      </section>

      {/* Tip sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-16">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-white font-black text-2xl mb-6">{section.title}</h2>
            <div className="space-y-4">
              {section.tips.map((tip) => (
                <div
                  key={tip.heading}
                  className="bg-[#12122A] border border-gray-700 rounded-xl p-5"
                >
                  <p className="text-[#D4185A] font-bold text-sm uppercase tracking-wide mb-2">
                    {tip.heading}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Emergency info */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-[#1a0a15] border border-[#D4185A]/40 rounded-xl p-6">
          <h2 className="text-[#D4185A] font-black text-lg mb-4">French Emergency Numbers</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { number: '15', label: 'SAMU (medical emergency)' },
              { number: '17', label: 'Police' },
              { number: '18', label: 'Fire / rescue' },
            ].map(({ number, label }) => (
              <div key={number} className="text-center">
                <p className="text-white font-black text-3xl">{number}</p>
                <p className="text-gray-400 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4">
            For mountain rescue in the Alps: call 15 and ask for PGHM (Peloton de Gendarmerie de Haute Montagne). Mountain rescue is free in France.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 flex flex-col sm:flex-row gap-4">
        <Link
          href="/routes"
          className="inline-block bg-[#D4185A] text-white font-black px-8 py-4 rounded-xl text-base hover:bg-[#D4185A]/90 transition-colors cursor-pointer text-center"
        >
          Browse All Routes →
        </Link>
        <Link
          href="/itineraries"
          className="inline-block border border-gray-600 text-gray-300 font-bold px-8 py-4 rounded-xl text-base hover:border-[#D4185A] hover:text-white transition-colors cursor-pointer text-center"
        >
          Pre-Built Itineraries
        </Link>
      </section>
    </main>
  )
}
