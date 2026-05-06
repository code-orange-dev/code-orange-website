'use client'

import { useEffect, useState } from 'react'

/**
 * Live Bitcoin block height pulled from mempool.space (no API key, free).
 * Refreshes every 60s. Fails silently — never breaks the footer.
 *
 * Why this exists: a small, on-brand "this site is alive" signal that fits
 * a Bitcoin school perfectly. Costs nothing.
 */
export default function BlockHeight() {
  const [height, setHeight] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchHeight() {
      try {
        const res = await fetch('https://mempool.space/api/blocks/tip/height', {
          cache: 'no-store',
        })
        if (!res.ok) return
        const text = await res.text()
        const n = parseInt(text, 10)
        if (!cancelled && Number.isFinite(n)) setHeight(n)
      } catch {
        // Silently ignore — this is decorative, not critical
      }
    }

    fetchHeight()
    const interval = setInterval(fetchHeight, 60_000)
    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  return (
    <a
      href="https://mempool.space"
      target="_blank"
      rel="noopener noreferrer"
      title="Current Bitcoin block height (via mempool.space)"
      className="inline-flex items-center gap-2 text-text-dim hover:text-orange-DEFAULT transition-colors text-xs font-mono"
    >
      <span
        className="w-1.5 h-1.5 rounded-full bg-orange-DEFAULT animate-pulse"
        aria-hidden
      />
      <span>
        block{' '}
        <span className="text-orange-DEFAULT/80">
          {height !== null ? height.toLocaleString('en-US') : '—'}
        </span>
      </span>
    </a>
  )
}
