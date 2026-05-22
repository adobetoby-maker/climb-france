import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { routes } from '@/lib/routes'
import RouteDetailContent from '@/components/routes/RouteDetailContent'

export async function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const route = routes.find((r) => r.slug === slug)
  if (!route) return {}
  return {
    title: `${route.name} — ${route.grade.yosemite} / ${route.grade.french} | Climb France`,
    description: `${route.description.slice(0, 155)}...`,
    openGraph: {
      title: `${route.name} — ${route.grade.french}`,
      description: route.description.slice(0, 155),
      images: [{ url: route.images.hero.startsWith('/') ? route.images.hero : `https://images.unsplash.com/${route.images.hero}?w=1200&q=80` }],
    },
  }
}

export default async function RouteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const route = routes.find((r) => r.slug === slug)
  if (!route) notFound()

  const hasAffiliateGuide = route.guideOperator?.affiliate ?? false
  const hasAffiliateLodging = route.lodging.some((l) => l.affiliate)

  return (
    <RouteDetailContent
      route={route}
      hasAffiliateGuide={hasAffiliateGuide}
      hasAffiliateLodging={hasAffiliateLodging}
    />
  )
}
