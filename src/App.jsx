import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import About from './pages/About'

export default function App(){
  // control mobile sidebar open
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex">
      {/* Sidebar: fixed on md+, collapsible on mobile */}
      {/* <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} /> */}

      {/* Main content area */}
      <div className="flex-1 min-h-screen flex flex-col">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1md:p-8 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
