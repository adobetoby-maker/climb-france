import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/lib/seo'
import { blogPosts } from '@/lib/blog'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return generatePageMetadata(post.title, post.excerpt, `/blog/${post.slug}`)
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-[#1A1A2E]">
      <article className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-24">
        <Link
          href="/blog"
          className="text-[#D4185A] font-bold text-sm hover:underline mb-8 inline-block"
        >
          ← All posts
        </Link>

        <time className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-4 block">
          {new Date(post.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>

        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6 tracking-tight">
          {post.title}
        </h1>

        <div className="text-gray-300 text-base leading-relaxed space-y-4">
          <p>{post.excerpt}</p>
          <p className="text-gray-500 text-sm italic">
            Full article coming soon. Subscribe to our newsletter or check back shortly.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row gap-4">
          <Link
            href="/blog"
            className="text-[#D4185A] font-bold hover:underline text-sm"
          >
            ← Back to all posts
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 font-bold hover:text-white text-sm transition-colors"
          >
            Questions? Contact us →
          </Link>
        </div>
      </article>
    </main>
  )
}
