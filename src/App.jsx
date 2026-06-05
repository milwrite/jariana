import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import CardGallery from './wireframes/CardGallery.jsx'
import InfiniteMuseum from './wireframes/InfiniteMuseum.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/cards" element={<CardGallery />} />
      <Route path="/museum" element={<InfiniteMuseum />} />
    </Routes>
  )
}
