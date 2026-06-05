import { useEffect, useState } from 'react'

const TVMAZE_ENDPOINT = 'https://api.tvmaze.com/shows/568/episodes'

// Minimal offline/CORS-failure fallback so both wireframes always render something.
// Real run pulls ~115 promo stills from TVmaze (show 568, Malcolm in the Middle, 2000–2006).
const FALLBACK = [
  { id: 1, title: 'Pilot', season: 1, number: 1, airdate: '2000-01-09', img: 'https://static.tvmaze.com/uploads/images/original_untouched/197/493034.jpg' },
  { id: 4, title: 'Shame', season: 1, number: 4, airdate: '2000-02-06', img: 'https://static.tvmaze.com/uploads/images/original_untouched/197/493039.jpg' },
  { id: 7, title: 'Christmas', season: 3, number: 7, airdate: '2001-12-16', img: 'https://static.tvmaze.com/uploads/images/original_untouched/197/493360.jpg' },
]

function toArtwork(ep) {
  return {
    id: ep.id,
    title: ep.name,
    season: ep.season,
    number: ep.number,
    airdate: ep.airdate || '',
    img: ep.image?.original || ep.image?.medium || null,
  }
}

/**
 * Loads Malcolm-in-the-Middle episode stills as "artworks".
 * Returns { artworks, loading, error }. Always resolves to a usable list.
 */
export function useArtworks() {
  const [state, setState] = useState({ artworks: [], loading: true, error: null })

  useEffect(() => {
    let alive = true
    fetch(TVMAZE_ENDPOINT)
      .then((r) => {
        if (!r.ok) throw new Error(`TVmaze ${r.status}`)
        return r.json()
      })
      .then((eps) => {
        if (!alive) return
        const artworks = eps.map(toArtwork).filter((a) => a.img)
        setState({ artworks: artworks.length ? artworks : FALLBACK, loading: false, error: null })
      })
      .catch((err) => {
        if (!alive) return
        setState({ artworks: FALLBACK, loading: false, error: err.message })
      })
    return () => {
      alive = false
    }
  }, [])

  return state
}

// Format helpers shared by both wireframes.
export const seasonLabel = (a) => `Season ${a.season} · Episode ${a.number}`
export const yearOf = (a) => (a.airdate ? a.airdate.slice(0, 4) : '—')
export const longDate = (a) => {
  if (!a.airdate) return 'Air date unknown'
  const d = new Date(a.airdate + 'T00:00:00')
  if (Number.isNaN(d.getTime())) return a.airdate
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
