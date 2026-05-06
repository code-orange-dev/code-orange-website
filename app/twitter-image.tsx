// Re-export OG image as the Twitter card image.
// `runtime` must be a literal string export — Next.js statically analyzes it
// and cannot see it through a barrel re-export, so we declare it here.
export { default, alt, size, contentType } from './opengraph-image'
export const runtime = 'edge'
