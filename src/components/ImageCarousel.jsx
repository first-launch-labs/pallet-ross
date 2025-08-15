import React, { useMemo, useState } from 'react'

const IMG_URLS = [
  // Free Unsplash pics — replace with your own if you like
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800&auto=format&fit=crop',
]

export default function ImageCarousel() {
  const [hovered, setHovered] = useState(false)

  // Build card data with staggered rotations for the “deck” look
  const cards = useMemo(() => {
    const rotations = [-12, -7, -3, 0, 3, 7, 12]
    return IMG_URLS.map((src, i) => ({
      id: i,
      src,
      rot: rotations[i % rotations.length],
      z: i + 1,
    }))
  }, [])

  return (
    <div className="carousel-wrap">

      <div
        className={`carousel ${hovered ? 'hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Artwork carousel"
        role="region"
      >
        <div className="deck" tabIndex={0}>
          {cards.map((c, idx) => (
            <div
              key={c.id}
              className="card"
              style={{
                zIndex: c.z,
                '--rot': hovered ? 0 : c.rot + 'deg',
                '--ml': hovered ? '16px' : idx === 0 ? '0px' : '-120px',
              }}
            >
              <img src={c.src} alt={`Artwork ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
