import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { AFFILIATES } from '@/lib/affiliates'

export function generateMetadata(): Metadata {
  return generatePageMetadata(
    'France Climbing Gear Guide — What to Pack for Fontainebleau, Verdon & Céüse',
    'Complete gear list for climbing in France. Sport climbing rack, bouldering kit, Verdon multi-pitch setup, and what to rent vs. bring.',
    '/gear'
  )
}

interface GearSection {
  title: string
  subtitle: string
  items: { name: string; notes: string; essential: boolean }[]
}

const gearSections: GearSection[] = [
  {
    title: 'Sport Climbing — Céüse, Calanques, Gorges du Tarn',
    subtitle: '1–2 pitches, bolted, 70m rope covers most descents',
    items: [
      { name: '70m dry-treated rope', notes: 'Minimum length. Single-rope technique throughout.', essential: true },
      { name: '12 quickdraws', notes: 'Standard bolt spacing. Bring 14 for longer pitches at Tarn.', essential: true },
      { name: 'Belay device + locking carabiner', notes: 'ATC or assisted-braking (Grigri). Both accepted.', essential: true },
      { name: 'Rock shoes', notes: 'Moderate downturn for Céüse limestone. Stiffer soles for Font.', essential: true },
      { name: 'Harness', notes: 'Any sport harness. Padding matters on long days.', essential: true },
      { name: 'Helmet', notes: 'Mandatory at Calanques (rockfall). Strongly recommended everywhere.', essential: true },
      { name: 'Chalk bag + chalk', notes: 'Loose chalk or block. No restrictions in France.', essential: false },
      { name: 'Approach shoes', notes: 'Céüse approach is 1.5 hr each way. Trail runners or Scramblers.', essential: false },
      { name: '2–3 locking carabiners', notes: 'For anchors, self-rescue, and abseils.', essential: false },
    ],
  },
  {
    title: 'Multi-Pitch — Verdon Gorge',
    subtitle: 'Grades 5a–8a, 200–400m routes, complex descents',
    items: [
      { name: '2 × 50m half-ropes', notes: 'Non-negotiable. Many rappels exceed 40m single-rope capacity.', essential: true },
      { name: '15 quickdraws', notes: 'Wandering routes mean more draws than sport climbing.', essential: true },
      { name: 'Small trad rack', notes: '3–4 cams (0.5–2 inch) + selection of nuts for Verdon crack features.', essential: true },
      { name: 'Bail carabiners × 4', notes: 'Leave on fixed tat for retreat. Take old HMS biners.', essential: true },
      { name: 'Ascenders or prusiks', notes: 'Gorge descents can require self-rescue techniques.', essential: true },
      { name: 'Belay glasses', notes: 'Long pitches = neck strain. Worth every cent.', essential: false },
      { name: 'Headlamp', notes: 'Many parties are caught out after dark in the gorge.', essential: true },
      { name: 'Down jacket', notes: 'Verdon gorge floor is cold. April mornings hit 5°C.', essential: false },
      { name: 'Water (3 litres min)', notes: 'No water sources mid-route. Gorge is remote.', essential: true },
    ],
  },
  {
    title: 'Bouldering — Fontainebleau',
    subtitle: 'No rope needed. Accessible by train from Paris.',
    items: [
      { name: 'Rock shoes', notes: 'Stiffer sole preferred on Font sandstone. Avoid aggressive downturned shoes.', essential: true },
      { name: 'Crash pad', notes: 'Rent from local shops in Fontainebleau village if travelling light.', essential: true },
      { name: 'Chalk bag + chalk', notes: 'Chalk buckets popular for Font-style deadpoints.', essential: true },
      { name: 'Tick marks (chalk)', notes: 'Mark footholds. Clean holds after your session.', essential: false },
      { name: 'Leave No Trace kit', notes: 'Wire brush for chalk, bin bags, no new tick marks on rock colour.', essential: false },
      { name: 'Raincover / waterproof', notes: 'Forest weather changes fast. October–March brings rain.', essential: false },
    ],
  },
]

