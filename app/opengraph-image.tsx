import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/constants'

export const runtime = 'edge'

export const alt = `${SITE.name} — ${SITE.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          backgroundColor: '#0A0A0A',
          backgroundImage:
            'radial-gradient(circle at 30% 20%, rgba(247,147,26,0.18) 0%, transparent 55%)',
          color: '#FFFFFF',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top row: badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: '#F7931A',
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#F7931A',
              fontWeight: 700,
            }}
          >
            Asia&apos;s Bitcoin Developer School
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Code Orange
          </div>
          <div
            style={{
              fontSize: 40,
              color: '#bbbbbb',
              maxWidth: 900,
              lineHeight: 1.3,
              fontWeight: 500,
            }}
          >
            A Bitcoin OSS contributor pipeline
            <br />
            <span style={{ color: '#F7931A' }}>with a fellowship layer.</span>
          </div>
        </div>

        {/* Bottom row: domain + tags */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 24,
            borderTop: '1px solid #222',
          }}
        >
          <div style={{ fontSize: 28, color: '#888', fontWeight: 600 }}>
            codeorange.dev
          </div>
          <div style={{ display: 'flex', gap: 16, fontSize: 22, color: '#aaa' }}>
            <span>Bitcoin Only</span>
            <span style={{ color: '#333' }}>·</span>
            <span>Bali, Indonesia</span>
            <span style={{ color: '#333' }}>·</span>
            <span>Open Source</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
