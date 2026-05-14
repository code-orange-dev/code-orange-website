import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calendar',
  description:
    'Subscribe to the Code Orange event calendar — weekly Bitcoin workshops, rawBit study sessions, Sovereign Bitcoiner courses, OpenClaw, and community calls. Google Calendar, Apple Calendar, and iCal supported.',
  openGraph: {
    title: 'Code Orange Event Calendar',
    description: 'Subscribe to weekly Bitcoin workshops and study sessions across Southeast Asia.',
  },
}

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
