import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Zap,
  Users,
  BookOpen,
  Code2,
  Shield,
  Globe,
  MessageCircle,
  Github,
  Twitter,
  Instagram,
  ChevronRight,
  MapPin,
  Clock,
  Calendar,
} from 'lucide-react'
import { SITE, SOCIAL, STATS, PROGRAMS } from '@/lib/constants'
import NostrFeed from '@/components/NostrFeed'

export const metadata: Metadata = {
  title: `${SITE.name}, ${SITE.tagline}`,
}

// Ticker tape items
const TICKER_ITEMS = [
  '₿ Bitcoin Only',
  '⚡ Lightning Fast',
  '🛡️ Multisig Security',
  '🌏 Southeast Asia',
  '🔑 Self Custody',
  '📡 Run Your Node',
  '🦀 Nostr Native',
  '⛏️ Bitcoin Mining',
  '🔐 Privacy Tools',
  '🌴 Bali, Indonesia',
  '🧡 Open Source',
  '🤝 Community First',
]

// Featured programs for homepage (first 4 — rawBit, Sovereign Bitcoiner, OpenClaw, Vibe Coding)
const FEATURED_PROGRAMS = PROGRAMS.slice(0, 4)

// All unique workshop/event types for the events section (with poster images)
const EVENTS = [
  {
    name: 'Sovereign Bitcoiner Workshop',
    schedule: 'Every 2nd Wednesday',
    time: '11:00 UTC',
    format: 'Online',
    platform: 'Discord',
    host: 'Razor',
    level: 'Intermediate',
    href: '/programs/sovereign-bitcoiner',
    poster: '/images/posters/sovereign-bitcoiner.jpg',
  },
  {
    name: 'OpenClaw & Vibe Coding',
    schedule: 'Every 4th Tuesday',
    time: '5:00 PM WITA',
    format: 'In-Person',
    platform: 'Bitcoin House Bali',
    host: 'Code Orange',
    level: 'All levels',
    href: '/programs/openclaw',
    poster: '/images/posters/openclaw.jpg',
  },
  {
    name: 'Bitcoin Privacy with Fedi',
    schedule: 'Every 1st Thursday',
    time: '11:00 UTC',
    format: 'Online',
    platform: 'Discord',
    host: 'The Quiet Satoshi',
    level: 'Beginner',
    href: '/programs/bitcoin-basics',
    poster: '/images/posters/bitcoin-privacy.jpg',
  },
  {
    name: 'Bitcoin Reading Club',
    schedule: 'Every 4th Wednesday',
    time: '12:00 UTC',
    format: 'Online',
    platform: 'Discord',
    host: 'Alex',
    level: 'All levels',
    href: '/programs/bitcoin-reading-club',
    poster: '/images/posters/reading-club.jpg',
  },
  {
    name: 'Accountability Sessions',
    schedule: 'Every 1st Tuesday',
    time: '11:00 UTC',
    format: 'Online',
    platform: 'Discord',
    host: 'Code Orange',
    level: 'All levels',
    href: '/programs/accountability-sessions',
    poster: '/images/posters/accountability.jpg',
  },
  {
    name: 'Talk-a-Bit Meetup',
    schedule: 'Every 15th of the month',
    time: '19:00 WIB',
    format: 'Online',
    platform: 'Discord',
    host: 'einsamwolf28',
    level: 'All levels',
    href: '/programs/talk-a-bit',
    poster: '/images/posters/talk-a-bit.jpg',
  },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="relative min-h-screen flex flex-col justify-center bg-grid overflow-hidden">
        {/* Orange glow in background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-DEFAULT/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/0 to-bg pointer-events-none" />

        <div className="container-custom relative z-10 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-orange-muted border border-orange-DEFAULT/30 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-orange-DEFAULT animate-pulse" />
              <span className="text-orange-DEFAULT text-sm font-semibold tracking-wide">
                Asia&apos;s Bitcoin Developer School
              </span>
            </div>

            {/* Hero logo image */}
            <div className="mb-6 animate-fade-up flex justify-center" style={{ animationDelay: '0.1s' }}>
              <Image
                src="/images/logo.png"
                alt="Code Orange Dev School"
                width={480}
                height={180}
                className="w-[260px] sm:w-[340px] md:w-[440px] h-auto object-contain drop-shadow-[0_0_40px_rgba(247,147,26,0.15)]"
                priority
              />
            </div>

            {/* Primary headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto mb-5 animate-fade-up"
              style={{ fontFamily: 'var(--font-nunito)', animationDelay: '0.2s' }}
            >
              A Bitcoin OSS contributor pipeline{' '}
              <span className="text-gradient-orange">with a fellowship layer.</span>
            </h1>

            {/* Tagline */}
            <p
              className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              Bitcoin lacks developers and node runners in Asia.{' '}
              <span className="text-white font-medium">We fix this.</span>{' '}
              Train to become a builder who strengthens the network, through advanced self-custody,
              node running, and open source contribution.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <Link href={SOCIAL.discord} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                <MessageCircle className="w-5 h-5" />
                Join the Community
              </Link>
              <Link href="/programs" className="btn-secondary text-base px-8 py-4">
                Browse Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-[#111]/80 border border-[#222] backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-orange-DEFAULT mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                  {stat.value}
                </div>
                <div className="text-text-muted text-xs uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-dim">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-text-dim to-transparent" />
        </div>
      </section>

      {/* ============================================================
          TICKER TAPE
      ============================================================ */}
      <div className="py-4 bg-orange-DEFAULT border-y border-orange-dark overflow-hidden">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-6 mx-6 text-black font-bold text-sm tracking-wide">
                {item}
                <span className="text-black/40">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          MISSION SECTION
      ============================================================ */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/workshop-1.jpg"
                  alt="Code Orange Workshop at Code Orange Dev School"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="badge badge-orange text-xs">
                    <MapPin className="w-3 h-3" /> Code Orange Dev School, Canggu
                  </span>
                </div>
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden">
                <Image
                  src="/images/workshop-2.jpg"
                  alt="Code Orange hands-on Bitcoin session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden bg-[#111] border border-[#222] flex flex-col items-center justify-center p-6 text-center">
                <div className="text-4xl font-extrabold text-orange-DEFAULT mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>50+</div>
                <div className="text-white font-semibold text-sm">Graduates</div>
                <div className="text-text-muted text-xs mt-1">building on Bitcoin</div>
              </div>
            </div>

            {/* Text content */}
            <div>
              <div className="badge badge-orange mb-6">
                <Zap className="w-3 h-3" />
                The Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-nunito)' }}>
                Bitcoin needs more builders{' '}
                <span className="text-gradient-orange">in Asia.</span>
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Southeast Asia is one of the fastest-growing regions for Bitcoin adoption, but it lacks the developers, node runners, and technical educators to support it.
                </p>
                <p>
                  Code Orange was built in Bali to change that. We run hands-on cohorts, weekly workshops, and in-person sessions at{' '}
                  <span className="text-white">Code Orange Dev School in Canggu, Bali, Indonesia</span> to turn regular people into sovereign Bitcoiners and capable builders.
                </p>
                <p>
                  <span className="text-orange-DEFAULT font-semibold">No shitcoins. No fluff.</span> Just deep, practical Bitcoin education for people who want to strengthen the network.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Bitcoin Only', 'Open Source', 'Community Run', 'Bali Based'].map(tag => (
                  <span key={tag} className="badge badge-white">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROGRAMS SECTION
      ============================================================ */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">
              <BookOpen className="w-3 h-3" />
              Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
              Pick your path
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Whether you&apos;re a developer or a curious bitcoiner, we have a program that meets you where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {FEATURED_PROGRAMS.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="relative rounded-2xl overflow-hidden group h-80 block border border-[#222] hover:border-orange-DEFAULT/40 transition-colors"
              >
                {/* Poster image */}
                {'poster' in program && program.poster ? (
                  <Image
                    src={program.poster as string}
                    alt={program.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]" />
                )}
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/10" />
                {/* Content pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-orange text-xs">{program.tagline}</span>
                    <span className="text-text-dim text-xs">{program.duration}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-1 group-hover:text-orange-DEFAULT transition-colors" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {program.name} <span className="text-text-muted font-normal text-base">{program.subtitle}</span>
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-2 mb-3">{program.description}</p>
                  <div className="flex items-center gap-1 text-orange-DEFAULT text-sm font-semibold">
                    Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/programs" className="btn-secondary inline-flex">
              View all {PROGRAMS.length} programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          EVENTS / CALENDAR SECTION
      ============================================================ */}
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="badge badge-orange mb-4">
                <Calendar className="w-3 h-3" />
                Recurring Events
              </div>
              <h2 className="text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-nunito)' }}>
                Always something happening
              </h2>
            </div>
            <Link href={SOCIAL.discord} target="_blank" rel="noopener noreferrer" className="btn-secondary shrink-0">
              <MessageCircle className="w-4 h-4" />
              Join Discord for updates
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVENTS.map((event) => (
              <Link key={event.name} href={event.href} className="rounded-2xl overflow-hidden border border-[#222] hover:border-orange-DEFAULT/40 transition-all group flex flex-col">
                {/* Poster image */}
                <div className="relative h-44 overflow-hidden">
                  {event.poster ? (
                    <Image
                      src={event.poster}
                      alt={event.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className={`badge text-xs ${event.format === 'In-Person' ? 'badge-orange' : 'badge-white'}`}>
                      {event.format}
                    </span>
                  </div>
                </div>
                {/* Card body */}
                <div className="bg-[#111] p-4 flex flex-col gap-3 flex-1">
                  <div>
                    <h4 className="text-white font-semibold text-sm group-hover:text-orange-DEFAULT transition-colors leading-tight">
                      {event.name}
                    </h4>
                    <p className="text-text-muted text-xs mt-0.5">Hosted by {event.host}</p>
                  </div>
                  <div className="space-y-1.5 text-xs text-text-muted">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-orange-DEFAULT shrink-0" />
                      <span>{event.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-orange-DEFAULT shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-orange-DEFAULT shrink-0" />
                      <span>{event.platform}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#1a1a1a] mt-auto">
                    <span className="badge badge-white text-xs">{event.level}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          NOSTR FEED + COMMUNITY SECTION
      ============================================================ */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Nostr Feed */}
            <div>
              <div className="badge badge-orange mb-4">
                <Zap className="w-3 h-3" />
                Latest from Nostr
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-2" style={{ fontFamily: 'var(--font-nunito)' }}>
                Follow us on Nostr
              </h2>
              <p className="text-text-muted text-sm mb-8">
                Uncensorable. Decentralized. The way it should be.
              </p>
              <NostrFeed limit={5} />
            </div>

            {/* Community join */}
            <div className="flex flex-col justify-center">
              <div className="badge badge-orange mb-4">
                <Users className="w-3 h-3" />
                Community
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
                Join the Bitcoin builders community
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Connect with developers, node runners, and Bitcoiners across Southeast Asia and beyond. Ask questions, share progress, and build together.
              </p>

              {/* Social links */}
              <div className="space-y-3 mb-8">
                {[
                  {
                    icon: MessageCircle,
                    label: 'Discord',
                    sub: 'Primary community hub',
                    href: SOCIAL.discord,
                    cta: 'Join server',
                    color: '#5865F2',
                  },
                  {
                    icon: Twitter,
                    label: 'X (Twitter)',
                    sub: '@codeorangedevs',
                    href: SOCIAL.twitter,
                    cta: 'Follow',
                    color: '#1DA1F2',
                  },
                  {
                    icon: Instagram,
                    label: 'Instagram',
                    sub: '@codeorangedevs',
                    href: SOCIAL.instagram,
                    cta: 'Follow',
                    color: '#E4405F',
                  },
                  {
                    icon: Github,
                    label: 'GitHub',
                    sub: 'code-orange-dev',
                    href: SOCIAL.github,
                    cta: 'Star',
                    color: '#FFFFFF',
                  },
                ].map(({ icon: Icon, label, sub, href, cta, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-[#111] border border-[#222] hover:border-orange-DEFAULT/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: color + '20' }}>
                        <Icon className="w-4 h-4" style={{ color }} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{label}</p>
                        <p className="text-text-muted text-xs">{sub}</p>
                      </div>
                    </div>
                    <span className="text-orange-DEFAULT text-xs font-semibold group-hover:text-orange-light transition-colors flex items-center gap-1">
                      {cta} <ChevronRight className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>

              <Link href={SOCIAL.geyser} target="_blank" rel="noopener noreferrer" className="card p-5 border-orange-DEFAULT/20 hover:border-orange-DEFAULT/50 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-muted flex items-center justify-center text-xl">⚡</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Support on Geyser</p>
                    <p className="text-text-muted text-xs">Crowdfund the school with sats</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-orange-DEFAULT ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT YOU'LL LEARN SECTION
      ============================================================ */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">
              <Code2 className="w-3 h-3" />
              Curriculum
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
              What you&apos;ll build & learn
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Real skills you can deploy the same day. No theory without practice.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: '⛏️', title: 'Bitcoin Mining', desc: 'BitAxe, Braiins, ASIC setup' },
              { icon: '🛡️', title: 'Multisig Security', desc: 'Nunchuk, Casa, Coldcard' },
              { icon: '📡', title: 'Node Running', desc: 'Umbrel, full node setup' },
              { icon: '🔐', title: 'Privacy Tools', desc: 'Ecash, Fedimint, Tor' },
              { icon: '⚡', title: 'Lightning Network', desc: 'Channels, routing, LNbits' },
              { icon: '🌐', title: 'Nostr Protocol', desc: 'Build censorship-free apps' },
              { icon: '💻', title: 'Bitcoin Dev', desc: 'Scripts, Taproot, PSBTs' },
              { icon: '🔑', title: 'Inheritance Planning', desc: 'Multisig + key distribution' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card p-5 text-center">
                <div className="text-3xl mb-3">{icon}</div>
                <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                <p className="text-text-muted text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="relative rounded-2xl bg-[#111] border border-[#222] p-12 text-center overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-orange-DEFAULT/20 blur-[60px] rounded-full" />
            <div className="relative z-10">
              <div className="badge badge-orange mx-auto mb-6">
                <Shield className="w-3 h-3" />
                Bitcoin Only. No Shitcoins.
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
                Ready to become a{' '}
                <span className="text-gradient-orange">Bitcoin builder?</span>
              </h2>
              <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
                Join the next cohort, drop into a workshop, or just come say hello in Discord. The community is free and always open.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href={SOCIAL.discord} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                  <MessageCircle className="w-5 h-5" />
                  Join Discord, It&apos;s Free
                </Link>
                <Link href="/apply" className="btn-secondary text-base px-8 py-4">
                  Apply to a Program
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
