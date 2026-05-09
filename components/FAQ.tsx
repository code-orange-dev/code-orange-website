import { ChevronDown, HelpCircle } from 'lucide-react'

/**
 * Six questions every prospective student asks.
 * Native <details>/<summary> = accessible, no JS, keyboard-friendly,
 * and Google parses the FAQPage schema for rich results in search.
 */
const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does it cost?',
    a: 'All Code Orange programs are free for accepted students. We are funded by Bitcoin grants, donations, and partnerships. Contributing back via open source is part of the curriculum — pay it forward, not upfront.',
  },
  {
    q: 'Do I need prior coding experience?',
    a: "It depends. rawBit and the Bitcoin Privacy Track expect comfort with at least one programming language. Sovereign Bitcoiner, OpenClaw, Vibe Coding, and Bitcoin Basics are open to all levels — bring curiosity, we will bring the rest.",
  },
  {
    q: 'How much time should I commit?',
    a: 'rawBit: ~5 hours/week for 10 weeks. Privacy Track: ~3 hours/week for 12 months, bi-weekly. Workshops: 2–3 hours per session, monthly. Every program is built around busy adults, and sessions are recorded.',
  },
  {
    q: 'In what language are sessions taught?',
    a: 'Most sessions run in English. Talk-a-Bit runs in Bahasa Indonesia and English. Community members teach in Malay, Thai, Vietnamese, and Mandarin in their respective regions.',
  },
  {
    q: 'Are graduates actually contributing to Bitcoin?',
    a: 'Yes — and we track it publicly. github.com/code-orange-dev/PR-tracking-dashboard records every PR submitted by community members to Bitcoin open source. Graduates have moved on to Chaincode Labs, OpenSats grants, and full-time Bitcoin roles.',
  },
  {
    q: 'Can I run a Code Orange workshop in my city?',
    a: "Yes please. Every workshop deck is open source and free at github.com/code-orange-dev/curriculum. Drop into our Discord — we will help with branding, links, and promotion.",
  },
]

export default function FAQ() {
  // FAQPage structured data — earns rich results in Google with the Q&A snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <section className="section">
      <div className="container-custom">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="text-center mb-10">
          <div className="badge badge-orange mx-auto mb-4">
            <HelpCircle className="w-3 h-3" />
            FAQ
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-3"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Common questions
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto">
            Anything else? Just ask in Discord — we read every message.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl bg-[#111] border border-[#222] hover:border-orange-DEFAULT/40 transition-colors overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-white font-semibold text-base">{item.q}</span>
                <ChevronDown className="w-4 h-4 text-orange-DEFAULT shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 -mt-1 text-text-muted text-sm leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
