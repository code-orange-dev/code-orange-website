import Link from 'next/link'
import { ArrowRight, MessageCircle, Megaphone } from 'lucide-react'
import { SOCIAL } from '@/lib/constants'

const PERKS: [string, string][] = [
  ['📐', 'Editable Canva slide decks'],
  ['🎯', 'Beginner → advanced curriculum'],
  ['🆓', 'Free for any community'],
  ['🌐', 'Localize into your language'],
  ['📣', 'We help promote your event'],
  ['🤝', 'Join the host network in Discord'],
]

export default function RunWorkshopCTA() {
  return (
    <section className="section bg-[#080808]">
      <div className="container-custom">
        <div className="relative rounded-2xl border border-orange-DEFAULT/30 bg-gradient-to-br from-orange-DEFAULT/[0.08] via-[#0d0d0d] to-bg p-7 md:p-12 overflow-hidden">
          {/* Background glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-DEFAULT/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — pitch */}
            <div>
              <div className="badge badge-orange mb-4">
                <Megaphone className="w-3 h-3" />
                For community leaders
              </div>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Run a Code Orange workshop{' '}
                <span className="text-gradient-orange">in your city.</span>
              </h2>
              <p className="text-text-muted text-base leading-relaxed mb-6">
                Every workshop we run — Bitcoin Basics, Sovereign Bitcoiner,
                OpenClaw, Vibe Coding — has{' '}
                <span className="text-white">free, open-source slides</span>.
                Bring Bitcoin education to Jakarta, Bangkok, KL, HCMC, Manila —
                anywhere. We back you up.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/code-orange-dev/curriculum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Get the slides <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href={SOCIAL.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask in Discord
                </Link>
              </div>
            </div>

            {/* Right — perks list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERKS.map(([icon, label]) => (
                <li
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#0e0e0e] border border-[#1a1a1a]"
                >
                  <span className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-lg shrink-0">
                    {icon}
                  </span>
                  <span className="text-text-muted text-sm leading-snug">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
