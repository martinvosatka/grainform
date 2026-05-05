'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

const photos = Array.from({ length: 21 }, (_, i) => ({
  src: `/images/gallery-photo-${i + 1}.png`,
  alt: `Ukázka realizace číslo ${i + 1} – kamenné a dřevěné práce Grainform`,
}))

// Group into repeating pattern: [full, half, half]
const groups = Array.from({ length: Math.ceil(photos.length / 3) }, (_, g) => ({
  full: photos[g * 3],
  top: photos[g * 3 + 1],
  bottom: photos[g * 3 + 2],
})).filter(g => g.full)

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const moved = useRef(false)

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return
    moved.current = false
    setDragging(true)
    setStartX(e.pageX - trackRef.current.getBoundingClientRect().left)
    setScrollLeft(trackRef.current.scrollLeft)
  }, [])

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging || !trackRef.current) return
      e.preventDefault()
      const x = e.pageX - trackRef.current.getBoundingClientRect().left
      const delta = x - startX
      if (Math.abs(delta) > 4) moved.current = true
      trackRef.current.scrollLeft = scrollLeft - delta
    },
    [dragging, startX, scrollLeft]
  )

  const onMouseUp = useCallback(() => setDragging(false), [])

  const openLightbox = useCallback((i: number) => {
    if (!moved.current) setLightbox(i)
  }, [])

  const prev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setLightbox(l => (l !== null ? Math.max(0, l - 1) : null))
  }, [])

  const next = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setLightbox(l => (l !== null ? Math.min(photos.length - 1, l + 1) : null))
  }, [])

  return (
    <section id="galerie" className="py-16">
      <h2 className="font-serif text-3xl sm:text-4xl text-center mb-10 px-4">
        Galerie realizací
      </h2>

      <div
        ref={trackRef}
        className={`flex gap-2 overflow-x-auto no-scrollbar px-8 select-none h-[360px] sm:h-[640px] ${
          dragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {groups.map((group, g) => (
          <div key={g} className="flex gap-2 flex-none h-full">
            {/* Full-height photo */}
            <button
              className="relative flex-none h-full w-[180px] sm:w-[420px] rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => openLightbox(g * 3)}
              aria-label={`Otevřít ${group.full.alt}`}
            >
              <Image
                src={group.full.src}
                alt={group.full.alt}
                fill
                quality={100}
                className="object-cover hover:scale-105 transition-transform duration-500 pointer-events-none"
                sizes="(max-width: 640px) 180px, 420px"
              />
            </button>

            {/* Two half-height photos stacked */}
            <div className="flex flex-col gap-2 flex-none w-[130px] sm:w-[320px] h-full">
              {group.top && (
                <button
                  className="relative flex-1 rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  onClick={() => openLightbox(g * 3 + 1)}
                  aria-label={`Otevřít ${group.top.alt}`}
                >
                  <Image
                    src={group.top.src}
                    alt={group.top.alt}
                    fill
                    quality={100}
                    className="object-cover hover:scale-105 transition-transform duration-500 pointer-events-none"
                    sizes="(max-width: 640px) 130px, 320px"
                  />
                </button>
              )}
              {group.bottom && (
                <button
                  className="relative flex-1 rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  onClick={() => openLightbox(g * 3 + 2)}
                  aria-label={`Otevřít ${group.bottom.alt}`}
                >
                  <Image
                    src={group.bottom.src}
                    alt={group.bottom.alt}
                    fill
                    quality={100}
                    className="object-cover hover:scale-105 transition-transform duration-500 pointer-events-none"
                    sizes="(max-width: 640px) 130px, 320px"
                  />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) setLightbox(null) }}
          role="dialog"
          aria-modal="true"
          aria-label="Zvětšená fotografie"
        >
          <button
            className="absolute top-3 right-3 flex items-center justify-center w-11 h-11 rounded-full bg-white/15 text-white text-2xl leading-none hover:bg-white/30 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Zavřít"
          >
            ×
          </button>

          <button
            className="absolute left-4 text-white text-5xl hover:opacity-60 transition-opacity disabled:opacity-20"
            onClick={prev}
            disabled={lightbox === 0}
            aria-label="Předchozí fotografie"
          >
            ‹
          </button>

          <div
            className="relative w-full max-w-5xl"
            style={{ height: '80vh' }}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <button
            className="absolute right-4 text-white text-5xl hover:opacity-60 transition-opacity disabled:opacity-20"
            onClick={next}
            disabled={lightbox === photos.length - 1}
            aria-label="Další fotografie"
          >
            ›
          </button>

          <p className="absolute bottom-4 text-white/50 text-sm">
            {lightbox + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  )
}
