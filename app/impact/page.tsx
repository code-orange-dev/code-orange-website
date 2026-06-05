import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  GitMerge,
  Github,
  Heart,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { SITE, SOCIAL } from '@/lib/constants'
import {
  IMPACT_UPDATED,
  IMPACT_METRICS,
  FLAGSHIP_PRS,
  IMPACT_PROJECTS,
  GRAD_DESTINATIONS,
  IMPACT_SOURCES,
} from '@/lib/impact'

export const metadata: Metadata = {
  title: 'Impact',
  description:
    'Proof of work. Code Orange graduates have merged 45+ pull requests into Bitcoin open source — Bitcoin Core, rust-bitcoin, rust-payjoin, BDK, LDK, and more. Every number is public and auditable.',
  alternates: { canonical: '/impact' },
  openGraph: {
    type: 'website',
    url: '/impact',
    title: 'Impact — Proof of Work',
    description:
      '45+ merged PRs into Bitcoin open source from Code Orange graduates. Every number public and auditable on GitHub.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Orange — Impact',
    description:
      '45+ merged PRs into Bitcoin open source from Code Orange graduates. Public and auditable.',
  },
}

export default function ImpactPage() {
  // Dataset + CollectionPage schema — signals to search engines (and to
  // funders inspecting the page) that these are real, sourced outcomes.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Code Orange Dev School — Impact',
    description:
      'Graduate outcomes and Bitcoin open source contributions from Code Orange Dev School.',
    url: `${SITE.url}/impact`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
    mainEntity: {
      '@type': 'Dataset',
      name: 'Code Orange Bitcoin OSS Contributions',
      description:
        'Public tracker of every pull request submitted by Code Orange community members to Bitcoin open source projects.',
      creator: { '@type': 'EducationalOrganization', name: SITE.name, url: SITE.url },
      dateModified: '2026-05-14',
      isAccessibleForFree: true,
      url: 'https://github.com/code-orange-dev/PR-tracking-dashboard',
      keywords: ['Bitcoin', 'open source', 'pull requests', 'developer education'],
    },
  }

  return (
    <div className="pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section bg-grid relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="badge badge-orange mb-6">
              <GitMerge className="w-3 h-3" />
              Proof of Work
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              We don&apos;t measure success in{' '}
              <span className="text-gradient-orange">attendance</span>. We measure it in{' '}
              <span className="text-gradient-orange">merged PRs</span>.
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              A coding school is only as good as what its graduates ship. Here is exactly what
              the Code Orange community has contributed to Bitcoin open source — and every single
              number links to a public, auditable record on GitHub. No vanity metrics.
            </p>
            <p className="text-text-dim text-sm mt-4">Last synced {IMPACT_UPDATED}</p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section bg-[#080808] border-y border-[#1a1a1a]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {IMPACT_METRICS.map((m) => (
              <div key={m.label} className="card p-5 text-center">
                <div
                  className="text-3xl md:text-4xl font-extrabold text-gradient-orange mb-1"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  {m.value}
                </div>
                <div className="text-white text-sm font-semibold">{m.label}</div>
                <div className="text-text-dim text-xs mt-1">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship PRs */}
      <section className="section">
        <div className="container-custom">
          <div className="mb-10">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white mb-3"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Flagship merged contributions
            </h2>
            <p className="text-text-muted max-w-2xl">
              A selection of the most significant PRs our community has landed. Click any one to
              read the diff on GitHub — this is the real thing, not a portfolio screenshot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {FLAGSHIP_PRS.map((pr) => (
              <a
                key={pr.url}
                href={pr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 group hover:border-orange-DEFAULT/50 transition-colors flex items-start gap-4"
              >
                <GitMerge className="w-5 h-5 text-orange-DEFAULT shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-white font-bold text-sm group-hover:text-orange-DEFAULT transition-colors">
                      {pr.project}
                    </span>
                    <span className="font-mono text-xs text-text-dim">{pr.pr}</span>
                  </div>
                  <p className="text-text-muted text-sm leading-snug mb-2">{pr.desc}</p>
                  <span className="text-text-dim text-xs">
                    by @{pr.handle} · {pr.repo}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-dim group-hover:text-orange-DEFAULT transition-colors shrink-0" />
              </a>
            ))}
          </div>

          <Link
            href={IMPACT_SOURCES[0].url}
            className="inline-flex items-center gap-2 text-orange-DEFAULT text-sm font-semibold mt-6 hover:opacity-80"
          >
            See all 45+ merged PRs on the public dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="section bg-[#080808] border-y border-[#1a1a1a]">
        <div className="container-custom">
          <h2
            className="text-3xl font-extrabold text-white mb-3"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Projects we&apos;ve shipped into
          </h2>
          <p className="text-text-muted max-w-2xl mb-8">
            25+ repositories across wallets, protocol, Lightning, privacy, and node infrastructure.
          </p>
          <div className="flex flex-wrap gap-2">
            {IMPACT_PROJECTS.map((p) => (
              <span
                key={p}
                className="px-3 py-1.5 rounded-lg bg-[#111] border border-[#222] text-text-muted text-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Where graduates go */}
      <section className="section">
        <div className="container-custom">
          <h2
            className="text-3xl font-extrabold text-white mb-3"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Where graduates go next
          </h2>
          <p className="text-text-muted max-w-2xl mb-8">
            The cohort is the on-ramp, not the destination. Graduates plug into the broader Bitcoin
            developer ecosystem — grants, incubators, hackathons, and full-time roles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GRAD_DESTINATIONS.map((d) => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group hover:border-orange-DEFAULT/40 transition-colors"
              >
                <h3 className="text-white font-bold mb-1 group-hover:text-orange-DEFAULT transition-colors">
                  {d.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{d.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section bg-[#080808] border-y border-[#1a1a1a]">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-orange-DEFAULT" />
            <h2
              className="text-2xl font-extrabold text-white"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Every number here is auditable
            </h2>
          </div>
          <p className="text-text-muted max-w-2xl mb-6">
            We track outcomes in public so funders, partners, and prospective students can verify
            them independently. No marketing math — just the raw record.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {IMPACT_SOURCES.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 flex items-center gap-3 group hover:border-orange-DEFAULT/40 transition-colors"
              >
                <Github className="w-4 h-4 text-text-dim group-hover:text-orange-DEFAULT transition-colors shrink-0" />
                <span className="text-white text-sm font-medium group-hover:text-orange-DEFAULT transition-colors">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Fund this work — funders & sponsors CTA */}
      <section className="section">
        <div className="container-custom">
          <div className="card p-8 md:p-12 border border-orange-DEFAULT/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <div className="badge badge-orange mb-5">
                <Heart className="w-3 h-3" />
                For funders &amp; sponsors
              </div>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-white mb-4"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Fund the pipeline, not the overhead.
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Code Orange is grant- and donation-funded, and runs lean from Bali. Every dollar
                turns curious developers across Southeast Asia into merged Bitcoin open source
                contributors. Support us directly in sats, or reach out about partnership and
                grant collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SOCIAL.geyser}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-7 py-3.5 inline-flex"
                >
                  <Zap className="w-5 h-5" />
                  Support on Geyser
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=Partnership%20%26%20Grants`}
                  className="btn-secondary px-7 py-3.5 inline-flex justify-center"
                >
                  Talk partnerships
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
