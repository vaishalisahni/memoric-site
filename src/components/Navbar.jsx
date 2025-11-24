import React from 'react'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar({ setSidebarOpen }) {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 rounded" onClick={() => setSidebarOpen(s => !s)} aria-label="Open menu">
            <Menu />
          </button>

          <Link to="/" className="hidden md:flex items-center gap-3">
            <div className="text-lg font-semibold">Memoric AI</div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <Link to="/courses" className="text-sm hover:text-slate-700">Courses</Link>
          <Link to="/about" className="text-sm hover:text-slate-700">About</Link>
          <Link to="/contact" className="text-sm hover:text-slate-700">Contact</Link>
          <a className="ml-4 inline-block px-3 py-1 rounded bg-sky-600 text-white text-sm">Login</a>
        </nav>
      </div>
    </header>
  )
}
