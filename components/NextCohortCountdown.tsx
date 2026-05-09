'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight, Zap } from 'lucide-react'
import { NEXT_COHORT } from '@/lib/constants'

type Remaining = {
  days: number
  hours: number
  minutes: number
  seconds: number
  finished: boolean
}

function getRemaining(targetIso: string): Remaining {
  const target = new Date(targetIso).getTime()
  const now = Date.now()
  const diff = Math.max(0, target - now)
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
    finished: diff === 0,
  }
}

export default function NextCohortCountdown() {
  // Render only after mount to avoid SSR/CSR hydration mismatch on the ticking values.
  const [t, setT] = useState<Remaining | null>(null)

  useEffect(() => {
    setT(getRemaining(NEXT_COHORT.startsAt))
    const id = setInterval(() => setT(getRemaining(NEXT_COHORT.startsAt)), 1000)
    return () => clearInterval(id)
  }, [])

  // Skeleton on server / before mount — keeps layout stable, no jump.
  if (!t) {
    return (
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="rounded-2xl border border-orange-DEFAULT/20 bg-[#0d0d0d] p-6 md:p-10 h-[200px]" />
        </div>
      </section>
    )
  }

  if (t.finished) return null

  return (
    <section className="section bg-[#080808]">
      <div className="container-custom">
        <div className="relative rounded-2xl border border-orange-DEFAULT/30 bg-[#0d0d0d] p-6 md:p-10 overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-DEFAULT/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] items-center gap-6 lg:gap-10">
            {/* Left — heading */}
            <div>
              <div className="badge badge-orange mb-4">
                <Calendar className="w-3 h-3" /> Next cohort
              </div>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-2 leading-tight"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                {NEXT_COHORT.name}{' '}
                <span className="text-gradient-orange">starts soon.</span>
              </h2>
              <p className="text-text-muted text-sm md:text-base">
                Monday, May 11 · 11:00 UTC · {NEXT_COHORT.format}
              </p>
            </div>

            {/* Middle — countdown digits */}
            <div className="flex items-stretch gap-2 md:gap-3">
              <CountdownDigit label="DAYS" value={t.days} />
              <CountdownDigit label="HRS" value={t.hours} />
              <CountdownDigit label="MIN" value={t.minutes} />
              <CountdownDigit label="SEC" value={t.seconds} pulse />
            </div>

            {/* Right — CTA */}
            <Link
              href={NEXT_COHORT.applyHref}
              className="btn-primary text-base px-6 py-3 shrink-0 justify-center"
            >
              <Zap className="w-4 h-4" />
              Apply to {NEXT_COHORT.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function CountdownDigit({
  label,
  value,
  pulse,
}: {
  label: string
  value: number
  pulse?: boolean
}) {
  return (
    <div className="text-center px-3 py-2.5 rounded-xl bg-[#111] border border-[#222] min-w-[58px] md:min-w-[72px]">
      <div
        className={`text-2xl md:text-3xl font-extrabold text-orange-DEFAULT tabular-nums leading-none ${
          pulse ? 'animate-pulse' : ''
        }`}
        style={{ fontFamily: 'var(--font-nunito)' }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-text-dim text-[10px] tracking-widest font-mono mt-1.5">
        {label}
      </div>
    </div>
  )
}
