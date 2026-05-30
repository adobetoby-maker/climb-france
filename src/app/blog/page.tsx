import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'

export function generateMetadata(): Metadata {
  return generatePageMetadata(
    'France Climbing Blog — Route Beta, Gear Tips & Trip Reports',
    'Climbing guides, gear advice, and first-hand trip reports from France\'s best crags — Fontainebleau, Verdon, Céüse, Calanques, and Gorges du Tarn.',
    '/blog'
  )
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <p className="text-[#D4185A] font-bold uppercase tracking-widest text-sm mb-4">
          Route Beta &amp; Guides
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
          France Climbing Blog
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          Practical guides, gear advice, and trip reports from France&apos;s five major climbing regions.
        </p>
      </section>

      {/* Post list */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#12122A] border border-gray-700 rounded-xl p-6 hover:border-[#D4185A]/50 transition-colors"
            >
              <time className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-3 block">
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <h2 className="text-white font-black text-xl mb-3 leading-snug">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-[#D4185A] font-bold text-sm hover:underline cursor-pointer"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">New posts coming soon.</p>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-700">
          <Link
            href="/"
            className="text-[#D4185A] font-bold hover:underline text-sm"
          >
            ← Back to Climb France
          </Link>
        </div>
      </section>
    </main>
  )
}
