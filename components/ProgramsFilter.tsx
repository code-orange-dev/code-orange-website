'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Globe, MapPin, Users } from 'lucide-react'

type Program = {
  slug: string
  name: string
  subtitle: string
  description: string
  duration: string
  format: string
  schedule: string
  level: string
  color: string
  topics: string[]
  icon: string
  poster?: string
  [key: string]: unknown
}

type AudienceMap = { [audience: string]: Program[] }

interface Props {
  byAudience: AudienceMap
}

const AUDIENCE_ICONS: Record<string, string> = {
  Developers: '⚡',
  Bitcoiners: '₿',
  Everyone:   '🌏',
}

export default function ProgramsFilter({ byAudience }: Props) {
  const tabs = Object.keys(byAudience)
  const [active, setActive] = useState<string>('All')
  const allTab = 'All'
  const allTabs = [allTab, ...tabs]

  const visible: Program[] =
    active === allTab
      ? tabs.flatMap((t) => byAudience[t])
      : byAudience[active] ?? []

  return (
    <div>
      {/* Tab row */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
        {allTabs.map((tab) => {
          const isActive = tab === active
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-orange-DEFAULT text-black shadow-[0_0_20px_rgba(247,147,26,0.35)]'
                  : 'bg-[#111] border border-[#222] text-text-muted hover:text-white hover:border-orange-DEFAULT/40'
              }`}
            >
              {tab !== allTab && <span>{AUDIENCE_ICONS[tab]}</span>}
              {tab === allTab ? 'All Programs' : `For ${tab}`}
            </button>
          )
        })}
      </div>

      {/* Grid — animate on tab switch via key */}
      <div
        key={active}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ animation: 'page-enter 0.3s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        {visible.map((program) => (
          <Link
            key={program.slug}
            href={`/programs/${program.slug}`}
            className="card overflow-hidden flex flex-col group h-full"
          >
            {/* Poster image */}
            {program.poster ? (
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

            <div className={`${program.poster ? 'p-5' : 'p-6'} flex flex-col flex-1`}>
              {/* Icon & name */}
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

      {/* Count label */}
      <p className="text-center text-text-dim text-xs font-mono mt-8">
        Showing {visible.length} of {tabs.flatMap((t) => byAudience[t]).length} programs
      </p>
    </div>
  )
}
