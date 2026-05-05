import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Code, Globe, Mail, Star, Users, Zap } from 'lucide-react'
import { SITE, SOCIAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Fellowships',
  description:
    'Code Orange Dev School fellowships fund developers and educators to contribute full-time to Bitcoin open source software. Based in Bali, open to builders across Asia and beyond.',
}

const PROJECTS = [
  { name: 'rust-silentpayments', lang: 'Rust', url: 'https://github.com/cygnet3/rust-silentpayments' },
  { name: 'payjoin-rust', lang: 'Rust', url: 'https://github.com/payjoin/rust-payjoin' },
  { name: 'BDK', lang: 'Rust', url: 'https://github.com/bitcoindevkit/bdk' },
  { name: 'Kyoto', lang: 'Rust', url: 'https://github.com/bitcoindevkit/kyoto' },
  { name: 'Coinswap', lang: 'Rust', url: 'https://github.com/utxo-teleport/coinswap' },
  { name: 'Floresta', lang: 'Rust', url: 'https://github.com/vinteumorg/Floresta' },
  { name: 'Bitcoin Core', lang: 'C++', url: 'https://github.com/bitcoin/bitcoin' },
  { name: 'BTCPay Server', lang: 'C#', url: 'https://github.com/btcpayserver/btcpayserver' },
  { name: 'Fedimint', lang: 'Rust', url: 'https://github.com/fedimint/fedimint' },
  { name: 'LDK', lang: 'Rust', url: 'https://github.com/lightningdevkit/rust-lightning' },
]

const STEPS = [
  {
    num: '01',
    title: 'Apply',
    desc: 'Send a proposal to hello@codeorange.dev outlining which project you want to work on, your background, and what you plan to build or fix.',
  },
  {
    num: '02',
    title: 'Get Accepted',
    desc: 'We review proposals and select fellows based on technical ability, project fit, and commitment to Bitcoin open source.',
  },
  {
    num: '03',
    title: 'Onboard (Month 1)',
    desc: 'Set up your environment, meet your mentor, get oriented with the codebase, and submit your first small PR.',
  },
  {
    num: '04',
    title: 'Build (Months 2–5)',
    desc: 'Full-time contribution. Weekly check-ins, mentor reviews, and open status updates. Minimum 2 PRs per month expected.',
  },
  {
    num: '05',
    title: 'Graduate (Month 6)',
    desc: 'Final review, graduate demo, and celebration. Many fellows go on to long-term open source roles or Bitcoin companies.',
  },
]

const COHORTS = [
  {
    name: 'H1',
    applications: 'November 1',
    start: 'January 15',
    end: 'July 15',
  },
  {
    name: 'H2',
    applications: 'May 1',
    start: 'July 15',
    end: 'January 15',
  },
]

