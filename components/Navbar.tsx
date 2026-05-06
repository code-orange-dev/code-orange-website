'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap } from 'lucide-react'
import { SOCIAL } from '@/lib/constants'

const navLinks = [
  { href: '/programs',    label: 'Programs' },
  { href: '/fellowships', label: 'Fellowships' },
  { href: '/calendar',    label: 'Calendar' },
  { href: '/community',   label: 'Community' },
  { href: '/about',       label: 'About' },
]

// Total fixed header height: announcement bar (~38px) + nav (72px) ≈ 110px
// Pages use pt-[110px] or pt-28 (112px)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const diff = currentY - lastScrollY.current

      setScrolled(currentY > 20)

      // Scroll progress (0–100) — used for the orange progress bar
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (currentY / docHeight) * 100 : 0)

      // Always show when near the top
      if (currentY < 80) {
        setHidden(false)
      } else if (diff > 6) {
        // Scrolling down — hide and close mobile menu
        setHidden(true)
        setMobileOpen(false)
      } else if (diff < -4) {
        // Scrolling up — reveal
        setHidden(false)
      }

      lastScrollY.current = currentY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* Scroll progress bar — sits above the nav, always visible */}
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none"
      >
        <div
          className="h-full bg-orange-DEFAULT transition-[width] duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Fixed wrapper — slides up/down with translate.
          paddingTop respects the iOS Dynamic Island / notch via env(safe-area-inset-top).
          Background-tinted backdrop for the safe area is provided by the announcement bar below
          (it has bg-orange-DEFAULT, so the orange visually extends behind the island). */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)', backgroundColor: '#F7931A' }}
      >
        {/* Announcement bar */}
        {/* Mobile: single tight line — no wrapping. Desktop: rich version. */}
        <div className="bg-orange-DEFAULT text-black">
          {/* Mobile-only — short, single-line, links to programs page */}
          <Link
            href="/programs/rawbit"
            className="md:hidden flex items-center justify-center gap-1.5 py-2 px-4 text-xs font-bold tracking-wide whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            rawBit starts <strong>May 11</strong>
            <span className="opacity-60">·</span>
            <span className="underline underline-offset-2">Apply →</span>
          </Link>

          {/* Desktop — rich version with multiple links */}
          <div className="hidden md:flex py-2 px-4 text-center text-sm font-bold tracking-wide items-center justify-center gap-2">
            <span>rawBit starts <strong>May 11</strong> · Bitcoin Privacy Track now open</span>
            <span className="text-black/40">·</span>
            <Link href="/programs/rawbit"        className="underline underline-offset-2 hover:opacity-70 whitespace-nowrap">rawBit →</Link>
            <Link href="/programs/privacy-track" className="underline underline-offset-2 hover:opacity-70 whitespace-nowrap">Privacy Track →</Link>
          </div>
        </div>

        {/* Nav bar */}
        <nav className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1a1a1a]'
            : 'bg-[#0A0A0A]/90 backdrop-blur-sm'
        }`}>
          <div className="container-custom">
            <div className="flex items-center justify-between h-14 md:h-[72px]">

              {/* Logo — mobile (compact) */}
              <Link href="/" className="md:hidden flex items-center" aria-label="Code Orange — home">
                <Image
                  src="/images/logo.png"
                  alt="Code Orange Dev School"
                  width={160}
                  height={56}
                  className="h-11 w-auto object-contain"
                  priority
                />
              </Link>

              {/* Logo — desktop */}
              <Link href="/" className="hidden md:flex items-center" aria-label="Code Orange — home">
                <Image
                  src="/images/logo.png"
                  alt="Code Orange Dev School"
                  width={240}
                  height={84}
                  className="h-[68px] w-auto object-contain"
                  priority
                />
              </Link>

              {/* Desktop nav links */}
              <div className="hidden md:flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-orange-DEFAULT bg-orange-muted'
                        : 'text-text-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Desktop CTAs */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href={SOCIAL.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-white transition-colors font-medium"
                >
                  Discord
                </Link>
                <Link href="/apply" className="btn-primary text-sm py-2 px-4">
                  <Zap className="w-4 h-4" />
                  Apply Now
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-text-muted hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu — offset below full fixed header (~88px) PLUS iOS safe-area-inset-top */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute left-0 right-0 bg-[#111111] border-b border-[#222222] p-6"
            style={{ top: 'calc(88px + env(safe-area-inset-top, 0px))' }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-orange-DEFAULT bg-orange-muted'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[#222222] flex flex-col gap-3">
                <Link
                  href={SOCIAL.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center justify-center"
                >
                  Join Discord
                </Link>
                <Link href="/apply" className="btn-primary text-center justify-center">
                  <Zap className="w-4 h-4" />
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
