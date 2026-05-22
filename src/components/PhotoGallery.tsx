'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import type { ClimbingRoute } from '@/lib/routes'

type Photo = ClimbingRoute['gallery'][number]

const CATEGORY_LABELS: Record<Photo['category'], string> = {
  area: 'The Area',
  food: 'Food & Drink',
  approach: 'Approach',
  climbing: 'On the Rock',
  summit: 'Summit',
}

type Props = {
  photos: Photo[]
  routeName: string
}

export default function PhotoGallery({ photos, routeName }: Props) {
  const [active, setActive] = useState<Photo | null>(null)
  const [filter, setFilter] = useState<Photo['category'] | 'all'>('all')

  const categories = Array.from(new Set(photos.map((p) => p.category)))
  const visible = filter === 'all' ? photos : photos.filter((p) => p.category === filter)

  const activeIndex = active ? visible.indexOf(active) : -1

  const prev = useCallback(() => {
    if (activeIndex > 0) setActive(visible[activeIndex - 1])
  }, [activeIndex, visible])

  const next = useCallback(() => {
    if (activeIndex < visible.length - 1) setActive(visible[activeIndex + 1])
  }, [activeIndex, visible])

  useEffect(() => {
    if (!active) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, prev, next])

  return (
    <section className="mb-12" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading" className="text-xl font-bold text-white mb-4">
        Photo Gallery
      </h2>

      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label="Filter gallery by category">
          <button
            onClick={() => setFilter('all')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
              filter === 'all'
                ? 'bg-[#1B74C8] text-[#1A1A2E]'
                : 'bg-[#12122A] text-gray-400 hover:text-white border border-gray-700'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                filter === cat
                  ? 'bg-[#1B74C8] text-[#1A1A2E]'
                  : 'bg-[#12122A] text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {visible.map((photo, i) => (
          <button
            key={`${photo.src}-${i}`}
            onClick={() => setActive(photo)}
            className="relative aspect-[4/3] rounded-lg overflow-hidden group focus-visible:ring-2 focus-visible:ring-[#1B74C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A2E]"
            aria-label={`View: ${photo.alt}`}
          >
            <Image
              src={photo.src.startsWith('/') ? photo.src : `https://images.unsplash.com/${photo.src}?w=600&q=80`}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200"
              aria-hidden="true"
            />
            <span className="absolute top-2 left-2 text-xs font-bold bg-black/60 text-white px-2 py-0.5 rounded">
              {CATEGORY_LABELS[photo.category]}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${active.alt}`}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={active.src.startsWith('/') ? active.src : `https://images.unsplash.com/${active.src}?w=1200&q=85`}
                alt={active.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex items-start justify-between mt-3 gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold">{active.caption}</p>
                <p className="text-gray-400 text-sm mt-0.5">{routeName} · {activeIndex + 1} / {visible.length}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  disabled={activeIndex <= 0}
                  className="px-3 py-1.5 rounded text-sm text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-[#1B74C8]"
                  aria-label="Previous photo"
                >
                  ← Prev
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  disabled={activeIndex >= visible.length - 1}
                  className="px-3 py-1.5 rounded text-sm text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-[#1B74C8]"
                  aria-label="Next photo"
                >
                  Next →
                </button>
                <button
                  onClick={() => setActive(null)}
                  className="px-3 py-1.5 rounded text-sm text-gray-400 hover:text-white font-semibold focus-visible:ring-2 focus-visible:ring-[#1B74C8]"
                  aria-label="Close photo"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
