import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MessageCircle, Zap } from 'lucide-react'
import { PROGRAMS, SOCIAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Apply',
  description: 'Apply to a Code Orange Dev School program. Join Discord, pick a program, show up and build.',
}

const STEPS = [
  {
    n: '01',
    title: 'Join Discord',
    desc: 'Jump into the server and introduce yourself in #introductions. Tell us where you\'re from and what brought you to Bitcoin.',
  },
  {
    n: '02',
    title: 'Pick your program',
    desc: 'Browse the programs below or ask in #which-program-is-right-for-me. The community will point you in the right direction.',
  },
  {
    n: '03',
    title: 'Post your application',
    desc: 'Drop a short message in the program\'s channel: your background, your goal, and when you\'re ready to start.',
  },
  {
    n: '04',
    title: 'Show up and build',
    desc: 'That\'s it. We\'ll confirm your spot and you start at the next session. No waitlist, no gatekeeping.',
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
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Applications are rolling. We accept beginners, developers, and everyone in between.
              The only requirement is that you&apos;re genuinely interested in Bitcoin.
            </p>
            <Link
              href={SOCIAL.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 inline-flex"
            >
              <MessageCircle className="w-5 h-5" />
              Join Discord to Apply
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
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

      {/* Discord CTA + sidebar */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Discord block */}
            <div className="lg:col-span-2">
              <h2
                className="text-3xl font-extrabold text-white mb-4"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Everything happens on Discord.
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Our programs run on Discord — sessions, homework, announcements, and the community itself.
                Joining the server is step one. It&apos;s free, instant, and you&apos;ll find the right people to help you from there.
              </p>

              <a
                href={SOCIAL.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 inline-flex mb-8"
              >
                <MessageCircle className="w-5 h-5" />
                Join the Discord Server
              </a>

              {/* Program quick links */}
              <h3 className="text-white font-bold text-lg mb-5" style={{ fontFamily: 'var(--font-nunito)' }}>
                Browse programs first
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROGRAMS.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/programs/${p.slug}`}
                    className="card p-4 flex items-start gap-3 group hover:border-orange-DEFAULT/40 transition-colors"
                  >
                    <span className="text-2xl shrink-0">{p.icon}</span>
                    <div className="min-w-0">
                      <h4 className="text-white font-semibold text-sm group-hover:text-orange-DEFAULT transition-colors truncate">
                        {p.name}
                      </h4>
                      <p className="text-text-muted text-xs">{p.subtitle} · {p.level}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-dim group-hover:text-orange-DEFAULT transition-colors ml-auto shrink-0 mt-0.5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* What to expect */}
              <div className="card p-6">
                <h3 className="text-white font-bold mb-4">What to expect</h3>
                <ul className="space-y-3">
                  {[
                    'Rolling admissions — apply anytime',
                    'No technical screening',
                    'Response within 24 hours on Discord',
                    'Start at the very next session',
                    'Most programs are free',
                    'Bitcoin only. No shitcoins.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle className="w-4 h-4 text-orange-DEFAULT shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fellowship pathway */}
              <div className="card p-6 border border-orange-DEFAULT/20">
                <h3 className="text-white font-bold mb-2">Looking for a fellowship?</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  Graduates of our developer programs are eligible to apply for a paid fellowship — $500/month to contribute full-time to Bitcoin open source.
                </p>
                <Link
                  href="/fellowships"
                  className="btn-secondary w-full justify-center text-sm py-3"
                >
                  Learn about Fellowships
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
