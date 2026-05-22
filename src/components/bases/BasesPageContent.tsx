import { bases } from '@/lib/bases'

export default function BasesPageContent() {
  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black text-white mb-4">Base Cities</h1>
        <p className="text-gray-400 text-lg mb-12">
          Where to land, sleep, eat, and organize before heading to the rock.
        </p>
        <div className="grid gap-6">
          {bases.map((base) => (
            <div key={base.slug} className="bg-[#12122A] border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-1">{base.name}</h2>
              <p className="text-[#1B74C8] text-sm font-semibold mb-3">{base.driveTimeToClimbs}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{base.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
