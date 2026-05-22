import Link from 'next/link'
import Image from 'next/image'
import { routes } from '@/lib/routes'

export default function HomeContent() {
  const featured = routes.slice(0, 3)

  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/routes/france-verdon-gorge.jpg"
            alt="Verdon Gorge limestone walls"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/60 to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 w-full">
          <p className="text-[#1B74C8] font-bold uppercase tracking-widest text-sm mb-4">Climb France</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            France has the routes that<br />defined modern climbing.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            Fontainebleau sandstone bouldering. Verdon multi-pitch limestone. Céüse sport at 2,000m.
            Grades, gear lists, approach notes — no vague blog posts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/routes" className="bg-[#1B74C8] text-[#1A1A2E] font-black px-8 py-4 rounded-xl text-lg hover:bg-[#1B74C8]/90 transition-colors">
              Browse all 5 routes
            </Link>
            <Link href="/contact" className="border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors">
              Plan a trip
            </Link>
          </div>
        </div>
      </section>

      {/* Featured routes */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-black text-white mb-10">Featured routes</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {featured.map((route) => {
            const heroSrc = route.images.hero.startsWith('/')
              ? route.images.hero
              : `https://images.unsplash.com/${route.images.hero}?w=800&q=80`
            return (
              <Link key={route.slug} href={`/routes/${route.slug}`} className="group bg-[#12122A] border border-gray-700 rounded-xl overflow-hidden hover:border-[#1B74C8]/60 transition-colors">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={heroSrc} alt={route.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-bold bg-[#1B74C8] text-[#1A1A2E] px-2 py-0.5 rounded">{route.grade.french}</span>
                    <span className="text-xs font-bold bg-[#17A589] text-[#1A1A2E] px-2 py-0.5 rounded capitalize">{route.style}</span>
                  </div>
                  <h3 className="text-white font-bold group-hover:text-[#1B74C8] transition-colors">{route.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{route.baseCity}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="mt-8 text-center">
          <Link href="/routes" className="text-[#1B74C8] font-semibold hover:underline">View all routes →</Link>
        </div>
      </section>
    </main>
  )
}