export default function GearPage() {
  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <p className="text-[#D4185A] font-bold uppercase tracking-widest text-sm mb-4">
          Packing List
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
          France Climbing Gear Guide
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          What to pack for each sector — Verdon multi-pitch, Céüse sport, and Fontainebleau bouldering all demand different setups.
        </p>
      </section>

      {/* Recommended gear — Amazon affiliate product cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-end justify-between gap-4 mb-2">
          <h2 className="text-2xl font-black text-white">Gear we recommend</h2>
          <span className="text-xs text-gray-500 shrink-0">Links may earn a commission</span>
        </div>
        <p className="text-gray-400 text-sm mb-8 max-w-2xl">
          Hand-picked for French climbing conditions. Every product below is chosen on merit — not generic affiliate filler.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Corax Harness',
              brand: 'Petzl',
              category: 'Harness',
              desc: 'Versatile sport and multi-pitch harness with four pressure-moulded foam loops. Adjustable leg loops suit France\'s layered multi-season conditions.',
              why: 'Verdon multi-pitch days run 6–8 hours in the harness. The Corax\'s padding holds up without the weight of a trad harness — what Céüse and Verdon demand.',
              url: 'https://www.amazon.com/s?k=Petzl+Corax+climbing+harness&tag=climbing00bb-20',
              price: '$55–$75',
            },
            {
              name: 'Positron Quickdraws',
              brand: 'Black Diamond',
              category: 'Protection',
              desc: 'Wire-gate draws with a straight gate on top and bent gate at the rope end. Lightweight dogbone reduces snagging on rough limestone.',
              why: 'French sport climbs are bolted. You need 12–15 draws for Céüse pitches. The bent gate snaps the rope in fast when pumped on sustained limestone moves.',
              url: 'https://www.amazon.com/s?k=Black+Diamond+Positron+quickdraws&tag=climbing00bb-20',
              price: '$15–$20 each',
            },
            {
              name: 'Climbing Shoes',
              brand: 'La Sportiva',
              category: 'Footwear',
              desc: 'The benchmark for precision edging on limestone for decades. Solution, Miura, and Skwama models cover Fontainebleau slopers to Verdon technical faces.',
              why: 'French limestone is polished and demanding. La Sportiva\'s rubber compounds are engineered for the granite-to-limestone spectrum across France\'s five major regions.',
              url: 'https://www.amazon.com/s?k=La+Sportiva+climbing+shoes&tag=climbing00bb-20',
              price: '$100–$200',
            },
            {
              name: 'Grigri Belay Device',
              brand: 'Petzl',
              category: 'Belay',
              desc: 'The industry-standard assisted-braking belay device. Compatible with 8.5–11mm ropes. Used by virtually every guide service operating in France.',
              why: 'Céüse guides specify the Grigri for long days with tired belayers. It is the accepted standard at every French crag — partners will expect to see one.',
              url: 'https://www.amazon.com/s?k=Petzl+Grigri+belay+device&tag=climbing00bb-20',
              price: '$100–$130',
            },
            {
              name: 'Chalk & Chalk Bag',
              brand: 'Various',
              category: 'Accessories',
              desc: 'Fine-grain magnesium carbonate chalk in a full-zip bag with a stiff rim. Limestone crags like Verdon and Céüse get polished fast — chalk is non-negotiable.',
              why: 'Céüse at 2,000m gets cold even in July — chalk use is higher than at sea-level crags. Use a natural fibre brush to clean holds at Fontainebleau sandstone after your session.',
              url: 'https://www.amazon.com/s?k=climbing+chalk+bag&tag=climbing00bb-20',
              price: '$20–$40',
            },
            {
              name: 'Rock Climbing France Guidebook',
              brand: 'Various authors',
              category: 'Guidebook',
              desc: 'Sector-by-sector printed guides to Verdon, Céüse, the Calanques, Gorges du Tarn, and Fontainebleau. Topos, approach maps, grade breakdowns, and local beta.',
              why: 'French crags are under-bolted compared to Spain — knowing the exact line prevents off-route disasters. Verdon multi-pitch descents require a printed topo with rappel stations.',
              url: 'https://www.amazon.com/s?k=Rock+Climbing+France+guidebook&tag=climbing00bb-20',
              price: '$30–$60',
            },
          ].map((p) => (
            <div key={p.name} className="bg-[#12122A] border border-gray-700 rounded-xl p-6 flex flex-col hover:border-[#D4185A]/50 transition-colors">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-xs font-bold text-[#D4185A] uppercase tracking-widest">{p.category}</span>
                  <h3 className="text-white font-bold text-lg mt-1 leading-tight">{p.name}</h3>
                  <p className="text-gray-500 text-sm">{p.brand}</p>
                </div>
                <span className="shrink-0 text-[#17A589] font-bold text-sm bg-[#17A589]/10 px-3 py-1 rounded-lg whitespace-nowrap">{p.price}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{p.desc}</p>
              <div className="bg-[#1A1A2E] border border-[#D4185A]/20 rounded-lg px-4 py-3 mb-5">
                <p className="text-xs font-bold text-[#D4185A] uppercase tracking-wider mb-1">Why for France</p>
                <p className="text-gray-300 text-sm leading-relaxed">{p.why}</p>
              </div>
              <div className="mt-auto">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block w-full text-center bg-[#D4185A] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#D4185A]/90 transition-colors text-sm cursor-pointer"
                >
                  Search on Amazon &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-6 leading-relaxed">
          Affiliate disclosure: We earn a small commission if you purchase through links above. This does not affect which products appear here — every item is chosen solely on suitability for French climbing conditions. See our{' '}
          <Link href="/affiliate-disclosure" className="underline hover:text-gray-400">full affiliate disclosure</Link>.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-16">
        {gearSections.map((section) => (
          <div key={section.title}>
            <div className="mb-6">
              <h2 className="text-white font-black text-2xl mb-1">{section.title}</h2>
              <p className="text-gray-400 text-sm">{section.subtitle}</p>
            </div>

            <div className="space-y-3">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-[#12122A] border border-gray-700 rounded-xl px-5 py-4 flex items-start gap-4"
                >
                  <span className={`mt-0.5 flex-shrink-0 w-2 h-2 rounded-full ${item.essential ? 'bg-[#D4185A]' : 'bg-gray-600'}`} />
                  <div>
                    <p className="text-white font-bold text-sm">{item.name}</p>
                    <p className="text-gray-400 text-sm mt-0.5">{item.notes}</p>
                  </div>
                  {item.essential && (
                    <span className="ml-auto flex-shrink-0 text-xs font-bold text-[#D4185A] uppercase tracking-wide">
                      Essential
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a
                href={AFFILIATES.amazon.searchUrl(section.title.split('—')[0].trim() + ' climbing gear')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#D4185A] transition-colors cursor-pointer"
              >
                Shop this list on Amazon &rarr;
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-[#12122A] border border-gray-700 rounded-xl p-8">
          <h2 className="text-white font-black text-xl mb-4">What to Rent vs. Bring</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-[#D4185A] font-bold text-sm uppercase tracking-wide mb-3">Rent in France</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Crash pads (Fontainebleau village — €15–25/day)</li>
                <li>Guidebooks (most climbing shops rent or loan)</li>
                <li>Cams and nuts if flying without checked bag</li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-wide mb-3">Always Bring Your Own</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Rock shoes (fit is non-negotiable)</li>
                <li>Belay device (familiar with your own gear)</li>
                <li>Harness (comfort on long routes)</li>
                <li>Helmet (safety-critical, must fit correctly)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        <div className="border-t border-gray-700 pt-12 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/routes"
            className="inline-block bg-[#D4185A] text-white font-black px-8 py-4 rounded-xl text-base hover:bg-[#D4185A]/90 transition-colors cursor-pointer"
          >
            Browse All Routes
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-gray-600 text-gray-300 font-bold px-8 py-4 rounded-xl text-base hover:border-[#D4185A] hover:text-white transition-colors cursor-pointer"
          >
            Ask a Gear Question
          </Link>
        </div>
      </section>
    </main>
  )
}
