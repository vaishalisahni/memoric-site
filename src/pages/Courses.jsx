import React from 'react'

function CourseCard({title, desc, bullets}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow border">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-4">{desc}</p>
      <ul className="list-disc list-inside text-sm text-slate-600 mb-4">
        {bullets.map((b,i)=> <li key={i}>{b}</li>)}
      </ul>
      <button className="w-full py-2 rounded bg-sky-600 text-white">Enroll Now</button>
    </div>
  )
}

export default function Courses(){
  const courses = [
    {
      title: 'Online: Intro to AI',
      desc: 'A comprehensive introduction to AI concepts and ethics.',
      bullets: ['8-week structured program','Live sessions','Real-case studies']
    },
    {
      title: 'Offline: Business Hands-On Training',
      desc: 'In-person workshops focused on implementing AI solutions.',
      bullets: ['3-day immersive workshop','Custom solutions','Hands-on support']
    }
  ]

  return (
    <div className="container mx-auto max-w-4xl">
      <header className="text-center py-8">
        <h1 className="text-3xl font-semibold">Our Courses</h1>
        <p className="text-sm text-slate-500">Practical training designed for teams and leaders who want to understand and apply AI effectively.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((c,i)=><CourseCard key={i} {...c} />)}
      </div>
    </div>
  )
}
