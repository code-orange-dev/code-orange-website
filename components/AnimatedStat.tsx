'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  value: string   // e.g. "50+" or "5+" or "8+"
  label: string
  className?: string
}

/**
 * Counts up from 0 to the numeric part of `value` when it scrolls into view.
 * The suffix ("+", "x", etc.) is preserved. Animates once per page load.
 */
export default function AnimatedStat({ value, label, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState<string>(value)
  const animatedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Parse numeric prefix and suffix (e.g. "50+" → num=50, suffix="+")
    const match = value.match(/^(\d+)(.*)$/)
    if (!match) return
    const target = parseInt(match[1], 10)
    const suffix = match[2] ?? ''

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return
        animatedRef.current = true
        observer.disconnect()

        const DURATION = 1100 // ms
        const startTime = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / DURATION, 1)
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = Math.round(eased * target)
          setDisplay(String(current) + suffix)
          if (progress < 1) requestAnimationFrame(tick)
        }

        // Start from 0
        setDisplay('0' + suffix)
        requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div
      ref={ref}
      className={`text-center p-4 rounded-xl bg-[#111]/80 border border-[#222] backdrop-blur-sm ${className}`}
    >
      <div
        className="text-3xl font-extrabold text-orange-DEFAULT mb-1 tabular-nums"
        style={{ fontFamily: 'var(--font-nunito)' }}
      >
        {display}
      </div>
      <div className="text-text-muted text-xs uppercase tracking-wider font-semibold">
        {label}
      </div>
    </div>
  )
}
