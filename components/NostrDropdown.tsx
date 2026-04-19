'use client'

import { useState } from 'react'
import { ChevronDown, Zap } from 'lucide-react'
import NostrFeed from './NostrFeed'

export default function NostrDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-[#222] bg-[#0e0e0e] overflow-hidden">
      {/* Toggle header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#141414] transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-muted flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4 text-orange-DEFAULT" />
          </div>
          <div className="text-left">
            <p className="text-white text-sm font-semibold group-hover:text-orange-DEFAULT transition-colors">
              Latest from Nostr
            </p>
            <p className="text-text-dim text-xs">Uncensorable · Decentralized</p>
          </div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-text-muted group-hover:text-orange-DEFAULT transition-all duration-200 shrink-0 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Collapsible feed */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 pt-2 border-t border-[#1a1a1a]">
          <NostrFeed limit={3} />
        </div>
      </div>
    </div>
  )
}
