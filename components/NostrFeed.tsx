'use client'

import { useEffect, useState, useCallback } from 'react'
import { ExternalLink, RefreshCw, Zap } from 'lucide-react'
import { SOCIAL, NOSTR_RELAYS } from '@/lib/constants'

interface NostrEvent {
  id: string
  pubkey: string
  created_at: number
  kind: number
  tags: string[][]
  content: string
  sig: string
}

function timeAgo(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000)
  const diff = now - timestamp
  if (diff < 60) return `${diff}s ago`
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}

function formatContent(content: string): string {
  // Replace URLs with clickable links (handled in JSX)
  return content
}

// Decode npub to hex
function npubToHex(npub: string): string {
  // bech32 decode
  const CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l'
  const data = npub.slice(5) // remove 'npub1'
  const decoded: number[] = []
  for (const char of data) {
    const val = CHARSET.indexOf(char)
    if (val === -1) continue
    decoded.push(val)
  }
  // Convert from 5-bit to 8-bit
  let acc = 0, bits = 0
  const result: number[] = []
  for (const value of decoded) {
    acc = (acc << 5) | value
    bits += 5
    while (bits >= 8) {
      bits -= 8
      result.push((acc >> bits) & 0xff)
    }
  }
  return result.slice(0, 32).map(b => b.toString(16).padStart(2, '0')).join('')
}

export default function NostrFeed({ limit = 6 }: { limit?: number }) {
  const [events, setEvents] = useState<NostrEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    setError(null)

    const hexPubkey = npubToHex(SOCIAL.nostr.npub)
    const results: NostrEvent[] = []
    let resolved = false

    return new Promise<void>((resolve) => {
      const timeout = setTimeout(() => {
        if (!resolved) {
          resolved = true
          if (results.length > 0) {
            const sorted = [...results].sort((a, b) => b.created_at - a.created_at)
            setEvents(sorted.slice(0, limit))
            setLastUpdated(new Date())
          } else {
            setError('Could not connect to Nostr relays. Check your connection.')
          }
          setLoading(false)
          resolve()
        }
      }, 8000)

      let connectedRelays = 0

      for (const relayUrl of NOSTR_RELAYS.slice(0, 3)) {
        try {
          const ws = new WebSocket(relayUrl)

          ws.onopen = () => {
            connectedRelays++
            const subId = `co-feed-${Math.random().toString(36).slice(2, 8)}`
            const filter = {
              authors: [hexPubkey],
              kinds: [1],
              limit: limit * 2,
            }
            ws.send(JSON.stringify(['REQ', subId, filter]))
          }

          ws.onmessage = (e) => {
            try {
              const msg = JSON.parse(e.data)
              if (msg[0] === 'EVENT' && msg[2]) {
                const event: NostrEvent = msg[2]
                if (!results.find(r => r.id === event.id)) {
                  results.push(event)
                }
              }
              if (msg[0] === 'EOSE') {
                ws.close()
                // Once we have enough events from first relay to respond, resolve early
                if (results.length >= limit && !resolved) {
                  resolved = true
                  clearTimeout(timeout)
                  const sorted = [...results].sort((a, b) => b.created_at - a.created_at)
                  setEvents(sorted.slice(0, limit))
                  setLastUpdated(new Date())
                  setLoading(false)
                  resolve()
                }
              }
            } catch {
              // ignore parse errors
            }
          }

          ws.onerror = () => {
            ws.close()
          }
        } catch {
          // ignore connection errors, try next relay
        }
      }

      // If no relays connected at all
      setTimeout(() => {
        if (connectedRelays === 0 && !resolved) {
          resolved = true
          clearTimeout(timeout)
          setError('No relay connections available.')
          setLoading(false)
          resolve()
        }
      }, 3000)
    })
  }, [limit])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const noteUrl = (eventId: string) =>
    `https://njump.me/${eventId}`

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-muted border border-orange-DEFAULT/30 flex items-center justify-center">
            <Zap className="w-4 h-4 text-orange-DEFAULT" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Live on Nostr</h3>
            <p className="text-text-muted text-xs">
              {lastUpdated
                ? `Updated ${timeAgo(Math.floor(lastUpdated.getTime() / 1000))}`
                : 'Connecting to relays...'}
            </p>
          </div>
        </div>
        <button
          onClick={fetchPosts}
          disabled={loading}
          className="p-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-text-muted hover:text-white transition-colors disabled:opacity-50"
          title="Refresh feed"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="card p-4 animate-pulse">
              <div className="h-4 bg-[#2a2a2a] rounded w-3/4 mb-2" />
              <div className="h-4 bg-[#2a2a2a] rounded w-1/2 mb-3" />
              <div className="h-3 bg-[#2a2a2a] rounded w-24" />
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="card p-6 text-center">
          <p className="text-text-muted text-sm mb-3">{error}</p>
          <a
            href={`https://njump.me/${SOCIAL.nostr.npub}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-DEFAULT text-sm hover:underline inline-flex items-center gap-1"
          >
            View on njump.me <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Posts */}
      {!loading && events.length > 0 && (
        <div className="space-y-3">
          {events.map((event) => (
            <a
              key={event.id}
              href={noteUrl(event.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-4 block group"
            >
              <p className="text-white/90 text-sm leading-relaxed line-clamp-4 mb-3 group-hover:text-white transition-colors">
                {event.content}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-text-dim text-xs font-mono">
                  {timeAgo(event.created_at)}
                </span>
                <span className="text-orange-DEFAULT/60 text-xs group-hover:text-orange-DEFAULT transition-colors flex items-center gap-1">
                  View on Nostr <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Footer link */}
      {!loading && (
        <div className="mt-4 text-center">
          <a
            href={`https://njump.me/${SOCIAL.nostr.npub}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-orange-DEFAULT text-sm transition-colors inline-flex items-center gap-1"
          >
            Follow on Nostr <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}
    </div>
  )
}
