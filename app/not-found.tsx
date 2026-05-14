import Link from 'next/link'
import { ArrowRight, Home, MessageCircle, BookOpen, Calendar, Users } from 'lucide-react'
import { SOCIAL } from '@/lib/constants'

export const metadata = {
  title: '404 — Page Not Found',
  description: "This block isn't in the chain. Let's get you back on the network.",
}

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16 bg-grid relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-DEFAULT/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-lg w-full text-center relative z-10">
        {/* Massive 404 */}
        <div
          className="text-[clamp(8rem,22vw,14rem)] font-extrabold leading-none select-none mb-2 text-gradient-orange"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          404
        </div>

        <div className="badge badge-orange mx-auto mb-6">
          Block not found
        </div>

        <h1
          className="text-2xl md:text-3xl font-extrabold text-white mb-4"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          This page got orphaned.
        </h1>
        <p className="text-text-muted text-base md:text-lg mb-10 leading-relaxed max-w-sm mx-auto">
          It may have been moved, mined out, or never existed in the first place.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/programs" className="btn-secondary">
            Browse Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quick nav */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-sm mx-auto mb-8">
          {[
            { href: '/calendar',    label: 'Calendar',     icon: Calendar },
            { href: '/community',   label: 'Community',    icon: Users },
            { href: '/fellowships', label: 'Fellowships',  icon: BookOpen },
            { href: '/about',       label: 'About',        icon: Home },
          ].map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="py-2.5 px-3 rounded-lg bg-[#111] border border-[#222] text-text-muted hover:text-white hover:border-orange-DEFAULT/40 transition-all text-sm text-center font-medium flex items-center justify-center gap-1.5"
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              {label}
            </Link>
          ))}
        </div>

        {/* Discord fallback */}
        <Link
          href={SOCIAL.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange-DEFAULT transition-colors text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Still lost? Ask in Discord
        </Link>
      </div>
    </section>
  )
}
