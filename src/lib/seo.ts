import type { Metadata } from 'next'

const BASE_URL = 'https://climb-france.vercel.app'

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  imageId?: string
): Metadata {
  const image = imageId
    ? imageId.startsWith('/')
      ? `${BASE_URL}${imageId}`
      : `https://images.unsplash.com/${imageId}?w=1200&q=80`
    : undefined

  return {
    title: `${title} | Climb France`,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
    alternates: { canonical: `${BASE_URL}${path}` },
  }
}
