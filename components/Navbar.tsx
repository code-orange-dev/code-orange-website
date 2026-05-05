'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap } from 'lucide-react'
import { SOCIAL } from '@/lib/constants'

const navLinks = [
  { href: '/programs', label: 'Programs' },
  { href: '/fellowships', label: 'Fellowships' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/community', label: 'Community' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1a1a1a]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo — hidden on mobile, shown on desktop */}
            <Link href="/" className="hidden md:flex items-center">
              <Image
                src="/images/logo.png"
                alt="Code Orange Dev School"
                width={210}
                height={72}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
              <Link
                href="/apply"
                className="btn-primary text-sm py-2 px-4"
              >
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-[#111111] border-b border-[#222222] p-6">
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
                <Link
                  href="/apply"
                  className="btn-primary text-center justify-center"
                >
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
