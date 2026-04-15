import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Github, Instagram, MessageCircle, Twitter, Zap } from 'lucide-react'
import { SOCIAL } from '@/lib/constants'
import NostrFeed from '@/components/NostrFeed'

export const metadata: Metadata = {
  title: 'Community',
  description:
    'Join the Code Orange Dev School community, on Discord, Nostr, X, Instagram, and GitHub.',
}

const PLATFORMS = [
  {
    icon: MessageCircle,
    name: 'Discord',
    handle: 'Primary Hub',
    description:
      'Where everything happens. Program announcements, study groups, help channels, and general Bitcoin chat. Free to join.',
    href: SOCIAL.discord,
    cta: 'Join Server',
    color: '#5865F2',
    featured: true,
  },
  {
    icon: Zap,
    name: 'Nostr',
    handle: 'npub1gxqy...',
    description:
      'Censorship-resistant social. Follow us on the decentralized network that Bitcoin builders actually use.',
    href: `https://njump.me/${SOCIAL.nostr.npub}`,
    cta: 'Follow on Nostr',
    color: '#F7931A',
    featured: true,
  },
  {
    icon: Twitter,
    name: 'X (Twitter)',
    handle: '@codeorangedevs',
    description: 'Announcements, Bitcoin takes, workshop recaps, and memes.',
    href: SOCIAL.twitter,
    cta: 'Follow',
    color: '#1DA1F2',
    featured: false,
  },
  {
    icon: Instagram,
    name: 'Instagram',
    handle: '@codeorangedevs',
    description: 'Photos from workshops, events, and Bali life. The vibes.',
    href: SOCIAL.instagram,
    cta: 'Follow',
    color: '#E4405F',
    featured: false,
  },
  {
    icon: Github,
    name: 'GitHub',
    handle: 'code-orange-dev',
    description: 'Open source projects, workshop code, and graduate contributions.',
    href: SOCIAL.github,
    cta: 'Star & Contribute',
    color: '#FFFFFF',
    featured: false,
  },
]

export default function CommunityPage() {
  const featured = PLATFORMS.filter((p) => p.featured)
  const rest = PLATFORMS.filter((p) => !p.featured)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section bg-grid relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-orange-DEFAULT/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge badge-orange mx-auto mb-6">
            <Zap className="w-3 h-3" />
            Community
          </div>
          <h1
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Join the builders{' '}
            <span className="text-gradient-orange">community</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Developers, node runners, and Bitcoiners from across Southeast Asia and beyond, all in one place. Free, open, and Bitcoin-native.
          </p>
        </div>
      </section>

      {/* Featured platforms */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featured.map((platform) => {
              const Icon = platform.icon
              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-8 group relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ background: platform.color }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: platform.color + '20', border: `1px solid ${platform.color}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: platform.color }} />
                    </div>
                    <h3
                      className="text-white text-2xl font-extrabold mb-1"
                      style={{ fontFamily: 'var(--font-nunito)' }}
                    >
                      {platform.name}
                    </h3>
                    <p className="text-text-muted text-sm mb-4 font-mono">{platform.handle}</p>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      {platform.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all"
                      style={{ color: platform.color }}
                    >
                      {platform.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Other platforms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rest.map((platform) => {
              const Icon = platform.icon
              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: platform.color + '15' }}
                    >
                      <Icon className="w-4 h-4" style={{ color: platform.color }} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{platform.name}</h4>
                      <p className="text-text-muted text-xs font-mono">{platform.handle}</p>
                    </div>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed mb-3">
                    {platform.description}
                  </p>
                  <span
                    className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                    style={{ color: platform.color }}
                  >
                    {platform.cta} <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nostr feed */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="badge badge-orange mb-4">
                <Zap className="w-3 h-3" />
                Live Nostr Feed
              </div>
              <h2
                className="text-3xl font-extrabold text-white mb-4"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Latest from the school
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                Real-time posts from Code Orange on Nostr, the censorship-resistant social protocol built by Bitcoiners, for Bitcoiners.
              </p>
              <NostrFeed limit={8} />
            </div>

            <div className="card p-8">
              <h3
                className="text-white text-2xl font-extrabold mb-2"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Support the school
              </h3>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">
                Code Orange is funded by the Bitcoin community. If you believe in what we&apos;re building, you can support us with sats on Geyser.
              </p>
              <a
                href={SOCIAL.geyser}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center mb-4"
              >
                <Zap className="w-4 h-4" />
                Support on Geyser
              </a>
              <p className="text-text-dim text-xs text-center">
                Bitcoin Lightning payments accepted. No KYC. No middlemen.
              </p>

              <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
                <h4 className="text-white font-semibold mb-4 text-sm">What your support funds</h4>
                <ul className="space-y-3 text-text-muted text-sm">
                  {[
                    'Hardware for workshops (miners, nodes, wallets)',
                    'Part-time jobs for local Bitcoin educators',
                    'Free education for bitcoiners who can\'t afford it',
                    'Expanding to more cities in Southeast Asia',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-orange-DEFAULT mt-0.5">⚡</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
