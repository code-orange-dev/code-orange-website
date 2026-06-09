'use client'

import { useEffect, useRef } from 'react'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      try { v.pause() } catch {}
      return
    }

    v.muted = true
    const tryPlay = () => {
      const p = v.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }
    tryPlay()
    v.addEventListener('loadeddata', tryPlay, { once: true })
    return () => v.removeEventListener('loadeddata', tryPlay)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/65 to-bg/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/30" />
    </div>
  )
}
