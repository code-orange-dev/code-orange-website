import { SITE, SOCIAL } from '@/lib/constants'

/**
 * Site-wide JSON-LD structured data.
 * Tells search engines what this site is, where we operate,
 * and how to find our courses & social presence.
 */
export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE.name,
    alternateName: 'Code Orange',
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Canggu',
      addressRegion: 'Bali',
      addressCountry: 'ID',
    },
    sameAs: [
      SOCIAL.twitter,
      SOCIAL.instagram,
      SOCIAL.github,
      SOCIAL.discord,
      SOCIAL.geyser,
      `https://njump.me/${SOCIAL.nostr.npub}`,
    ],
    areaServed: [
      'Indonesia',
      'Malaysia',
      'Thailand',
      'Vietnam',
      'Philippines',
      'Southeast Asia',
    ],
    knowsAbout: [
      'Bitcoin',
      'Lightning Network',
      'Nostr',
      'Self Custody',
      'Multisig',
      'Bitcoin Privacy',
      'Open Source',
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    publisher: { '@type': 'Organization', name: SITE.name },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
