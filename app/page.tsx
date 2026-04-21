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
import NostrDropdown from '@/components/NostrDropdown'
import TwitterFeed from '@/components/TwitterFeed'
import DevCommunity from '@/components/DevCommunity'

const GALLERY_PHOTOS = [
  { src: '/images/gallery/photo-1.jpg', alt: 'Code Orange community session' },
  { src: '/images/gallery/photo-2.jpg', alt: 'Hands-on Bitcoin hardware workshop' },
  { src: '/images/gallery/photo-3.jpg', alt: 'SeedHammer & hardware wallets' },
  { src: '/images/gallery/photo-4.jpg', alt: 'ASIC mining workshop' },
  { src: '/images/gallery/photo-5.jpg', alt: 'rawBit study cohort session' },
  { src: '/images/gallery/photo-6.jpg', alt: 'Penlock seed backup workshop' },
  { src: '/images/gallery/photo-7.jpg', alt: 'Sovereign Bitcoiner group session' },
]

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
    desc: 'Full technical sovereignty in 5 weeks. Cover full nodes, multisig security with Coldcard and SeedSigner, inheritance planning, Ecash, and Fedimint. Hosted by Razor — one of the sharpest technical educators in the Bitcoin space.',
    schedule: 'Every 2nd Wednesday',
    time: '11:00 UTC',
    format: 'Online',
    platform: 'Discord',
    host: 'Razor',
    level: 'Intermediate',
    href: '/programs/sovereign-bitcoiner',
    poster: '/images/gallery/workshops/sovereign-bitcoiner.jpg',
  },
  {
    name: 'OpenClaw Workshop',
    desc: 'Build real open source Bitcoin tools alongside working developers. Learn the GitHub contribution workflow, dive into Bitcoin libraries, and ship your first meaningful PR to the ecosystem — guided step by step.',
    schedule: 'Every 3rd Wednesday',
    time: '12:00 UTC',
    format: 'Online',
    platform: 'Discord',
    host: 'Code Orange',
    level: 'All levels',
    href: '/programs/openclaw',
    poster: '/images/gallery/workshops/openclaw-bitcoiners.jpg',
  },
  {
    name: 'Bitcoin Privacy with Fedi',
    desc: 'Practical privacy for everyday Bitcoiners. Learn how Fedimint\'s federated mints work, how to transact without a trace, and how to stack and spend privately. Hosted by The Quiet Satoshi — no jargon, just clarity.',
    schedule: 'Every 1st Thursday',
    time: '11:00 UTC',
    format: 'Online',
    platform: 'Discord',
    host: 'The Quiet Satoshi',
    level: 'Beginner',
    href: '/programs/bitcoin-basics',
    poster: '/images/gallery/workshops/bitcoin-privacy.jpg',
  },
  {
    name: 'Bitcoin Reading Club',
    desc: 'The best Bitcoin education doesn\'t come from Twitter threads — it comes from books. Monthly deep-reads of the essential Bitcoin canon. Currently working through the classics. Bring your highlights and your opinions.',
    schedule: 'Every 4th Wednesday',
    time: '12:00 UTC',
    format: 'Online',
    platform: 'Discord',
    host: 'Alex',
    level: 'All levels',
    href: '/programs/bitcoin-reading-club',
    poster: '/images/gallery/workshops/reading-club.jpg',
  },
  {
    name: 'Bitcoin Basics',
    desc: 'Where every serious Bitcoiner starts. We go beyond just buying — you\'ll do live on-chain transactions, analyze the mempool, understand how keys and wallets actually work, and walk away with homework that earns sats.',
    schedule: 'Every 1st Thursday',
    time: '11:00 UTC',
    format: 'Online',
    platform: 'Discord',
    host: 'The Quiet Satoshi',
    level: 'Beginner',
    href: '/programs/bitcoin-basics',
    poster: '/images/gallery/workshops/bitcoin-basics.jpg',
  },
  {
    name: 'Talk-a-Bit Meetup',
    desc: 'A free-flowing online meetup where Bitcoiners across Southeast Asia connect, debate, and share. No agenda, no slides — just real conversation about what\'s happening in Bitcoin. Hosted in Bahasa and English by einsamwolf28.',
    schedule: 'Every 15th of the month',
    time: '19:00 WIB',
    format: 'Online',
    platform: 'Discord',
    host: 'einsamwolf28',
    level: 'All levels',
    href: '/programs/talk-a-bit',
    poster: '/images/gallery/workshops/talk-a-bit.jpg',
  },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ============================================================
          ANNOUNCEMENT BAR
      ============================================================ */}
      <div className="bg-orange-DEFAULT text-black py-2.5 px-4 text-center text-sm font-bold tracking-wide flex items-center justify-center gap-2 flex-wrap">
        <span className="animate-pulse">🔥</span>
        <span>rawBit Study Cohort — next cohort starts <strong>May 11, 2026</strong></span>
        <Link href="/programs/rawbit" className="underline underline-offset-2 hover:opacity-70 whitespace-nowrap">
          Apply now →
        </Link>
      </div>

      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="relative min-h-screen flex flex-col justify-center bg-grid overflow-hidden">
        {/* Orange glow in background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-DEFAULT/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/0 to-bg pointer-events-none" />

        <div className="container-custom relative z-10 pt-36 md:pt-44 pb-16">
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
                className="w-[300px] sm:w-[420px] md:w-[560px] h-auto object-contain drop-shadow-[0_0_60px_rgba(247,147,26,0.18)]"
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
                  <span className="text-orange-DEFAULT font-semibold">Bitcoin only. No fluff.</span> Just deep, practical Bitcoin education for people who want to strengthen the network.
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
                    <h4 className="text-white font-semibold text-sm group-hover:text-orange-DEFAULT transition-colors leading-tight mb-1">
                      {event.name}
                    </h4>
                    {'desc' in event && event.desc && (
                      <p className="text-text-muted text-xs leading-relaxed line-clamp-3">{event.desc}</p>
                    )}
                  </div>
                  <div className="space-y-1.5 text-xs text-text-muted mt-auto">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-orange-DEFAULT shrink-0" />
                      <span>{event.schedule} · {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-orange-DEFAULT shrink-0" />
                      <span>{event.platform} · by {event.host}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#1a1a1a]">
                    <span className="badge badge-white text-xs">{event.level}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          GALLERY SECTION
      ============================================================ */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="badge badge-orange mx-auto mb-4">
              <Users className="w-3 h-3" />
              In the field
            </div>
            <h2 className="text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-nunito)' }}>
              Real sessions. Real hardware.
            </h2>
            <p className="text-text-muted mt-3 max-w-lg mx-auto">
              From ASIC miners on the floor to SeedHammer engravings — this is what Bitcoin education looks like.
            </p>
          </div>

          {/* 7-photo grid: 2 tall on left + 2×2 right + wide bottom */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
            {/* photo-1: tall, spans 2 rows */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-[#1a1a1a] group row-span-2">
              <Image src={GALLERY_PHOTOS[0].src} alt={GALLERY_PHOTOS[0].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* photo-2 */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-[#1a1a1a] group">
              <Image src={GALLERY_PHOTOS[1].src} alt={GALLERY_PHOTOS[1].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* photo-3: tall on right, spans 2 rows */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-[#1a1a1a] group row-span-2">
              <Image src={GALLERY_PHOTOS[2].src} alt={GALLERY_PHOTOS[2].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* photo-4 */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-[#1a1a1a] group">
              <Image src={GALLERY_PHOTOS[3].src} alt={GALLERY_PHOTOS[3].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* photo-5: wide, spans 2 cols */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-[#1a1a1a] group col-span-2 md:col-span-2">
              <Image src={GALLERY_PHOTOS[4].src} alt={GALLERY_PHOTOS[4].alt} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* photo-6 */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-[#1a1a1a] group">
              <Image src={GALLERY_PHOTOS[5].src} alt={GALLERY_PHOTOS[5].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* photo-7 */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-[#1a1a1a] group col-span-2">
              <Image src={GALLERY_PHOTOS[6].src} alt={GALLERY_PHOTOS[6].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BITCOIN DOJO — PAST COHORT SHOWCASE
      ============================================================ */}
      <section className="section">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">
              <Shield className="w-3 h-3" />
              Proof it works
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
              Bitcoin Dojo Cohort{' '}
              <span className="text-gradient-orange">— 21 graduates</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              In partnership with Chaincode Labs BOSS Challenge, we ran an 8-week protocol deep-dive.
              49 enrolled. 21 finished with a clear plan to contribute to Bitcoin open source.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Stats column */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '49', label: 'Enrolled', icon: '👥' },
                { value: '21', label: 'Graduated', icon: '🎓' },
                { value: '8', label: 'Weeks', icon: '📅' },
                { value: '100%', label: 'Bitcoin Only', icon: '₿' },
              ].map(({ value, label, icon }) => (
                <div key={label} className="card p-6 text-center">
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="text-4xl font-extrabold text-orange-DEFAULT mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>{value}</div>
                  <div className="text-text-muted text-sm">{label}</div>
                </div>
              ))}

              {/* Partner badge */}
              <div className="col-span-2 card p-4 border-orange-DEFAULT/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-muted flex items-center justify-center text-xl shrink-0">🔗</div>
                <div>
                  <p className="text-white text-sm font-semibold">Part of Chaincode Labs BOSS Challenge</p>
                  <p className="text-text-muted text-xs">Preparing devs to contribute to Bitcoin open source</p>
                </div>
              </div>
            </div>

            {/* Curriculum column */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-orange-DEFAULT rounded-full" />
                What we covered
              </h3>
              <div className="space-y-2">
                {[
                  { week: 'Wk 1–2', topic: 'Finite fields, elliptic curves, secp256k1' },
                  { week: 'Wk 3',   topic: 'ECDSA: signing, verification, the discrete log problem' },
                  { week: 'Wk 4',   topic: 'Bitcoin addresses, SHA256, RIPEMD160, HD wallets' },
                  { week: 'Wk 5',   topic: 'Transactions, UTXO set, sighash flags, timelocks' },
                  { week: 'Wk 6',   topic: 'Bitcoin Script, P2PKH, P2SH, P2WPKH, P2TR' },
                  { week: 'Wk 7',   topic: 'P2P network, mempool propagation, compact blocks' },
                  { week: 'Wk 8',   topic: 'Mining, difficulty adjustment, Stratum V2, Taproot' },
                ].map(({ week, topic }) => (
                  <div key={week} className="flex items-start gap-3 p-3 rounded-xl bg-[#0e0e0e] border border-[#1a1a1a]">
                    <span className="text-orange-DEFAULT font-mono text-xs shrink-0 pt-0.5 w-12">{week}</span>
                    <span className="text-text-muted text-sm">{topic}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-orange-muted border border-orange-DEFAULT/20">
                <p className="text-orange-DEFAULT text-sm font-semibold mb-1">What graduates did next</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  Contributing to Good First Issues · Joining rawBit cohort · Applying for grants · Building open source projects · Attending hackathons
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DEVELOPER COMMUNITY
      ============================================================ */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="badge badge-orange mx-auto mb-4">
              <Code2 className="w-3 h-3" />
              Developer Community
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
              We build the community.{' '}
              <span className="text-gradient-orange">They build Bitcoin.</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Code Orange supports a global network of Bitcoin developers. We provide mentorship, structured cohorts, and a peer community. Their GitHub work is their own — we champion it.
            </p>
          </div>
          <DevCommunity />
        </div>
      </section>

      {/* ============================================================
          ECOSYSTEM PARTNERS + STUDENT PIPELINE
      ============================================================ */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="badge badge-orange mx-auto mb-4">
              <Globe className="w-3 h-3" />
              Ecosystem
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-3" style={{ fontFamily: 'var(--font-nunito)' }}>
              Where our graduates go
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Code Orange is a pipeline into the broader Bitcoin developer ecosystem. Graduates don't just finish a cohort — they plug into a global network.
            </p>
          </div>

          {/* Pipeline steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: '₿',
                org: 'rawBit Study Cohort',
                desc: 'Our flagship 10-week protocol cohort. Deep dive into Transactions, Scripts, Taproot, and PSBTs. Next cohort: May 11, 2026.',
                href: '/programs/rawbit',
                cta: 'Apply now',
                highlight: true,
              },
              {
                icon: '🔗',
                org: 'Chaincode Labs',
                desc: 'Apply to the BOSS Challenge or Chaincode Seminars — our cohort graduates are prepared and have priority support.',
                href: 'https://learning.chaincode.com',
                cta: 'Learn more',
              },
              {
                icon: '🎓',
                org: 'Bitshala',
                desc: 'Join a Bitshala study cohort focused on Bitcoin protocol development. Strong overlap with our curriculum.',
                href: 'https://bitshala.org',
                cta: 'Learn more',
              },
              {
                icon: '🛠️',
                org: 'Good First Issues',
                desc: 'Start contributing to real Bitcoin open source projects. We help you find your first PR on Bitcoin Core and surrounding ecosystem.',
                href: 'https://bitcoindevs.xyz/good-first-issues',
                cta: 'Find issues',
              },
              {
                icon: '🎯',
                org: 'AIR Accountability Sessions',
                desc: 'Stay on track after graduation. Weekly sessions using the AIR framework — Actions, Intentions, Reflections.',
                href: '/programs/accountability-sessions',
                cta: 'Join sessions',
              },
              {
                icon: '📖',
                org: 'Bitcoin Reading Club',
                desc: 'Keep learning between cohorts. Monthly deep-reads of the best Bitcoin books and papers, hosted by Alex.',
                href: '/programs/bitcoin-reading-club',
                cta: 'Join club',
              },
            ].map(({ icon, org, desc, href, cta, highlight }) => (
              <a
                key={org}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`card p-5 flex flex-col gap-3 group hover:border-orange-DEFAULT/40 transition-all ${highlight ? 'border-orange-DEFAULT/30 bg-orange-muted/10' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-lg shrink-0">{icon}</div>
                  <p className={`font-semibold text-sm ${highlight ? 'text-orange-DEFAULT' : 'text-white'} group-hover:text-orange-DEFAULT transition-colors`}>{org}</p>
                </div>
                <p className="text-text-muted text-xs leading-relaxed flex-1">{desc}</p>
                <span className="text-orange-DEFAULT text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  {cta} <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>

          {/* Open-source slides callout */}
          <div className="rounded-2xl bg-[#0e0e0e] border border-[#222] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-orange-muted flex items-center justify-center text-2xl shrink-0">📐</div>
            <div className="flex-1">
              <p className="text-white font-bold text-base mb-1">Our curriculum is open source</p>
              <p className="text-text-muted text-sm leading-relaxed">
                All Code Orange workshop slides are free for any community leader to use — run your own Bitcoin workshop in your city.
                Built on Canva, downloadable and editable.
              </p>
            </div>
            <a
              href="https://x.com/CodeOrangeDevs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0 text-sm"
            >
              Get the slides <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRAIN-THE-TRAINER + REGIONAL REACH
      ============================================================ */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Train-the-Trainer */}
            <div>
              <div className="badge badge-orange mb-4">
                <Users className="w-3 h-3" />
                Train-the-Trainer
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-nunito)' }}>
                We train community leaders<br />
                <span className="text-gradient-orange">to run their own workshops.</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Code Orange doesn&apos;t just teach students — we headhunt and empower technical leaders at Bitcoin hubs across Asia to replicate our workshops in their own cities. Monthly train-the-trainer sessions ensure consistent quality.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { icon: '🚀', text: 'Build a constant pipeline of new devs going full time into Bitcoin open source' },
                  { icon: '🛠️', text: 'Goal: 2 quality PRs per week from our community members at Good First Issue' },
                  { icon: '🎓', text: 'Study cohorts and workshops to train community leaders in advanced self-custody, full nodes, mining, privacy, and payments' },
                  { icon: '🎯', text: 'Goal: 15 gig economy jobs created through the train-the-trainer program focused on technical monthly workshops by 2026' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3 p-3 rounded-xl bg-[#0e0e0e] border border-[#1a1a1a]">
                    <span className="text-lg shrink-0">{icon}</span>
                    <p className="text-text-muted text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <Link href={SOCIAL.discord} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm inline-flex">
                <MessageCircle className="w-4 h-4" />
                Become a community leader
              </Link>
            </div>

            {/* Regional reach */}
            <div>
              <div className="badge badge-orange mb-4">
                <Globe className="w-3 h-3" />
                Regional Reach
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-nunito)' }}>
                Southeast Asia<br />
                <span className="text-gradient-orange">is our backyard.</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Based in Bali, active across the region. We partner with Bitcoin community hubs, learning centers, and houses to bring technical education where it&apos;s needed most.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { flag: '🇮🇩', country: 'Indonesia', city: 'Bali, Jakarta' },
                  { flag: '🇲🇾', country: 'Malaysia', city: 'Kuala Lumpur' },
                  { flag: '🇹🇭', country: 'Thailand', city: 'Bangkok, Chiang Mai' },
                  { flag: '🇻🇳', country: 'Vietnam', city: 'Ho Chi Minh City' },
                  { flag: '🌐', country: 'Online', city: 'Discord — global' },
                  { flag: '🇵🇭', country: 'Philippines', city: 'Growing' },
                ].map(({ flag, country, city }) => (
                  <div key={country} className="card p-4 flex items-center gap-3">
                    <span className="text-2xl">{flag}</span>
                    <div>
                      <p className="text-white text-sm font-semibold">{country}</p>
                      <p className="text-text-dim text-xs">{city}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-orange-muted border border-orange-DEFAULT/20">
                <p className="text-orange-DEFAULT text-xs font-mono font-semibold mb-1">Languages we teach in</p>
                <p className="text-white text-sm">🇬🇧 English · 🇮🇩 Bahasa · 🇲🇾 Malay · 🇹🇭 Thai · 🇻🇳 Vietnamese · 🇨🇳 Mandarin</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          VISION & GOALS
      ============================================================ */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-orange mx-auto mb-4">
              <Zap className="w-3 h-3" />
              The Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
              Specific goals.{' '}
              <span className="text-gradient-orange">Real deadlines.</span>
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              We don&apos;t talk about impact in vague terms. Here&apos;s exactly what we&apos;re building toward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {/* Card 1: PRs/wk */}
            <div className="card p-6 flex flex-col gap-4">
              <div className="text-3xl">🛠️</div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-orange-DEFAULT" style={{ fontFamily: 'var(--font-nunito)' }}>2</span>
                  <span className="text-orange-DEFAULT/60 text-sm font-mono">PRs/wk</span>
                </div>
                <p className="text-white text-sm font-semibold mt-1">GitHub pull requests to Bitcoin open source</p>
                <p className="text-text-dim text-xs font-mono mt-1">from end of 2026</p>
              </div>
            </div>

            {/* Card 2: Study cohorts pipeline */}
            <div className="card p-6 flex flex-col gap-3 border-orange-DEFAULT/20">
              <div className="text-3xl">🎓</div>
              <div>
                <p className="text-white text-sm font-semibold mb-2">Advanced Bitcoin developer training via</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    { name: 'rawBit', href: 'https://rawbit.io/' },
                    { name: 'Bitcoin Dojo', href: 'https://bitcoindojo.dev/' },
                    { name: 'Decoding Bitcoin', href: 'https://bitcoindevs.xyz/decoding' },
                  ].map(({ name, href }) => (
                    <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-orange-DEFAULT text-sm font-semibold hover:text-orange-light transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-DEFAULT shrink-0" />
                      {name} <ArrowRight className="w-3 h-3 ml-auto opacity-50" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Grant pipeline */}
            <div className="card p-6 flex flex-col gap-3">
              <div className="text-3xl">🚀</div>
              <div>
                <p className="text-white text-sm font-semibold mb-2">Constant developer pipeline into</p>
                <div className="flex flex-wrap gap-2">
                  {['OpenSats', 'HRF', 'Vinteum', 'Brink', 'Spiral'].map((org) => (
                    <span key={org} className="px-2.5 py-1 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-text-muted text-xs font-medium">{org}</span>
                  ))}
                  <span className="px-2.5 py-1 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-text-dim text-xs">+ more</span>
                </div>
                <p className="text-text-muted text-xs mt-2 leading-relaxed">Grants, fellowships, and full-time roles in Bitcoin open source</p>
              </div>
            </div>

            {/* Card 4: Jobs */}
            <div className="card p-6 flex flex-col gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-orange-DEFAULT" style={{ fontFamily: 'var(--font-nunito)' }}>15</span>
                  <span className="text-orange-DEFAULT/60 text-sm font-mono">jobs</span>
                </div>
                <p className="text-white text-sm font-semibold mt-1">Gig economy jobs via Train-the-Trainer</p>
                <p className="text-text-dim text-xs font-mono mt-1">by 2026</p>
              </div>
            </div>
          </div>

          {/* Ecosystem strip */}
          <div>
            <p className="text-text-dim text-xs font-mono uppercase tracking-widest text-center mb-6">Training resources & ecosystem partners</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { name: 'Chaincode Labs', href: 'https://learning.chaincode.com' },
                { name: 'base58⛓️', href: 'https://base58.info' },
                { name: '₿Trust / Qala', href: 'https://btrust.tech' },
                { name: 'Vinteum', href: 'https://vinteum.org' },
                { name: 'rawBit.io', href: 'https://rawbit.io' },
                { name: 'Summer of Bitcoin', href: 'https://www.summerofbitcoin.org' },
                { name: 'Bitcoin Dojo', href: 'https://bitcoindojo.dev' },
                { name: 'Bitshala', href: 'https://bitshala.org' },
                { name: 'Bitcoin_Devs', href: 'https://bitcoindevs.xyz' },
              ].map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#111] border border-[#222] text-text-muted hover:text-white hover:border-orange-DEFAULT/40 transition-all text-sm font-medium"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          LATEST UPDATES — TWITTER FEED
      ============================================================ */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="badge badge-orange mb-4">
                <Zap className="w-3 h-3" />
                Latest Updates
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
                What&apos;s happening{' '}
                <span className="text-gradient-orange">right now.</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Weekly cohort recaps, workshop announcements, and Bitcoin builder updates — straight from our X feed. Follow along to stay in the loop.
              </p>
              <div className="space-y-3">
                {[
                  { icon: '📡', text: 'Weekly cohort progress updates' },
                  { icon: '🛠️', text: 'Open source contributions from our devs' },
                  { icon: '🌏', text: 'Workshop announcements across Asia' },
                  { icon: '⚡', text: 'Bitcoin builder community highlights' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-text-muted text-sm">
                    <span className="text-base shrink-0">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <a
                href={SOCIAL.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 btn-secondary inline-flex text-sm"
              >
                <Twitter className="w-4 h-4" />
                Follow @CodeOrangeDevs
              </a>
            </div>
            <div>
              <TwitterFeed />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          NOSTR FEED + COMMUNITY SECTION
      ============================================================ */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Nostr Feed — collapsible */}
            <div>
              <div className="badge badge-orange mb-4">
                <Zap className="w-3 h-3" />
                Nostr
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-2" style={{ fontFamily: 'var(--font-nunito)' }}>
                Follow us on Nostr
              </h2>
              <p className="text-text-muted text-sm mb-6">
                Uncensorable. Decentralized. The way it should be.
              </p>
              <NostrDropdown />
              <a
                href={`https://njump.me/${SOCIAL.nostr.npub}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-orange-DEFAULT text-sm font-semibold hover:text-orange-light transition-colors"
              >
                <Zap className="w-3.5 h-3.5" />
                View full Nostr profile
              </a>

              {/* Bitcoin Keys partner link */}
              <a
                href="https://bitcoin-keys.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-[#111] border border-[#222] hover:border-orange-DEFAULT/40 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-muted flex items-center justify-center shrink-0">
                  <span className="text-orange-DEFAULT text-base">🔑</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold group-hover:text-orange-DEFAULT transition-colors">
                    Bitcoin Keys
                  </p>
                  <p className="text-text-muted text-xs">Bitcoin consultancy, private keys &amp; node running</p>
                </div>
                <ChevronRight className="w-4 h-4 text-orange-DEFAULT/50 group-hover:text-orange-DEFAULT group-hover:translate-x-1 transition-all shrink-0" />
              </a>
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
                Bitcoin Only.
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
