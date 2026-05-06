import Script from 'next/script'

/**
 * Privacy-friendly analytics. Loads Plausible only if a domain is configured
 * via NEXT_PUBLIC_PLAUSIBLE_DOMAIN. No cookies, no fingerprinting,
 * GDPR-compliant out of the box. Fits the cypherpunk ethos.
 *
 * Set in Vercel: NEXT_PUBLIC_PLAUSIBLE_DOMAIN=codeorange.dev
 */
export default function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  if (!domain) return null

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  )
}