export default function FellowshipsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section bg-grid relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge badge-orange mx-auto mb-6">
              <Star className="w-3 h-3" />
              Fellowship Program
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Get paid to build{' '}
              <span className="text-gradient-orange">Bitcoin open source.</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Code Orange Dev School fellowships fund developers and educators to contribute
              full-time to Bitcoin open source software for six months. Based in Bali, open
              to builders across Asia and beyond.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href={`mailto:${SITE.email}?subject=Fellowship Application`}
                className="btn-primary"
              >
                <Mail className="w-4 h-4" />
                Apply by Email
              </a>
              <Link
                href={SOCIAL.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Ask in Discord
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two Tracks */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">
              <Users className="w-3 h-3" />
              Two Tracks
            </div>
            <h2
              className="text-4xl font-extrabold text-white"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Choose your track
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Developer Track */}
            <div className="card p-8 border border-orange-DEFAULT/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-DEFAULT/5 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">₿</div>
                <div className="badge badge-orange mb-4">Developer Track</div>
                <div
                  className="text-4xl font-extrabold text-orange-DEFAULT mb-1"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  $500
                  <span className="text-lg text-text-muted font-normal">/month</span>
                </div>
                <p className="text-text-dim text-sm mb-6">6 months · extendable</p>
                <ul className="space-y-3 mb-6">
                  {[
                    '15–20 hours per week',
                    'Contribute to Bitcoin open source',
                    'Mentor reviews on every PR',
                    'Bali hub access included',
                    'Graduate into Bitcoin ecosystem',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-muted text-sm">
                      <span className="text-orange-DEFAULT mt-0.5 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${SITE.email}?subject=Developer Fellowship Application`}
                  className="btn-primary w-full justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Apply for Developer Track
                </a>
              </div>
            </div>

            {/* Educator Track */}
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#6C63FF]/5 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🎓</div>
                <div className="badge badge-white mb-4">Educator Track</div>
                <div
                  className="text-4xl font-extrabold text-white mb-1"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  $250
                  <span className="text-lg text-text-muted font-normal">/month</span>
                </div>
                <p className="text-text-dim text-sm mb-6">6 months · extendable</p>
                <ul className="space-y-3 mb-6">
                  {[
                    '10–15 hours per week',
                    'Create Bitcoin educational content',
                    'Run workshops and study groups',
                    'Bali hub access included',
                    'Build a community of Bitcoin builders',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-muted text-sm">
                      <span className="text-text-dim mt-0.5 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${SITE.email}?subject=Educator Fellowship Application`}
                  className="btn-secondary w-full justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Apply for Educator Track
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">
              <Code className="w-3 h-3" />
              Open Source Projects
            </div>
            <h2
              className="text-4xl font-extrabold text-white mb-3"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              What you&apos;ll build on
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              Fellows contribute to the most important Bitcoin open source projects. Real code,
              real reviews, real impact on the network.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {PROJECTS.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 flex flex-col items-center text-center gap-2 hover:border-orange-DEFAULT/40 transition-colors group"
              >
                <span className="text-orange-DEFAULT/40 group-hover:text-orange-DEFAULT text-2xl transition-colors">⚡</span>
                <span className="text-white text-xs font-semibold leading-tight group-hover:text-orange-DEFAULT transition-colors">
                  {project.name}
                </span>
                <span className="text-text-dim text-xs font-mono">{project.lang}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">
              <Zap className="w-3 h-3" />
              The Process
            </div>
            <h2
              className="text-4xl font-extrabold text-white"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="card p-5 h-full">
                  <div
                    className="text-3xl font-extrabold text-orange-DEFAULT/20 mb-3 font-mono"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    {step.num}
                  </div>
                  <h3
                    className="text-white font-bold text-base mb-2"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 text-orange-DEFAULT/30">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cohort schedule */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge badge-orange mb-6">
                <Calendar className="w-3 h-3" />
                Cohort Schedule
              </div>
              <h2
                className="text-4xl font-extrabold text-white mb-4"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Two cohorts per year
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Fellows join in two annual cohorts. Applications open two months before the
                cohort start date. We accept a small number of fellows per cohort to keep
                mentorship quality high.
              </p>
              <a
                href={`mailto:${SITE.email}?subject=Fellowship Application`}
                className="btn-primary inline-flex"
              >
                <Mail className="w-4 h-4" />
                Send Your Proposal
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COHORTS.map((cohort) => (
                <div key={cohort.name} className="card p-6">
                  <div
                    className="text-3xl font-extrabold text-orange-DEFAULT mb-4"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    {cohort.name}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-text-dim text-xs font-mono uppercase tracking-wider mb-1">Applications open</p>
                      <p className="text-white font-semibold text-sm">{cohort.applications}</p>
                    </div>
                    <div>
                      <p className="text-text-dim text-xs font-mono uppercase tracking-wider mb-1">Cohort starts</p>
                      <p className="text-white font-semibold text-sm">{cohort.start}</p>
                    </div>
                    <div>
                      <p className="text-text-dim text-xs font-mono uppercase tracking-wider mb-1">Cohort ends</p>
                      <p className="text-white font-semibold text-sm">{cohort.end}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For funders */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">
              <Globe className="w-3 h-3" />
              For Funders
            </div>
            <h2
              className="text-4xl font-extrabold text-white mb-3"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Support a fellow
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              Fellowships are funded by Bitcoin companies and individuals who believe in
              growing developer capacity in Asia. Every dollar goes directly to fellows.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            {[
              { value: '$3,000', label: 'per developer fellow', note: '6 months total' },
              { value: '$1,500', label: 'per educator fellow', note: '6 months total' },
              { value: '6+ PRs', label: 'expected per fellow', note: 'minimum output' },
            ].map(({ value, label, note }) => (
              <div key={label} className="card p-6 text-center">
                <div
                  className="text-3xl font-extrabold text-orange-DEFAULT mb-1"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  {value}
                </div>
                <p className="text-white text-sm font-semibold mb-1">{label}</p>
                <p className="text-text-dim text-xs font-mono">{note}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={`mailto:${SITE.email}?subject=Fellowship Sponsorship`}
              className="btn-primary inline-flex"
            >
              <Mail className="w-4 h-4" />
              Sponsor a Fellow
            </a>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <div className="rounded-2xl bg-[#111] border border-orange-DEFAULT/20 p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-DEFAULT/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h2
                className="text-4xl font-extrabold text-white mb-4"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Ready to build full-time?
              </h2>
              <p className="text-text-muted text-lg max-w-xl mx-auto mb-4">
                Send an email to{' '}
                <a
                  href={`mailto:${SITE.email}?subject=Fellowship Application`}
                  className="text-orange-DEFAULT hover:text-orange-light transition-colors font-medium"
                >
                  {SITE.email}
                </a>{' '}
                with your proposal. Tell us which project you want to work on, your
                GitHub, and why you&apos;re ready for this.
              </p>
              <p className="text-text-dim text-sm mb-8 font-mono">No forms. No portals. Just an email.</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href={`mailto:${SITE.email}?subject=Fellowship Application`}
                  className="btn-primary"
                >
                  <Mail className="w-4 h-4" />
                  hello@codeorange.dev
                </a>
                <Link href="/programs" className="btn-secondary">
                  Browse Programs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
