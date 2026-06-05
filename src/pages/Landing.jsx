import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <main className="landing">
      <header className="landing__head">
        <p className="landing__kicker">Est. MM · A standing exhibition</p>
        <h1 className="landing__title">
          JARIANA<span className="landing__dot">.</span>
        </h1>
        <p className="landing__sub">
          A museum that hangs the promotional photography of <em>Malcolm in the Middle</em>
          {' '}(2000–2006) as if it were oil on canvas. Two ways to walk the rooms.
        </p>
      </header>

      <nav className="landing__doors">
        <Link to="/cards" className="door door--01">
          <span className="door__num">01</span>
          <span className="door__name">The Card Gallery</span>
          <span className="door__desc">An editorial wall. Two featured plates, then a quiet masonry of stills.</span>
          <span className="door__enter">Enter the room →</span>
        </Link>

        <Link to="/museum" className="door door--02">
          <span className="door__num">02</span>
          <span className="door__name">The Infinite Museum</span>
          <span className="door__desc">A boundless hall. Drag to roam, scroll to zoom into any frame.</span>
          <span className="door__enter">Enter the room →</span>
        </Link>
      </nav>

      <footer className="landing__foot">
        <span>Wireframe study · two minimalist directions</span>
        <span>Imagery © respective rights holders, shown for prototype only</span>
      </footer>
    </main>
  )
}
