'use client'

import { useEffect, useRef } from 'react'

/**
 * Animated hero background — pure <canvas>, no video file.
 *
 * Layers (back to front): dark base, slow-drifting grid, additive orange
 * light blobs, and a rising field of sats + ₿ glyphs. Sits absolutely behind
 * the hero content (which carries z-10).
 *
 * Performance & a11y:
 *  - device-pixel-ratio capped at 2
 *  - pauses when the tab is hidden
 *  - respects prefers-reduced-motion (paints one static frame, no loop)
 *  - cleans up its RAF + listeners on unmount
 */
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0
    let H = 0
    let raf = 0
    let t = 0

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    type Part = { x: number; y: number; s: number; v: number; o: number; b: boolean }
    let parts: Part[] = []

    const blobs = [
      { hue: '#F7931A', r: 280, ax: 0.18, ay: 0.12, px: 0.0, py: 0.0, a: 0.5 },
      { hue: '#FF6B00', r: 220, ax: 0.13, ay: 0.2, px: 2.1, py: 1.3, a: 0.38 },
      { hue: '#B25A00', r: 340, ax: 0.09, ay: 0.07, px: 4.0, py: 2.5, a: 0.32 },
      { hue: '#FFB347', r: 170, ax: 0.23, ay: 0.16, px: 1.0, py: 3.4, a: 0.28 },
    ]

    function size() {
      const r = canvas!.getBoundingClientRect()
      W = r.width
      H = r.height
      canvas!.width = Math.max(1, Math.floor(W * DPR))
      canvas!.height = Math.max(1, Math.floor(H * DPR))
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0)
      const n = Math.round(Math.min(90, W / 12))
      parts = []
      for (let i = 0; i < n; i++) {
        parts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          s: Math.random() * 1.8 + 0.4,
          v: Math.random() * 0.25 + 0.05,
          o: Math.random() * 0.5 + 0.2,
          b: Math.random() < 0.12,
        })
      }
    }

    function frame(advance: boolean) {
      if (advance) t += 0.006
      ctx!.clearRect(0, 0, W, H)
      ctx!.fillStyle = '#0A0A0A'
      ctx!.fillRect(0, 0, W, H)

      // drifting grid
      ctx!.save()
      ctx!.globalAlpha = 0.5
      ctx!.strokeStyle = 'rgba(247,147,26,0.06)'
      ctx!.lineWidth = 1
      const gs = 46
      const off = ((t * 14) % gs + gs) % gs
      for (let gx = -gs + off; gx < W; gx += gs) {
        ctx!.beginPath(); ctx!.moveTo(gx, 0); ctx!.lineTo(gx, H); ctx!.stroke()
      }
      for (let gy = -gs + off; gy < H; gy += gs) {
        ctx!.beginPath(); ctx!.moveTo(0, gy); ctx!.lineTo(W, gy); ctx!.stroke()
      }
      ctx!.restore()

      // additive orange light
      ctx!.globalCompositeOperation = 'lighter'
      for (const o of blobs) {
        const cx = W * 0.5 + Math.cos(t * o.ax + o.px) * W * 0.32
        const cy = H * 0.45 + Math.sin(t * o.ay + o.py) * H * 0.4
        const g = ctx!.createRadialGradient(cx, cy, 0, cx, cy, o.r)
        g.addColorStop(0, o.hue)
        g.addColorStop(1, 'rgba(10,10,10,0)')
        ctx!.globalAlpha = o.a
        ctx!.fillStyle = g
        ctx!.beginPath(); ctx!.arc(cx, cy, o.r, 0, Math.PI * 2); ctx!.fill()
      }
      ctx!.globalCompositeOperation = 'source-over'

      // rising particles + sats
      ctx!.font = '12px Nunito, sans-serif'
      for (const q of parts) {
        if (advance) {
          q.y -= q.v
          q.x += Math.sin((q.y + t * 40) * 0.01) * 0.15
          if (q.y < -8) { q.y = H + 8; q.x = Math.random() * W }
        }
        if (q.b) {
          ctx!.globalAlpha = q.o * 0.9
          ctx!.fillStyle = '#F7931A'
          ctx!.fillText('₿', q.x, q.y)
        } else {
          ctx!.globalAlpha = q.o
          ctx!.fillStyle = '#FFCC80'
          ctx!.beginPath(); ctx!.arc(q.x, q.y, q.s, 0, Math.PI * 2); ctx!.fill()
        }
      }
      ctx!.globalAlpha = 1
    }

    function loop() {
      frame(true)
      raf = requestAnimationFrame(loop)
    }

    function start() {
      cancelAnimationFrame(raf)
      if (reduce) { frame(false); return }
      raf = requestAnimationFrame(loop)
    }

    function onVisibility() {
      if (document.hidden) cancelAnimationFrame(raf)
      else start()
    }

    function onResize() {
      size()
      if (reduce) frame(false)
    }

    size()
    start()
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
