import { SITE } from '@/lib/constants'

/**
 * Per-program structured data: Course + CourseInstance + BreadcrumbList.
 *
 * Course/CourseInstance makes each program eligible for Google's course
 * rich results (the "Courses" carousel for queries like
 * "bitcoin developer course"). BreadcrumbList gives the page a clean
 * Home › Programs › <Program> trail in search listings.
 *
 * Everything here is derived from data we already render on the page,
 * so it stays in sync and adds zero visual weight.
 */
interface Props {
  /** Program name, e.g. "rawBit" */
  name: string
  /** Plain-text program description */
  description: string
  /** URL slug, e.g. "rawbit" */
  slug: string
  /** Human schedule string, e.g. "Every 2nd Wednesday, 11:00 UTC" */
  schedule?: string
  /** "Online • Discord" / "In-Person • Bitcoin House Bali" */
  format?: string
  /** Whether the program is free (most are) */
  free?: boolean
}

export default function CourseSchema({
  name,
  description,
  slug,
  schedule,
  format,
  free = true,
}: Props) {
  const url = `${SITE.url}/programs/${slug}`
  const isOnline = !format || /online|discord/i.test(format)

  const course = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url,
    provider: {
      '@type': 'EducationalOrganization',
      name: SITE.name,
      sameAs: SITE.url,
    },
    isAccessibleForFree: free,
    inLanguage: 'en',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: isOnline ? 'online' : 'onsite',
      ...(schedule ? { courseSchedule: schedule } : {}),
      ...(isOnline
        ? {}
        : {
            location: {
              '@type': 'Place',
              name: SITE.location,
              address: SITE.location,
            },
          }),
      ...(free
        ? {
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url,
            },
          }
        : {}),
    },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Programs', item: `${SITE.url}/programs` },
      { '@type': 'ListItem', position: 3, name, item: url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  )
}
