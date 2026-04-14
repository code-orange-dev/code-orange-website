/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.nostr.build',
      },
      {
        protocol: 'https',
        hostname: 'image.nostr.build',
      },
      {
        protocol: 'https',
        hostname: 'void.cat',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
    ],
  },
}

export default nextConfig
