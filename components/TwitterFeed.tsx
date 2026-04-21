'use client'

import { useEffect, useRef, useState } from 'react'
import { Twitter, ExternalLink } from 'lucide-react'

export default function TwitterFeed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Load Twitter widget script
    const scriptId = 'twitter-widgets-script'
    if (document.getElementById(scriptId)) {
      // Script already exists — just re-render widgets
      if ((window as any).twttr?.widgets) {
        ;(window as any).twttr.widgets.load(containerRef.current)
        setLoaded(true)
      }
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.onload = () => setLoaded(true)
    document.body.appendChild(script)
  }, [])

  return (
    <div className="rounded-2xl border border-[#222] bg-[#0e0e0e] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0">
            <Twitter className="w-4 h-4 text-[#1DA1F2]" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">@CodeOrangeDevs</p>
            <p className="text-text-dim text-xs">Latest updates from X</p>
          </div>
        </div>
        <a
          href="https://x.com/CodeOrangeDevs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-text-muted hover:text-orange-DEFAULT transition-colors text-xs"
        >
          View all <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Twitter timeline embed */}
      <div ref={containerRef} className="px-2 py-2 max-h-[520px] overflow-y-auto scrollbar-hide">
        {!loaded && (
          <div className="flex items-center justify-center py-12 text-text-dim text-sm">
            <span className="animate-pulse">Loading updates…</span>
          </div>
        )}
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-tweet-limit="5"
          data-chrome="noheader nofooter noborders transparent noscrollbar"
          data-dnt="true"
          href="https://twitter.com/CodeOrangeDevs?ref_src=twsrc%5Etfw"
        >
          Latest tweets
        </a>
      </div>
    </div>
  )
}
