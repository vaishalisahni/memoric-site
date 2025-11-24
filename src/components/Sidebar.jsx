import React from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sidebar({ setOpen }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
      onClick={() => setOpen(false)}
    >
      <div
        className="fixed left-0 top-0 w-64 h-full bg-white p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="p-2 mb-4" onClick={() => setOpen(false)}>
          <X />
        </button>

        <nav className="flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </div>
  )
}
