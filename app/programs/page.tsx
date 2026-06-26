import type { Metadata } from 'next'
import Link from 'next/link'
import { Zap } from 'lucide-react'
import { PROGRAMS, SOCIAL } from '@/lib/constants'
import ProgramsFilter from '@/components/ProgramsFilter'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Explore all Code Orange Dev School programs, from the rawBit developer cohort to Sovereign Bitcoiner workshops, Vibe Coding on Nostr, and more.',
}


export default function ProgramsPage() {
  const byAudience = {
    Developers: PROGRAMS.filter((p) =>
      ['privacy-track', 'rawbit'].includes(p.slug)
    ),
    Bitcoiners: PROGRAMS.filter((p) =>
      ['sovereign-bitcoiner', 'openclaw'].includes(p.slug)
    ),
    Everyone: PROGRAMS.filter((p) =>
      ['vibe-coding', 'bitcoin-basics', 'bitcoin-reading-club', 'talk-a-bit'].includes(p.slug)
    ),
  }

  return (
    <div className="pt-28">
      {/* Header */}
      <section className="section bg-grid relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-DEFAULT/10 blur-[80px] rounded-full" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="badge badge-orange mb-6">
              <Zap className="w-3 h-3" /> All Programs
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Pick your{' '}
              <span className="text-gradient-orange">path into Bitcoin</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              From zero to sovereign. From curious to contributor. Every program is hands-on,
              practical, and Bitcoin-only.
            </p>
          </div>
        </div>
      </section>

      {/* Programs with audience filter tabs */}
      <section className="section border-t border-[#1a1a1a]">
        <div className="container-custom">
          <ProgramsFilter byAudience={byAudience} />
        </div>
      </section>

      {/* Community CTA */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="rounded-2xl bg-[#111] border border-[#222] p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-orange-glow opacity-50" />
            <div className="relative z-10">
              <h2
                className="text-3xl font-extrabold text-white mb-4"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Not sure which program to join?
              </h2>
              <p className="text-text-muted mb-6 max-w-md mx-auto">
                Drop into Discord and ask. The community will point you in the right direction based
                on your background and goals.
              </p>
              <Link
                href={SOCIAL.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <Zap className="w-4 h-4" />
                Join Discord and Ask
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
