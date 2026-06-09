'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Hero background video — autoplaying, muted, looping (the only way browsers
 * allow autoplay). Sits above the <HeroBackground /> canvas, which stays
 * visible underneath as a fallback while the video loads or if it fails.
 *
 * Behaviour:
 *  - fades in once the browser can play it (no hard pop, canvas shows first)
 *  - serves WebM then MP4; poster image shows before first frame
 *  - respects prefers-reduced-motion (holds on the poster, never autoplays)
 *  - aria-hidden + pointer-events-none: decorative, never blocks clicks
 *  - left + bottom dark scrims keep the headline readable over the footage
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      try { v.removeAttribute('autoplay'); v.pause() } catch {}
      return
    }
    const p = v.play()
    if (p && typeof p.catch === 'function') p.catch(() => {})
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
        onCanPlay={() => setReady(true)}
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Legibility scrims — darker on the left (where the headline sits) and bottom */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/65 to-bg/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/30" />
    </div>
  )
}
