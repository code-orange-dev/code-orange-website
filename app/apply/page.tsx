import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MessageCircle, Zap } from 'lucide-react'
import { PROGRAMS, SOCIAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Apply',
  description: 'Apply to a Code Orange Dev School program or join the community.',
}

const STEPS = [
  {
    n: '01',
    title: 'Join Discord',
    desc: 'The first step is always the same, join our Discord server and introduce yourself.',
  },
  {
    n: '02',
    title: 'Pick a program',
    desc: 'Browse the programs and ask in Discord which one fits your background. No wrong answer.',
  },
  {
    n: '03',
    title: 'Fill the form below',
    desc: 'Tell us a bit about yourself, your background, and your goals. Takes 5 minutes.',
  },
  {
    n: '04',
    title: 'Show up and build',
    desc: 'That\'s it. We\'ll confirm your spot and you start at the next session.',
  },
]

export default function ApplyPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section bg-grid relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="badge badge-orange mb-6">
              <Zap className="w-3 h-3" />
              Apply
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Start your{' '}
              <span className="text-gradient-orange">Bitcoin journey</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              Applications are rolling. We accept beginners, developers, and everyone in between. The only requirement is that you&apos;re genuinely interested in Bitcoin.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <h2
            className="text-3xl font-extrabold text-white mb-10"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.n} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[#333] to-transparent z-0" />
                )}
                <div className="card p-5 relative z-10">
                  <div className="text-orange-DEFAULT font-mono text-xs font-bold mb-3 tracking-wider">
                    {step.n}
                  </div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form + sidebar */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2
                className="text-3xl font-extrabold text-white mb-8"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Application Form
              </h2>
              <form
                action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"
                method="POST"
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Your name <span className="text-orange-DEFAULT">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Satoshi Nakamoto"
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder:text-text-dim focus:border-orange-DEFAULT focus:outline-none transition-colors text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email <span className="text-orange-DEFAULT">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder:text-text-dim focus:border-orange-DEFAULT focus:outline-none transition-colors text-sm"
                  />
                </div>

                {/* Nostr npub (optional) */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nostr npub{' '}
                    <span className="text-text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="nostr_npub"
                    placeholder="npub1..."
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder:text-text-dim focus:border-orange-DEFAULT focus:outline-none transition-colors text-sm font-mono"
                  />
                  <p className="text-text-dim text-xs mt-1">We love Nostr-first applicants.</p>
                </div>

                {/* Program */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Which program are you applying for?{' '}
                    <span className="text-orange-DEFAULT">*</span>
                  </label>
                  <select
                    name="program"
                    required
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:border-orange-DEFAULT focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select a program...</option>
                    {PROGRAMS.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name}, {p.subtitle}
                      </option>
                    ))}
                    <option value="not_sure">Not sure yet, help me pick</option>
                  </select>
                </div>

                {/* Background */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Tell us about your background{' '}
                    <span className="text-orange-DEFAULT">*</span>
                  </label>
                  <textarea
                    name="background"
                    required
                    rows={3}
                    placeholder="Developer? Bitcoiner? Complete beginner? Where are you coming from?"
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder:text-text-dim focus:border-orange-DEFAULT focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                {/* Goal */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    What do you want to learn or build?{' '}
                    <span className="text-orange-DEFAULT">*</span>
                  </label>
                  <textarea
                    name="goal"
                    required
                    rows={3}
                    placeholder="Run a node, build a Bitcoin app, get multisig set up, contribute to open source..."
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder:text-text-dim focus:border-orange-DEFAULT focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Where are you based?{' '}
                    <span className="text-text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Bali, Jakarta, Singapore, online..."
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder:text-text-dim focus:border-orange-DEFAULT focus:outline-none transition-colors text-sm"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-4 text-base"
                >
                  <Zap className="w-5 h-5" />
                  Submit Application
                </button>

                <p className="text-text-dim text-xs text-center">
                  We aim to reply within 48 hours, usually much faster via Discord.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Discord CTA */}
              <div className="card p-6">
                <h3 className="text-white font-bold mb-2">Prefer to chat first?</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  Join Discord and ask your questions in real time. The community is super friendly and will help you pick the right program.
                </p>
                <Link
                  href={SOCIAL.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  Join Discord First
                </Link>
              </div>

              {/* What to expect */}
              <div className="card p-6">
                <h3 className="text-white font-bold mb-4">What to expect</h3>
                <ul className="space-y-3">
                  {[
                    'Rolling admissions, apply anytime',
                    'No technical screening',
                    'Response within 48 hours',
                    'Start with the next session',
                    'Most programs are free',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle className="w-4 h-4 text-orange-DEFAULT shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programs quick links */}
              <div className="card p-6">
                <h3 className="text-white font-bold mb-4 text-sm">Browse programs first</h3>
                <div className="space-y-2">
                  {PROGRAMS.slice(0, 4).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/programs/${p.slug}`}
                      className="flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm py-1 group"
                    >
                      <span>{p.icon}</span>
                      <span>{p.name}</span>
                      <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
                <Link
                  href="/programs"
                  className="text-orange-DEFAULT hover:text-orange-light text-xs mt-3 inline-flex items-center gap-1 transition-colors"
                >
                  View all programs <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
