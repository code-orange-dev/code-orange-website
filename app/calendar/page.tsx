'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Calendar, ChevronDown, ChevronUp, ExternalLink, Globe, MapPin, Zap } from 'lucide-react'

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type BaseEvent = {
  id: string
  title: string
  emoji: string
  color: string
  format: 'online' | 'in-person'
  location: string
  level: string
  durationMin: number
  href: string
  desc: string
}

type WeeklyDef    = BaseEvent & { recurrence: 'weekly';       dow: number; hUTC: number; mUTC: number; startAfter?: string; endBefore?: string }
type NthDef       = BaseEvent & { recurrence: 'monthly-nth';  nth: number; dow: number; hUTC: number; mUTC: number }
type MonthDayDef  = BaseEvent & { recurrence: 'monthly-day';  dayOfMonth: number; hUTC: number; mUTC: number }

type EventDef = WeeklyDef | NthDef | MonthDayDef

type ComputedEvent = BaseEvent & { start: Date; end: Date }

// ─────────────────────────────────────────────
// Date helpers
// ─────────────────────────────────────────────

function nthWeekdayOfMonth(year: number, month: number, nth: number, dow: number): Date {
  const first = new Date(Date.UTC(year, month, 1))
  const offset = (dow - first.getUTCDay() + 7) % 7
  return new Date(Date.UTC(year, month, 1 + offset + (nth - 1) * 7))
}

function getOccurrences(def: EventDef, from: Date, to: Date): Date[] {
  const out: Date[] = []

  if (def.recurrence === 'weekly') {
    const startAfter = def.startAfter ? new Date(def.startAfter + 'T00:00:00Z') : from
    const endBefore  = def.endBefore  ? new Date(def.endBefore  + 'T23:59:59Z') : to
    const base = startAfter > from ? startAfter : from
    const baseDow = base.getUTCDay()
    let daysUntil = (def.dow - baseDow + 7) % 7
    if (daysUntil === 0) daysUntil = 7
    let cur = new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth(), base.getUTCDate() + daysUntil, def.hUTC, def.mUTC))
    while (cur <= to && cur <= endBefore) {
      if (cur > from) out.push(new Date(cur))
      cur = new Date(cur.getTime() + 7 * 86400000)
    }
  }

  if (def.recurrence === 'monthly-nth') {
    for (let offset = 0; offset <= 3; offset++) {
      const d = nthWeekdayOfMonth(from.getUTCFullYear(), from.getUTCMonth() + offset, def.nth, def.dow)
      const candidate = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), def.hUTC, def.mUTC))
      if (candidate > from && candidate <= to) out.push(candidate)
    }
  }

  if (def.recurrence === 'monthly-day') {
    for (let offset = 0; offset <= 3; offset++) {
      const candidate = new Date(Date.UTC(from.getUTCFullYear(), from.getUTCMonth() + offset, def.dayOfMonth, def.hUTC, def.mUTC))
      if (candidate > from && candidate <= to) out.push(candidate)
    }
  }

  return out
}

// ─────────────────────────────────────────────
// Event schedule definitions
// ─────────────────────────────────────────────

const DEFS: EventDef[] = [
  {
    id: 'rawbit', title: 'rawBit Study Cohort', emoji: '₿', color: '#F7931A',
    format: 'online', location: 'Discord', level: 'Developer', durationMin: 90,
    href: 'https://discord.gg/ZtvA79paWa',
    desc: 'Learn how Bitcoin works — transactions, scripts, Taproot, P2P networking. Earn sats for homework.',
    recurrence: 'weekly', dow: 1, hUTC: 11, mUTC: 0,
    startAfter: '2026-05-11', endBefore: '2026-07-21',
  },
  {
    id: 'air', title: 'AIR Sessions', emoji: '🎯', color: '#D4A017',
    format: 'online', location: 'Discord', level: 'All levels', durationMin: 60,
    href: 'https://discord.gg/ZtvA79paWa',
    desc: 'Actions, Intentions, Reflections — monthly accountability reset with fellow Bitcoiners.',
    recurrence: 'monthly-nth', nth: 1, dow: 1, hUTC: 11, mUTC: 0,
  },
  {
    id: 'sovereign-bitcoiner', title: 'Sovereign Bitcoiner Workshop', emoji: '🛡️', color: '#6C63FF',
    format: 'online', location: 'Discord', level: 'Intermediate', durationMin: 90,
    href: 'https://discord.gg/ZtvA79paWa',
    desc: 'Full nodes, multisig, hardware wallets, Ecash, Fedimint. Hosted by Razor.',
    recurrence: 'monthly-nth', nth: 2, dow: 3, hUTC: 11, mUTC: 0,
  },
  {
    id: 'bitcoin-basics', title: 'Bitcoin Basics', emoji: '📖', color: '#F39C12',
    format: 'online', location: 'Discord', level: 'Beginner', durationMin: 60,
    href: 'https://discord.gg/ZtvA79paWa',
    desc: 'Wallets, self-custody, mempool, node basics. Hosted by The Quiet Satoshi.',
    recurrence: 'monthly-nth', nth: 1, dow: 4, hUTC: 11, mUTC: 0,
  },
  {
    id: 'openclaw', title: 'OpenClaw Workshop', emoji: '🦞', color: '#E74C3C',
    format: 'online', location: 'Discord', level: 'All levels', durationMin: 90,
    href: 'https://discord.gg/ZtvA79paWa',
    desc: 'Contribute to Bitcoin open source — GitHub flow, Bitcoin libraries, first PRs.',
    recurrence: 'monthly-nth', nth: 3, dow: 3, hUTC: 12, mUTC: 0,
  },
  {
    id: 'reading-club', title: 'Bitcoin Reading Club', emoji: '📚', color: '#8E44AD',
    format: 'online', location: 'Discord', level: 'All levels', durationMin: 90,
    href: 'https://discord.gg/ZtvA79paWa',
    desc: 'Deep-reads of Bitcoin books and papers. Currently: The Bitcoin Standard. Hosted by Alex.',
    recurrence: 'monthly-nth', nth: 4, dow: 3, hUTC: 12, mUTC: 0,
  },
  {
    id: 'talk-a-bit', title: 'Talk-a-Bit Meetup', emoji: '🌏', color: '#1ABC9C',
    format: 'online', location: 'Discord', level: 'All levels', durationMin: 60,
    href: 'https://discord.gg/ZtvA79paWa',
    desc: 'Monthly Bitcoiner meetup — open discussions in Bahasa & English. Hosted by einsamwolf28.',
    recurrence: 'monthly-day', dayOfMonth: 15, hUTC: 12, mUTC: 0,
  },
  {
    id: 'vibe-coding', title: 'OpenClaw & Vibe Coding', emoji: '⚡', color: '#27AE60',
    format: 'in-person', location: 'Bitcoin House Bali, Canggu', level: 'Beginner', durationMin: 90,
    href: 'https://share.google/O9MpHcSlHLHPdLhCn',
    desc: 'Build with AI tools — Replit, Codex, Shakespeare. No coding experience needed.',
    recurrence: 'monthly-nth', nth: 4, dow: 2, hUTC: 9, mUTC: 0,
  },
  {
    id: 'privacy-workshop', title: 'Bitcoin Privacy Workshop', emoji: '🔐', color: '#6C63FF',
    format: 'in-person', location: 'Bitcoin House Bali, Canggu', level: 'All levels', durationMin: 90,
    href: 'https://share.google/O9MpHcSlHLHPdLhCn',
    desc: 'Self-custody, full nodes, Lightning, eCash mints, privacy tools. Hands-on.',
    recurrence: 'monthly-nth', nth: 4, dow: 5, hUTC: 9, mUTC: 0,
  },
]

// ─────────────────────────────────────────────
// Subscribe links
// ─────────────────────────────────────────────

const CALENDAR_ID = '466de2be7431d78be2049f96f5fd31f9b06b5a9cd94f909ba3182b18442ed499%40group.calendar.google.com'
const GOOGLE_SUBSCRIBE = `https://calendar.google.com/calendar/u/0?cid=NDY2ZGUyYmU3NDMxZDc4YmUyMDQ5Zjk2ZjVmZDMxZjliMDZiNWE5Y2Q5NGY5MDliYTMxODJiMTg0NDJlZDQ5OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t`
const ICAL_URL = `https://calendar.google.com/calendar/ical/${CALENDAR_ID}/public/basic.ics`
const WEBCAL_URL = ICAL_URL.replace('https://', 'webcal://')
const EMBED_URL = `https://calendar.google.com/calendar/embed?src=${CALENDAR_ID}&ctz=Asia%2FMakassar&bgcolor=%23000000&color=%23F7931A`

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function fmtDate(d: Date) {
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' })
}
function fmtTime(d: Date) {
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' }) + ' UTC'
}
function isSameDay(a: Date, b: Date) {
  return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate()
}
function isToday(d: Date, now: Date) {
  return isSameDay(d, now)
}
function dayLabel(d: Date, now: Date) {
  const diffMs = d.getTime() - new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())).getTime()
  const diffDays = Math.floor(diffMs / 86400000)
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Tomorrow'
  return fmtDate(d)
}

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

