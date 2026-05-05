import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Github, MessageCircle, Zap } from 'lucide-react'
import { SOCIAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Bitcoin Privacy Developer Track',
  description:
    '24 bi-weekly sessions. 12 months. A contribution-first curriculum covering Silent Payments, Payjoin, Floresta, Fedimint, and Lightning privacy. Every session ends with a real open source contribution.',
}

const PHASES = [
  {
    num: '01',
    name: 'Foundations',
    months: 'Months 1–2 · Sessions 1–4',
    desc: 'How surveillance works. Chain analysis heuristics. UTXO management. Wallet fingerprinting. Start reading real Bitcoin source code and engaging with repos from day one.',
    topics: ['Chain analysis & CIOH', 'Transaction anatomy', 'UTXO coin selection', 'Wallet fingerprinting'],
  },
  {
    num: '02',
    name: 'Silent Payments',
    months: 'Months 3–4 · Sessions 5–8',
    desc: 'BIP352 deep dive. ECDH shared secret derivation. Scanning with compact block filters. Contribute to rust-silentpayments and Kyoto. Submit your first PR.',
    topics: ['BIP352 cryptography', 'SP sender in Python', 'Compact block filters', 'First PR submitted'],
  },
  {
    num: '03',
    name: 'Payjoin',
    months: 'Months 5–6 · Sessions 9–12',
    desc: 'Break the common-input-ownership heuristic. Build Payjoin V2 flows in Rust. Integrate with BTCPay Server. Contribute to rust-payjoin.',
    topics: ['BIP77/78 theory', 'Payjoin Dev Kit (Rust)', 'BTCPay integration', 'PRs to rust-payjoin'],
  },
  {
    num: '04',
    name: 'Network Privacy',
    months: 'Months 7–8 · Sessions 13–16',
    desc: 'Your node and connections leak too. Dandelion++, Tor, I2P. Compact block filters deep dive. Taproot privacy. Contribute to Floresta, Kyoto, and Bitcoin Core.',
    topics: ['Dandelion++ & Tor', 'BIP157/158 filters', 'Light client privacy', 'Taproot & MuSig2'],
  },
  {
    num: '05',
    name: 'Advanced Techniques',
    months: 'Months 9–10 · Sessions 17–20',
    desc: 'CoinJoin mechanics and WabiSabi. CoinSwap with Teleport Transactions. eCash with Cashu and Fedimint. Lightning blinded paths and BOLT12.',
    topics: ['CoinJoin & WabiSabi', 'CoinSwap (Teleport)', 'Cashu & Fedimint', 'Lightning BOLT12'],
  },
  {
    num: '06',
    name: 'Building & Contributing',
    months: 'Months 11–12 · Sessions 21–24',
    desc: 'Privacy-preserving wallet development with BDK. Transaction privacy scoring. Contribution sprint. Capstone — present your PRs to the full Code Orange community.',
    topics: ['BDK wallet dev', 'Privacy scoring tool', 'Contribution sprint', 'Capstone presentation'],
  },
]

const LADDER = [
  { sessions: 'Sessions 1–4', action: 'Read code → Star repos → File issues → Improve docs' },
  { sessions: 'Sessions 5–8', action: 'Review PRs → Add test cases → Submit your first PR' },
  { sessions: 'Sessions 9–12', action: 'Fix bugs → Add features → Submit PRs to multiple repos' },
  { sessions: 'Sessions 13–16', action: 'Tackle harder issues → Review others\' PRs → Mentor newcomers' },
  { sessions: 'Sessions 17–20', action: 'Identify gaps → Propose improvements → Lead contributions' },
  { sessions: 'Sessions 21–24', action: 'Ship substantial work → Present → Join the fellowship' },
]

const REPOS = [
  { name: 'rust-silentpayments', lang: 'Rust' },
  { name: 'rust-payjoin', lang: 'Rust' },
  { name: 'Bitcoin Core', lang: 'C++' },
  { name: 'BDK', lang: 'Rust' },
  { name: 'Kyoto', lang: 'Rust' },
  { name: 'Floresta', lang: 'Rust' },
  { name: 'Fedimint', lang: 'Rust' },
  { name: 'Cashu', lang: 'Python' },
  { name: 'LDK', lang: 'Rust' },
  { name: 'Teleport', lang: 'Rust' },
]

