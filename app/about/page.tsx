import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, MessageCircle, Zap, Globe, Users } from 'lucide-react'
import { SOCIAL, STATS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Code Orange Dev School was built in Bali to grow Bitcoin\'s developer and node-running ecosystem across Southeast Asia.',
}

const VALUES = [
  {
    icon: '₿',
    title: 'Bitcoin Only',
    desc: 'We teach Bitcoin. Not crypto, not blockchain, not web3. The signal, not the noise.',
  },
  {
    icon: '🛠️',
    title: 'Hands-On First',
    desc: 'Every session ends with something built, deployed, or running. No theory without practice.',
  },
  {
    icon: '🌐',
    title: 'Open Source',
    desc: 'Our graduates contribute to Bitcoin open source software. Code in the open, always.',
  },
  {
    icon: '🔐',
    title: 'Sovereignty',
    desc: 'Run your own node. Hold your own keys. Control your own money. Full sovereignty, no shortcuts.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    desc: 'The school is the community. We grow together, developers teaching developers, Bitcoiners supporting Bitcoiners.',
  },
  {
    icon: '🌴',
    title: 'Built for Asia',
    desc: 'We\'re based in Bali because Asia needs more Bitcoin builders. We\'re here for the long game.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section bg-grid relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge badge-orange mb-6">
                <Zap className="w-3 h-3" />
                Our Story
              </div>
              <h1
                className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Built in Bali,{' '}
                <span className="text-gradient-orange">for Asia&apos;s Bitcoiners.</span>
              </h1>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Code Orange started with a simple observation: Bitcoin adoption in Southeast Asia was growing fast, but the technical expertise wasn&apos;t keeping up.
                </p>
                <p>
                  Developers were interested but didn&apos;t know where to start. Bitcoiners were stacking but relying on custodians. Node runners were rare. Open source contributors were even rarer.
                </p>
                <p>
                  We built Code Orange to fix that, starting right here in{' '}
                  <span className="text-white font-medium">Canggu, Bali, Indonesia</span>, and expanding online and across the region — with workshops in Thai, Vietnamese, Indonesian, Malay, English, and Mandarin.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-56 col-span-2 rounded-xl overflow-hidden">
                <Image
                  src="/images/workshop-1.jpg"
                  alt="Code Orange community session at Code Orange Dev School"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="badge badge-orange text-xs">
                    <MapPin className="w-3 h-3" /> Code Orange Dev School, Canggu
                  </span>
                </div>
              </div>
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="card p-5 text-center"
                >
                  <div
                    className="text-3xl font-extrabold text-orange-DEFAULT mb-1"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">Our Values</div>
            <h2
              className="text-4xl font-extrabold text-white"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              What we believe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-6">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  {v.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bitcoin House Bali */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/photo-10.jpg"
                alt="Hands-on session at Code Orange"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="badge badge-orange mb-6">
                <MapPin className="w-3 h-3" />
                Home Base
              </div>
              <h2
                className="text-4xl font-extrabold text-white mb-6"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Code Orange Dev School
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Our in-person workshops and events are hosted at Code Orange Dev School in Canggu, Bali, Indonesia, one of Southeast Asia&apos;s most active Bitcoin community spaces.
                </p>
                <p>
                  The space is equipped with hardware wallets, ASIC miners, Raspberry Pi nodes, and all the tools needed for hands-on Bitcoin education. Real hardware, real practice.
                </p>
                <p>
                  Online programs are run on Discord, open to anyone in Asia and beyond.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'Canggu, Bali 🌴',
                  'Hardware Labs',
                  'Node Farm',
                  'Open to all',
                ].map((tag) => (
                  <span key={tag} className="badge badge-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">
              <Zap className="w-3 h-3" />
              What We Do
            </div>
            <h2 className="text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-nunito)' }}>
              Six pillars of the school
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: '🎓',
                title: 'Advanced Bitcoin Dev Education',
                desc: '8-week protocol deep-dive cohorts and 5-week Sovereign Bitcoiner crash courses. Weekly sessions, homework, and graduates who contribute to open source.',
              },
              {
                icon: '🔧',
                title: 'Hands-On Workshops',
                desc: 'In-person and online sessions covering node running, mining, multisig, private eCash, Fedimint, Nostr, and Lightning — keeping the network decentralised.',
              },
              {
                icon: '🌏',
                title: 'Community Hubs',
                desc: 'Partnering with Bitcoin House Bali, Bitcoin Learning Centers, and community hubs to deliver workshops in Thai, Vietnamese, Indonesian, Malay, English, and Mandarin.',
              },
              {
                icon: '🛠️',
                title: 'Talent Scouting',
                desc: 'Training developers with resources from Chaincode Labs, base58, ₿Trust/Qala, and Vinteum. Guiding graduates to contribute to Bitcoin Core, Lightning, Fedimint, and more.',
              },
              {
                icon: '👥',
                title: 'Train-the-Trainer',
                desc: 'Headhunting and empowering technical community leaders at Bitcoin hubs across Asia. Monthly quality sessions + "Sovereign Bitcoiner" packs with SeedSigners, T-shirts, and workshop guides.',
              },
              {
                icon: '⚡',
                title: 'Local Bitcoin Payments',
                desc: 'Empowering everyday people with tools like Fedi\'s federated mints, Koral, and PlebQR for smoother, more private Bitcoin payments in local economies.',
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'var(--font-nunito)' }}>{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">
              <Globe className="w-3 h-3" />
              The Vision
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-3" style={{ fontFamily: 'var(--font-nunito)' }}>
              Specific goals. Real deadlines.
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              We measure success in nodes deployed, pull requests merged, and community leaders empowered — not in course completions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: '21,000', label: 'full Bitcoin nodes deployed', deadline: 'by 2030', icon: '📡' },
              { value: '2 PRs/wk', label: 'merged to Bitcoin open source', deadline: 'from end of 2026', icon: '🛠️' },
              { value: '10', label: 'new Bitcoin Houses across Asia', deadline: 'by end of 2026', icon: '🏠' },
              { value: '15', label: 'gig economy jobs via Train-the-Trainer', deadline: 'by 2026', icon: '🎯' },
            ].map(({ value, label, deadline, icon }) => (
              <div key={label} className="card p-6 text-center">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="text-3xl font-extrabold text-orange-DEFAULT mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>{value}</div>
                <p className="text-white text-sm font-semibold mb-1">{label}</p>
                <p className="text-text-dim text-xs font-mono">{deadline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#080808]">
        <div className="container-custom text-center">
          <h2
            className="text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Come build with us.
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Whether you&apos;re a developer wanting to go deep on Bitcoin, or a bitcoiner looking to get more sovereign, there&apos;s a place for you here.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href={SOCIAL.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-4 h-4" />
              Join the Community
            </Link>
            <Link href="/programs" className="btn-secondary">
              Browse Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
