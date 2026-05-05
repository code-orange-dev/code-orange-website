import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Globe, MapPin, Users, Zap } from 'lucide-react'
import { PROGRAMS, SOCIAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Explore all Code Orange Dev School programs, from the rawBit developer cohort to Sovereign Bitcoiner workshops, Vibe Coding on Nostr, and more.',
}


export default function ProgramsPage() {
  const byAudience = {
    Developers: PROGRAMS.filter((p) =>
      ['privacy-track', 'rawbit'].includes(p.slug)
    ),
    Bitcoiners: PROGRAMS.filter((p) =>
      ['sovereign-bitcoiner', 'openclaw'].includes(p.slug)
    ),
    Everyone: PROGRAMS.filter((p) =>
      ['vibe-coding', 'bitcoin-basics', 'bitcoin-reading-club', 'talk-a-bit'].includes(p.slug)
    ),
  }

  return (
    <div className="pt-28">
      {/* Header */}
      <section className="section bg-grid relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-DEFAULT/10 blur-[80px] rounded-full" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="badge badge-orange mb-6">
              <Zap className="w-3 h-3" /> All Programs
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Pick your{' '}
              <span className="text-gradient-orange">path into Bitcoin</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              From zero to sovereign. From curious to contributor. Every program is hands-on,
              practical, and Bitcoin-only.
            </p>
          </div>
        </div>
      </section>

      {/* Programs by audience */}
      {Object.entries(byAudience).map(([audience, programs]) => (
        <section key={audience} className="section border-t border-[#1a1a1a]">
          <div className="container-custom">
            <div className="flex items-center gap-4 mb-8">
              <div className="badge badge-orange">
                <Users className="w-3 h-3" />
                For {audience}
              </div>
              <div className="flex-1 h-px bg-[#1a1a1a]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <Link
                  key={program.slug}
                  href={`/programs/${program.slug}`}
                  className="card overflow-hidden flex flex-col group h-full"
                >
                  {/* Poster image */}
                  {'poster' in program && program.poster ? (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={program.poster as string}
                        alt={`${program.name} poster`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                        </div>
                  ) : null}

                  <div className={`${'poster' in program && program.poster ? 'p-5' : 'p-6'} flex flex-col flex-1`}>
                  {/* Program icon & name */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: program.color + '18', border: `1px solid ${program.color}30` }}
                    >
                      {program.icon}
                    </div>
                    <div>
                      <h3
                        className="text-white font-bold text-lg leading-tight group-hover:text-orange-DEFAULT transition-colors"
                        style={{ fontFamily: 'var(--font-nunito)' }}
                      >
                        {program.name}
                      </h3>
                      <p className="text-text-muted text-sm">{program.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                    {program.description}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {program.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="badge badge-white text-xs">
                        {topic}
                      </span>
                    ))}
                    {program.topics.length > 3 && (
                      <span className="badge badge-white text-xs">
                        +{program.topics.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Clock className="w-3 h-3 text-orange-DEFAULT" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        {program.format.includes('In-Person') ? (
                          <MapPin className="w-3 h-3 text-orange-DEFAULT" />
                        ) : (
                          <Globe className="w-3 h-3 text-orange-DEFAULT" />
                        )}
                        {program.schedule}
                      </div>
                    </div>
                    <span className="text-orange-DEFAULT text-sm font-semibold group-hover:text-orange-light flex items-center gap-1 transition-colors">
                      Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Community CTA */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="rounded-2xl bg-[#111] border border-[#222] p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-orange-glow opacity-50" />
            <div className="relative z-10">
              <h2
                className="text-3xl font-extrabold text-white mb-4"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Not sure which program to join?
              </h2>
              <p className="text-text-muted mb-6 max-w-md mx-auto">
                Drop into Discord and ask. The community will point you in the right direction based
                on your background and goals.
              </p>
              <Link
                href={SOCIAL.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <Zap className="w-4 h-4" />
                Join Discord and Ask
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