export default function PrivacyTrackPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section bg-grid relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 pointer-events-none" style={{ background: '#6C63FF' }} />
        <div className="container-custom relative z-10">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Programs
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ background: '#6C63FF20', border: '1px solid #6C63FF40' }}>
                  🔐
                </div>
                <span className="badge badge-orange text-xs">2026 Focus</span>
              </div>

              <h1
                className="text-5xl md:text-6xl font-extrabold text-white mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Bitcoin Privacy{' '}
                <span className="text-gradient-orange">Developer Track</span>
              </h1>
              <p className="text-text-muted text-xl mb-8">
                24 sessions. 12 months. Every session ends with a contribution to Bitcoin open source.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href={SOCIAL.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Zap className="w-4 h-4" />
                  Apply for Privacy Track
                </Link>
                <a
                  href="https://github.com/code-orange-dev/curriculum/tree/main/privacy-track"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="w-4 h-4" />
                  View Curriculum on GitHub
                </a>
              </div>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '24', label: 'Sessions', sub: 'bi-weekly, 2–2.5 hrs' },
                { value: '12', label: 'Months', sub: 'full curriculum' },
                { value: '5–8', label: 'PRs per grad', sub: 'expected output' },
                { value: '10+', label: 'Repos', sub: 'you\'ll contribute to' },
              ].map(({ value, label, sub }) => (
                <div key={label} className="card p-5 text-center">
                  <div className="text-3xl font-extrabold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#6C63FF' }}>{value}</div>
                  <div className="text-white font-semibold text-sm">{label}</div>
                  <div className="text-text-dim text-xs mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What this is */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="badge badge-orange mb-6">What This Is</div>
              <h2 className="text-4xl font-extrabold text-white mb-6" style={{ fontFamily: 'var(--font-nunito)' }}>
                A contribution pipeline, not a lecture series.
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  We don&apos;t wait until the end to start contributing — participants engage with real Bitcoin privacy repos from session 1. Every session teaches a concept, builds something hands-on, and then points you at a specific open-source action.
                </p>
                <p>
                  By session 8, you&apos;ve submitted your first PR. By session 24, you&apos;re a Bitcoin privacy developer with a track record that speaks for itself.
                </p>
                <p>
                  Graduates with 18+ sessions, 3+ PRs, and a capstone presentation are eligible for the{' '}
                  <Link href="/fellowships" className="text-orange-DEFAULT hover:text-orange-light transition-colors font-medium">
                    Code Orange Developer Fellowship
                  </Link>{' '}
                  — $500/month for 6 months to continue contributing full-time.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Bitcoin Only', 'Bi-weekly Sessions', 'Online · Discord', 'CC0 Curriculum', 'Open Source Output'].map((tag) => (
                  <span key={tag} className="badge badge-white">{tag}</span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Prerequisites</h3>
              <div className="space-y-3">
                {[
                  { icon: '₿', text: 'Basic Bitcoin knowledge (completed Bitcoin Dojo or equivalent)' },
                  { icon: '💻', text: 'Comfortable reading code — you don\'t need to be a senior dev' },
                  { icon: '🐍', text: 'Python or Rust experience helpful but not required' },
                  { icon: '🌐', text: 'GitHub account and a desire to contribute to open source' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="text-xl shrink-0">{icon}</span>
                    <p className="text-text-muted text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-[#1a1a1a]">
                <p className="text-text-dim text-xs font-mono uppercase tracking-wider mb-2">Format</p>
                <p className="text-white font-medium">Bi-weekly workshops · 2–2.5 hours each</p>
                <p className="text-text-muted text-sm mt-1">Online via Discord · Open to builders across Asia and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Ladder */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">The Contribution Ladder</div>
            <h2 className="text-4xl font-extrabold text-white mb-3" style={{ fontFamily: 'var(--font-nunito)' }}>
              We don&apos;t throw you in the deep end.
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Contributions scale with your knowledge. By the end, you&apos;re leading.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {LADDER.map((step, i) => (
              <div key={step.sessions} className="flex items-start gap-4 p-4 rounded-xl bg-[#0d0d0d] border border-[#1a1a1a]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style={{
                    background: `rgba(108, 99, 255, ${0.15 + i * 0.12})`,
                    color: '#6C63FF',
                    border: '1px solid rgba(108,99,255,0.3)',
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">{step.sessions}</p>
                  <p className="text-text-muted text-sm">{step.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Phases */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">Curriculum</div>
            <h2 className="text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-nunito)' }}>
              Six phases. One year.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PHASES.map((phase) => (
              <div key={phase.num} className="card p-6">
                <div
                  className="text-3xl font-extrabold mb-3 font-mono"
                  style={{ fontFamily: 'var(--font-nunito)', color: 'rgba(108,99,255,0.35)' }}
                >
                  {phase.num}
                </div>
                <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                  Phase {phase.num}: {phase.name}
                </h3>
                <p className="text-text-dim text-xs font-mono mb-3">{phase.months}</p>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{phase.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {phase.topics.map((t) => (
                    <span key={t} className="badge badge-white text-xs">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repos you'll contribute to */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="badge badge-orange mx-auto mb-4">Open Source Targets</div>
            <h2 className="text-4xl font-extrabold text-white mb-3" style={{ fontFamily: 'var(--font-nunito)' }}>
              Repos you&apos;ll contribute to
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              Real codebases. Real maintainers. Real impact on Bitcoin privacy infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
            {REPOS.map((repo) => (
              <div key={repo.name} className="card p-4 text-center">
                <span className="text-orange-DEFAULT/50 text-xl mb-2 block">⚡</span>
                <p className="text-white text-xs font-semibold mb-1">{repo.name}</p>
                <p className="text-text-dim text-xs font-mono">{repo.lang}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected output */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="badge badge-orange mx-auto mb-4">Expected Output</div>
            <h2 className="text-4xl font-extrabold text-white mb-3" style={{ fontFamily: 'var(--font-nunito)' }}>
              What one cohort produces
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              These are conservative estimates based on the curriculum design. This is what a 15-person cohort ships in 12 months.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '5–8', label: 'PRs per participant', sub: 'submitted over 12 months' },
              { value: '3–5', label: 'PRs merged', sub: 'per graduate on average' },
              { value: '3+', label: 'Different repos', sub: 'each participant contributes to' },
              { value: '75–120', label: 'Total PRs', sub: 'for a cohort of 15' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="card p-6 text-center">
                <div className="text-3xl font-extrabold text-orange-DEFAULT mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>{value}</div>
                <p className="text-white text-sm font-semibold mb-1">{label}</p>
                <p className="text-text-dim text-xs font-mono">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub + Apply CTA */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub card */}
            <a
              href="https://github.com/code-orange-dev/curriculum/tree/main/privacy-track"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-8 flex flex-col gap-4 hover:border-orange-DEFAULT/40 transition-colors group"
            >
              <Github className="w-8 h-8 text-text-muted group-hover:text-orange-DEFAULT transition-colors" />
              <div>
                <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-nunito)' }}>
                  Full curriculum on GitHub
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  40+ files, 6 phases, 24 session guides, exercises, facilitator guide, capstone rubric, and a full reading list. CC0 licensed — open to everyone.
                </p>
              </div>
              <div className="flex items-center gap-2 text-orange-DEFAULT text-sm font-semibold mt-auto">
                code-orange-dev/curriculum <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Apply card */}
            <div className="rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #6C63FF15, #6C63FF05)', border: '1px solid #6C63FF30' }}>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] pointer-events-none" style={{ background: '#6C63FF20' }} />
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="text-4xl">🔐</div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-nunito)' }}>
                    Ready to build?
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Jump into Discord and apply. Tell us your background, which part of the curriculum excites you most, and what you want to contribute.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Link
                    href={SOCIAL.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Apply on Discord
                  </Link>
                  <Link href="/fellowships" className="btn-secondary justify-center">
                    View Fellowships <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
