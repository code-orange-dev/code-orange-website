'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, Home } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Surface the error in dev; swap in real telemetry later.
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[app/error]', error)
    }
  }, [error])

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-16 bg-grid">
      <div className="max-w-xl w-full text-center">
        <p className="text-orange-DEFAULT font-mono text-sm tracking-widest uppercase mb-6">
          ⚠ Reorg detected
        </p>
        <h1
          className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          Something went <span className="text-gradient-orange">wrong</span>.
        </h1>
        <p className="text-text-muted text-lg mb-8 leading-relaxed">
          A node hiccup on our side. Try again or head home.
        </p>
        {error?.digest && (
          <p className="text-text-dim font-mono text-xs mb-8">
            ref: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={reset} className="btn-primary">
            <RefreshCw className="w-4 h-4" />
            Try again
          </button>
          <Link href="/" className="btn-secondary">
            <Home className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
