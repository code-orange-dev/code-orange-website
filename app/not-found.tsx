import Link from 'next/link'
import { ArrowRight, Home, MessageCircle } from 'lucide-react'
import { SOCIAL } from '@/lib/constants'

export const metadata = {
  title: '404 — Page Not Found',
  description: "This block isn't in the chain. Let's get you back on the network.",
}

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-16 bg-grid">
      <div className="max-w-xl w-full text-center">
        <p className="text-orange-DEFAULT font-mono text-sm tracking-widest uppercase mb-6">
          ⛓️ Block not found
        </p>
        <h1
          className="text-7xl md:text-8xl font-extrabold text-white mb-4 leading-none"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          4<span className="text-gradient-orange">0</span>4
        </h1>
        <p className="text-text-muted text-lg mb-8 leading-relaxed">
          This page isn&apos;t in the chain. It may have been moved, mined out, or
          never existed in the first place.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Back to home
          </Link>
          <Link href="/programs" className="btn-secondary">
            Browse programs
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={SOCIAL.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <MessageCircle className="w-4 h-4" />
            Ask in Discord
          </Link>
        </div>
      </div>
    </section>
  )
}
