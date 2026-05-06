/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Block clickjacking — nobody iframes our pages.
  { key: 'X-Frame-Options', value: 'DENY' },
  // Don't let browsers MIME-sniff
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Modern equivalent — opt referrer info to a sane default
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable powerful APIs we never use
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Force HTTPS for two years incl. subdomains. Vercel terminates TLS.
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Cross-origin opener — improves Spectre-class isolation
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
]

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
    remotePatterns: [
      { protocol: 'https', hostname: '**.nostr.build' },
      { protocol: 'https', hostname: 'image.nostr.build' },
      { protocol: 'https', hostname: 'void.cat' },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Long-cache hashed Next assets
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig
