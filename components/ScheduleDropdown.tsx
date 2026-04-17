'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ChevronDown } from 'lucide-react'

const recurringEvents = [
  { name: 'Sovereign Bitcoiner', day: 'Every 2nd Wed', time: '11:00 UTC', href: '/programs/sovereign-bitcoiner' },
  { name: 'OpenClaw Workshop',   day: 'Every 3rd Wed', time: '12:00 UTC', href: '/programs/openclaw' },
  { name: 'Vibe Coding on Nostr',day: 'Every 4th Tue', time: '09:00 UTC', href: '/programs/vibe-coding' },
  { name: 'Bitcoin Reading Club',day: 'Every 4th Wed', time: '12:00 UTC', href: '/programs/bitcoin-reading-club' },
  { name: 'Accountability Sessions', day: 'Every 1st Tue', time: '11:00 UTC', href: '/programs/accountability-sessions' },
  { name: 'Talk-a-Bit Meetup',   day: 'Every 15th',    time: '12:00 UTC', href: '/programs/talk-a-bit' },
]

export default function ScheduleDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {/* Header / toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between mb-3 group"
      >
        <h4 className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2">
          <span className="w-1 h-4 bg-orange-DEFAULT rounded-full" />
          Weekly Schedule
        </h4>
        <ChevronDown
          className={`w-4 h-4 text-text-muted group-hover:text-orange-DEFAULT transition-all duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Collapsible list */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-2 pt-1">
          {recurringEvents.map((event) => (
            <Link
              key={event.name}
              href={event.href}
              className="flex items-center justify-between p-3 rounded-xl bg-[#0e0e0e] border border-[#1a1a1a] hover:border-orange-DEFAULT/30 hover:bg-[#111] transition-all group"
            >
              <div className="min-w-0 flex-1">
                <p className="text-white text-xs font-medium group-hover:text-orange-DEFAULT transition-colors truncate">
                  {event.name}
                </p>
                <p className="text-text-dim text-xs mt-0.5 flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5 shrink-0" />
                  {event.day}
                </p>
              </div>
              <div className="text-right shrink-0 ml-3">
                <p className="text-orange-DEFAULT text-xs font-mono font-semibold flex items-center gap-1 justify-end">
                  <Clock className="w-2.5 h-2.5" />
                  {event.time}
                </p>
                <p className="text-text-dim text-xs">Discord</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Hint when collapsed */}
      {!open && (
        <p className="text-text-dim text-xs mt-1 pl-3">
          {recurringEvents.length} recurring sessions — click to expand
        </p>
      )}
    </div>
  )
}
