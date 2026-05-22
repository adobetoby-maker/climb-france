import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: false,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
    ],
    deviceSizes: [640, 1080, 1920],
    imageSizes: [64, 256],
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
