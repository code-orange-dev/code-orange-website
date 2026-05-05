import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Globe,
  MapPin,
  MessageCircle,
  Zap,
} from 'lucide-react'
import { PROGRAMS, SOCIAL } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  // Exclude privacy-track — it has its own static page at /programs/privacy-track/
  return PROGRAMS.filter((p) => p.slug !== 'privacy-track').map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = PROGRAMS.find((p) => p.slug === params.slug)
  if (!program) return {}
  return {
    title: `${program.name}, ${program.subtitle}`,
    description: program.description,
  }
}

export default function ProgramDetailPage({ params }: Props) {
  const program = PROGRAMS.find((p) => p.slug === params.slug)
  if (!program) notFound()

  const otherPrograms = PROGRAMS.filter((p) => p.slug !== program.slug).slice(0, 3)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section bg-grid relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{ background: program.color }}
        />
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Programs
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              {/* Icon + badge */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
                  style={{ background: program.color + '20', border: `1px solid ${program.color}40` }}
                >
                  {program.icon}
                </div>
                <div>
                  <span className="badge badge-orange text-xs">{program.tagline}</span>
                </div>
              </div>

              {/* Poster image (mobile, shown above title) */}
              {'poster' in program && program.poster && (
                <div className="lg:hidden relative h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={program.poster as string}
                    alt={`${program.name} poster`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>
              )}

              <h1
                className="text-5xl font-extrabold text-white mb-2 leading-tight"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                {program.name}
              </h1>
              <p className="text-text-muted text-xl mb-6">{program.subtitle}</p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">{program.description}</p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={SOCIAL.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Zap className="w-4 h-4" />
                  {program.cta}
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

            {/* Poster + Details card */}
            <div className="space-y-4">
              {'poster' in program && program.poster && (
                <div className="hidden lg:block relative h-72 rounded-xl overflow-hidden border border-[#222]">
                  <Image
                    src={program.poster as string}
                    alt={`${program.name} poster`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}
            <div className="card p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Program Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-muted flex items-center justify-center">
                    <Clock className="w-4 h-4 text-orange-DEFAULT" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider">Duration</p>
                    <p className="text-white font-medium">{program.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-muted flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-orange-DEFAULT" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider">Schedule</p>
                    <p className="text-white font-medium">{program.schedule}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-muted flex items-center justify-center">
                    {program.format.includes('In-Person') ? (
                      <MapPin className="w-4 h-4 text-orange-DEFAULT" />
                    ) : (
                      <Globe className="w-4 h-4 text-orange-DEFAULT" />
                    )}
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider">Format</p>
                    <p className="text-white font-medium">{program.format}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-muted flex items-center justify-center">
                    <span className="text-orange-DEFAULT text-sm">⚡</span>
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider">Level</p>
                    <p className="text-white font-medium">{program.level}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <h2
            className="text-3xl font-extrabold text-white mb-8"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            What you&apos;ll learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.topics.map((topic, i) => (
              <div key={topic} className="flex items-center gap-3 p-4 rounded-xl bg-[#111] border border-[#1a1a1a]">
                <div className="w-6 h-6 rounded-full bg-orange-muted flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-orange-DEFAULT" />
                </div>
                <span className="text-white font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="section">
        <div className="container-custom">
          <div
            className="rounded-2xl p-10 text-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${program.color}15, ${program.color}05)`,
              border: `1px solid ${program.color}30`,
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-[60px]"
              style={{ background: program.color + '30' }}
            />
            <div className="relative z-10">
              <h2
                className="text-3xl font-extrabold text-white mb-4"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Ready to join {program.name}?
              </h2>
              <p className="text-text-muted mb-6 max-w-md mx-auto">
                Apply now or jump into Discord to ask questions first. We&apos;re happy to help you find the right program.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link
                  href={SOCIAL.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Zap className="w-4 h-4" /> {program.cta}
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
          </div>
        </div>
      </section>

      {/* Other programs */}
      <section className="section bg-[#080808]">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-2xl font-extrabold text-white"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Other Programs
            </h2>
            <Link
              href="/programs"
              className="text-orange-DEFAULT hover:text-orange-light text-sm font-medium flex items-center gap-1 transition-colors"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherPrograms.map((p) => (
              <Link key={p.slug} href={`/programs/${p.slug}`} className="card p-5 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm group-hover:text-orange-DEFAULT transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-text-muted text-xs">{p.tagline}</p>
                  </div>
                </div>
                <p className="text-text-muted text-xs line-clamp-2">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
