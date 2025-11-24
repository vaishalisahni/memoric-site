import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, Menu } from 'lucide-react'

export default function Sidebar({ open, setOpen }) {
  const location = useLocation()
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/courses', label: 'Courses' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <>
      {/* Mobile overlay + panel */}
      <div className={`fixed inset-0 z-30 md:hidden transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
        <aside className={`absolute left-0 top-0 bottom-0 w-64 bg-white shadow-md p-4 transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-white font-semibold">A</div>
              <span className="font-semibold">Applied AI</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 rounded hover:bg-slate-100">
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {nav.map(i => (
              <Link 
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded ${location.pathname === i.to ? 'bg-slate-100 font-semibold' : 'hover:bg-slate-50'}`}
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      {/* Desktop sidebar (fixed) */}
      <aside className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 md:left-0 bg-white border-r">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">A</div>
            <div>
              <div className="font-semibold">Applied AI</div>
              <div className="text-xs text-slate-500">Studio</div>
            </div>
          </div>

          <nav className="mt-8 flex flex-col gap-1">
            {nav.map(i => (
              <Link
                key={i.to}
                to={i.to}
                className={`block px-3 py-2 rounded ${location.pathname === i.to ? 'bg-slate-100 font-semibold' : 'hover:bg-slate-50'}`}
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Applied AI
        </div>
      </aside>
    </>
  )
}
