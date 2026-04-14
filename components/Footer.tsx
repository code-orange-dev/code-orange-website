import Link from 'next/link'
import { Github, Twitter, Instagram, Zap, MessageCircle } from 'lucide-react'
import { SITE, SOCIAL } from '@/lib/constants'

const footerLinks = {
  Programs: [
    { label: 'rawBit Study Cohort', href: '/programs/rawbit' },
    { label: 'Sovereign Bitcoiner', href: '/programs/sovereign-bitcoiner' },
    { label: 'OpenClaw Workshop', href: '/programs/openclaw' },
    { label: 'Vibe Coding on Nostr', href: '/programs/vibe-coding' },
    { label: 'Bitcoin Basics', href: '/programs/bitcoin-basics' },
    { label: 'All Programs', href: '/programs' },
  ],
  School: [
    { label: 'About', href: '/about' },
    { label: 'Community', href: '/community' },
    { label: 'Apply', href: '/apply' },
    { label: 'Bitcoin House Bali', href: 'https://bitcoinhouse.bali', external: true },
    { label: 'Support on Geyser', href: SOCIAL.geyser, external: true },
  ],
}

const socialLinks = [
  { icon: Twitter, href: SOCIAL.twitter, label: 'X (Twitter)' },
  { icon: Instagram, href: SOCIAL.instagram, label: 'Instagram' },
  { icon: Github, href: SOCIAL.github, label: 'GitHub' },
  { icon: MessageCircle, href: SOCIAL.discord, label: 'Discord' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center leading-none mb-4">
              <span
                className="text-white text-2xl font-display"
                style={{ fontFamily: 'var(--font-permanent-marker)' }}
              >
                /Code_
              </span>
              <span
                className="text-orange-DEFAULT text-2xl font-extrabold"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Orange
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-6">
              {SITE.description}
            </p>
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-text-muted hover:text-orange-DEFAULT hover:border-orange-DEFAULT/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="badge badge-orange">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-DEFAULT animate-pulse" />
                Bali, Indonesia 🇮🇩
              </span>
              <span className="badge badge-white">Bitcoin Only</span>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="text-text-muted hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold">Ready to become a Bitcoin builder?</p>
              <p className="text-text-muted text-sm">Join a cohort or drop into a workshop.</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href={SOCIAL.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-2.5 px-5"
              >
                <MessageCircle className="w-4 h-4" />
                Join Discord
              </Link>
              <Link href="/apply" className="btn-primary text-sm py-2.5 px-5">
                <Zap className="w-4 h-4" />
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-text-dim">
            <p>© {new Date().getFullYear()} Code Orange Dev School. Built with ⚡ in Bali.</p>
            <p className="font-mono text-orange-DEFAULT/60">
              Bitcoin Only • No KYC • No Shitcoins
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
