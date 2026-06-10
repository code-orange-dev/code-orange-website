'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export type GalleryPhoto = {
  src: string
  alt: string
  width: number
  height: number
}

/**
 * Masonry photo gallery with a full-screen lightbox.
 *
 * - Photos keep their natural aspect ratio (no cropping) via CSS columns.
 * - Click any photo to open it full-size in a lightbox.
 * - Lightbox supports arrow keys, Escape, swipe-style prev/next buttons,
 *   a counter, and captions.
 */
export default function GalleryLightbox({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i + photos.length - 1) % photos.length)),
    [photos.length],
  )
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  )

  // Keyboard navigation + body scroll lock while the lightbox is open
  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [active, close, prev, next])

  return (
    <>
      {/* Masonry grid — natural aspect ratios, zero cropping */}
      <div className="columns-2 md:columns-3 xl:columns-4 gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View photo: ${photo.alt}`}
            className="gallery-item group relative mb-3 md:mb-4 block w-full overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#111] text-left cursor-zoom-in transition-colors duration-300 hover:border-orange-DEFAULT/40"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            {/* Hover overlay with caption + zoom affordance */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
              <span className="text-white/90 text-xs font-medium leading-snug">{photo.alt}</span>
              <span className="shrink-0 w-8 h-8 rounded-full bg-orange-DEFAULT text-black flex items-center justify-center shadow-[0_0_20px_rgba(247,147,26,0.5)]">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="lightbox-backdrop fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          {/* Top bar: counter + close */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-6 z-10">
            <span className="text-white/50 text-sm font-mono tabular-nums">
              {active + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Prev */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-orange-DEFAULT hover:text-black text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-orange-DEFAULT hover:text-black text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image + caption */}
          <figure
            className="lightbox-image relative px-14 md:px-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              width={photos[active].width}
              height={photos[active].height}
              className="max-w-[88vw] md:max-w-[80vw] max-h-[78vh] w-auto h-auto rounded-xl object-contain shadow-[0_24px_80px_rgba(0,0,0,0.8)]"
              sizes="88vw"
              priority
            />
            <figcaption className="mt-4 text-center text-white/60 text-sm">
              {photos[active].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