export default function CalendarPage() {
  const [showEmbed, setShowEmbed] = useState(false)

  const now = useMemo(() => new Date(), [])
  const to  = useMemo(() => new Date(now.getTime() + 42 * 86400000), [now]) // 6 weeks ahead

  const events = useMemo<ComputedEvent[]>(() => {
    const all: ComputedEvent[] = []
    for (const def of DEFS) {
      const occurrences = getOccurrences(def, now, to)
      for (const start of occurrences) {
        const end = new Date(start.getTime() + def.durationMin * 60000)
        all.push({ ...def, start, end })
      }
    }
    return all.sort((a, b) => a.start.getTime() - b.start.getTime())
  }, [now, to])

  // Group by day
  const grouped = useMemo(() => {
    const map = new Map<string, ComputedEvent[]>()
    for (const ev of events) {
      const key = ev.start.toISOString().slice(0, 10)
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(ev)
    }
    return map
  }, [events])

  return (
    <div className="pt-28">
      {/* ── Hero ── */}
      <section className="section bg-grid relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="badge badge-orange mb-6">
              <Calendar className="w-3 h-3" />
              Events Calendar
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-nunito)' }}>
              Never miss a{' '}
              <span className="text-gradient-orange">Bitcoin session.</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Subscribe once and get every workshop, study cohort, and community meetup — directly in your calendar app.
            </p>

            {/* Subscribe buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={GOOGLE_SUBSCRIBE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
                Add to Google Calendar
              </a>
              <a
                href={WEBCAL_URL}
                className="btn-secondary"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                Apple Calendar / iCal
              </a>
              <a
                href={ICAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <ExternalLink className="w-4 h-4" />
                Outlook / Other
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Upcoming events ── */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="badge badge-orange mb-3">
                <Zap className="w-3 h-3" />
                Upcoming
              </div>
              <h2 className="text-3xl font-extrabold text-white" style={{ fontFamily: 'var(--font-nunito)' }}>
                Next 6 weeks
              </h2>
            </div>
            <span className="text-text-dim text-xs font-mono">{events.length} sessions scheduled</span>
          </div>

          {events.length === 0 ? (
            <p className="text-text-muted">No upcoming events found.</p>
          ) : (
            <div className="space-y-6">
              {Array.from(grouped.entries()).map(([dayKey, dayEvents]) => {
                const dayDate = new Date(dayKey + 'T00:00:00Z')
                const label   = dayLabel(dayDate, now)
                const today   = isToday(dayDate, now)
                return (
                  <div key={dayKey}>
                    {/* Day header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`text-xs font-bold px-3 py-1 rounded-full font-mono ${today ? 'bg-orange-DEFAULT text-black' : 'bg-[#111] text-text-muted border border-[#222]'}`}>
                        {label}
                      </div>
                      <div className="flex-1 h-px bg-[#1a1a1a]" />
                    </div>

                    {/* Events for this day */}
                    <div className="space-y-2 pl-0">
                      {dayEvents.map((ev) => (
                        <a
                          key={ev.id + ev.start.toISOString()}
                          href={ev.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 p-4 rounded-xl bg-[#0d0d0d] border border-[#1a1a1a] hover:border-orange-DEFAULT/30 transition-colors group"
                        >
                          {/* Color bar */}
                          <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: ev.color }} />

                          {/* Time */}
                          <div className="w-20 shrink-0 pt-0.5">
                            <p className="text-white font-mono text-sm font-semibold">{fmtTime(ev.start)}</p>
                            <p className="text-text-dim text-xs font-mono">{ev.durationMin}min</p>
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className="text-lg">{ev.emoji}</span>
                              <h3 className="text-white font-semibold text-sm group-hover:text-orange-DEFAULT transition-colors">
                                {ev.title}
                              </h3>
                              <span className={`badge text-xs ${ev.format === 'in-person' ? 'badge-orange' : 'badge-white'}`}>
                                {ev.format === 'in-person' ? '📍 In-Person' : '🌐 Online'}
                              </span>
                            </div>
                            <p className="text-text-muted text-xs leading-relaxed hidden sm:block">{ev.desc}</p>
                          </div>

                          {/* Location + level */}
                          <div className="hidden md:flex flex-col items-end gap-1 shrink-0 text-right">
                            <div className="flex items-center gap-1 text-text-dim text-xs">
                              {ev.format === 'in-person' ? <MapPin className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                              <span className="font-mono">{ev.location}</span>
                            </div>
                            <span className="badge badge-white text-xs">{ev.level}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Full Google Calendar embed ── */}
      <section className="section">
        <div className="container-custom">
          <button
            onClick={() => setShowEmbed(!showEmbed)}
            className="flex items-center gap-3 mb-6 group"
          >
            <div className="badge badge-orange">
              <Calendar className="w-3 h-3" />
              Full Calendar View
            </div>
            {showEmbed ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
            <span className="text-text-muted text-sm">{showEmbed ? 'Hide' : 'Show Google Calendar'}</span>
          </button>

          {showEmbed && (
            <div className="rounded-2xl overflow-hidden border border-[#222]">
              <iframe
                src={EMBED_URL}
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                className="block"
              />
            </div>
          )}

          {/* Subscribe reminder */}
          <div className="mt-10 rounded-2xl bg-[#111] border border-[#1a1a1a] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                Subscribe and never miss a session.
              </h3>
              <p className="text-text-muted text-sm">
                Every workshop and cohort, auto-synced to your calendar. Works with Google, Apple, Outlook, and any app that supports iCal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href={GOOGLE_SUBSCRIBE} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-3 px-6">
                Google Calendar
              </a>
              <a href={WEBCAL_URL} className="btn-secondary text-sm py-3 px-6">
                Apple / iCal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Browse programs ── */}
      <section className="section bg-[#080808]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-nunito)' }}>
            Want to go deeper?
          </h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto">
            Browse all programs to understand what each session covers, who it&apos;s for, and how to join.
          </p>
          <Link href="/programs" className="btn-primary inline-flex">
            <Zap className="w-4 h-4" />
            Browse All Programs
          </Link>
        </div>
      </section>
    </div>
  )
}
