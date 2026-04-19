import Link from 'next/link'
import Image from 'next/image'
import {
  Github,
  Twitter,
  Instagram,
  Zap,
  MessageCircle,
  MapPin,
  Mail,
  ArrowRight,
} from 'lucide-react'
import { SITE, SOCIAL, PROGRAMS } from '@/lib/constants'
import ScheduleDropdown from './ScheduleDropdown'

const socialLinks = [
  { icon: Twitter,        href: SOCIAL.twitter,   label: 'X (Twitter)' },
  { icon: Instagram,      href: SOCIAL.instagram, label: 'Instagram' },
  { icon: Github,         href: SOCIAL.github,    label: 'GitHub' },
  { icon: MessageCircle,  href: SOCIAL.discord,   label: 'Discord' },
]

const schoolLinks = [
  { label: 'About the School',    href: '/about' },
  { label: 'Community',           href: '/community' },
  { label: 'Apply to a Program',  href: '/apply' },
  { label: 'Support on Geyser ⚡', href: SOCIAL.geyser, external: true },
]

export default function Footer() {
  return (
    <footer>
      {/* ── Pre-footer CTA ─────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-[#0d0d0d] border-t border-orange-DEFAULT/20">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-orange-DEFAULT/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="container-custom relative z-10 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-orange-DEFAULT animate-pulse" />
                <span className="text-orange-DEFAULT text-sm font-mono tracking-wider uppercase">
                  Sessions running every week
                </span>
              </div>
              <h3
                className="text-3xl md:text-4xl font-extrabold text-white mb-2"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Never miss a Bitcoin session.
              </h3>
              <p className="text-text-muted text-base max-w-md">
                Join Discord for live workshops, study cohorts and meet fellow bitcoiners to discuss current opportunities in Bitcoin Open Source Software.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={SOCIAL.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-6 py-3"
              >
                <MessageCircle className="w-4 h-4" />
                Join Discord
              </a>
              <Link href="/apply" className="btn-secondary text-sm px-6 py-3">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ───────────────────────────────────── */}
      <div className="bg-[#050505] border-t border-[#111]">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

            {/* Brand — 4 cols */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Code Orange Dev School"
                  width={200}
                  height={70}
                  className="h-20 w-auto object-contain"
                />
              </Link>

              {/* Location */}
              <a
                href="https://share.google/O9MpHcSlHLHPdLhCn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 mb-4 group"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-muted flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-DEFAULT/20 transition-colors">
                  <MapPin className="w-4 h-4 text-orange-DEFAULT" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-orange-DEFAULT transition-colors">
                    Code Orange Dev School
                  </p>
                  <p className="text-text-muted text-xs">Canggu, Bali, Indonesia 🇮🇩</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 mb-4 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:bg-orange-DEFAULT/10 transition-colors">
                  <Mail className="w-4 h-4 text-text-muted group-hover:text-orange-DEFAULT transition-colors" />
                </div>
                <p className="text-text-muted text-sm group-hover:text-white transition-colors">
                  {SITE.email}
                </p>
              </a>

              {/* Nostr */}
              <a
                href={`https://njump.me/${SOCIAL.nostr.npub}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-8 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:bg-orange-DEFAULT/10 transition-colors">
                  <Zap className="w-4 h-4 text-text-muted group-hover:text-orange-DEFAULT transition-colors" />
                </div>
                <p className="text-text-dim text-xs font-mono group-hover:text-orange-DEFAULT/70 transition-colors">
                  {SOCIAL.nostr.npub.slice(0, 26)}…
                </p>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#111] border border-[#222] text-text-muted hover:text-orange-DEFAULT hover:border-orange-DEFAULT/40 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Programs — 3 cols */}
            <div className="lg:col-span-3">
              <h4 className="text-white text-xs font-bold mb-6 tracking-widest uppercase flex items-center gap-2">
                <span className="w-1 h-4 bg-orange-DEFAULT rounded-full" />
                Programs
              </h4>
              <ul className="space-y-3">
                {PROGRAMS.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/programs/${p.slug}`}
                      className="text-text-muted hover:text-white transition-colors text-sm flex items-start gap-2 group"
                    >
                      <span className="text-orange-DEFAULT/30 group-hover:text-orange-DEFAULT transition-colors mt-0.5 shrink-0">›</span>
                      <span>
                        <span>{p.name}</span>
                        <span className="text-text-dim text-xs ml-1">{p.subtitle}</span>
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link
                    href="/programs"
                    className="text-orange-DEFAULT text-sm font-semibold hover:text-orange-light transition-colors flex items-center gap-1"
                  >
                    View all programs <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* School — 2 cols */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-xs font-bold mb-6 tracking-widest uppercase flex items-center gap-2">
                <span className="w-1 h-4 bg-orange-DEFAULT rounded-full" />
                School
              </h4>
              <ul className="space-y-3">
                {schoolLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="text-text-muted hover:text-white transition-colors text-sm flex items-start gap-2 group"
                    >
                      <span className="text-orange-DEFAULT/30 group-hover:text-orange-DEFAULT transition-colors mt-0.5 shrink-0">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule — 3 cols (interactive dropdown) */}
            <div className="lg:col-span-3">
              <ScheduleDropdown />
            </div>

          </div>
        </div>
      </div>

      {/* ── Bitcoin ethos strip ────────────────────────────────── */}
      <div className="bg-[#030303] border-t border-[#0f0f0f]">
        <div className="container-custom py-3">
          <div className="flex items-center justify-center gap-4 md:gap-8 overflow-x-auto scrollbar-hide">
            {[
              '₿ Bitcoin Only',
              '🔑 Self Custody',
              '🌿 Open Source',
              '🛡️ No KYC',
              '⚡ Lightning Native',
              '🌴 Bali, Indonesia',
              '🦞 Nostr Native',
            ].map((item) => (
              <span key={item} className="text-text-dim text-xs font-mono whitespace-nowrap shrink-0">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────── */}
      <div className="bg-[#020202] border-t border-[#0a0a0a]">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-text-dim text-xs">
              © {new Date().getFullYear()} Code Orange Dev School · Built with ⚡ in Bali, Indonesia
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-DEFAULT animate-pulse" />
              <span className="text-orange-DEFAULT/60 font-mono text-xs">Sessions live every week</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
