'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Zap } from 'lucide-react'

/**
 * Mobile-only floating Apply pill.
 * Appears after the user scrolls 60% past the hero so it doesn't compete
 * with the hero's primary CTAs. Hidden on the /apply page itself
 * (would be redundant) and on md+ screens (desktop has it in the navbar).
 */
export default function MobileApplyCTA() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      // ~60% of viewport height triggers reveal
      setVisible(window.scrollY > window.innerHeight * 0.6)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Don't show on /apply (already there) or on the application form pages
  if (pathname?.startsWith('/apply')) return null

  return (
    <Link
      href="/apply"
      aria-label="Apply to a Code Orange program"
      className={`md:hidden fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full
                  bg-orange-DEFAULT text-black font-bold text-sm px-5 py-3 shadow-lg shadow-orange-DEFAULT/30
                  transition-all duration-300 ease-out
                  ${visible
                    ? 'translate-y-0 opacity-100 pointer-events-auto'
                    : 'translate-y-16 opacity-0 pointer-events-none'}`}
    >
      <Zap className="w-4 h-4" />
      Apply
    </Link>
  )
}
