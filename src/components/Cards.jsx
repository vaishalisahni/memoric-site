import React from 'react'

function Card({title, value, delta}) {
  return (
    <div className="bg-white p-4 rounded shadow-sm border">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="flex items-baseline gap-2">
        <div className="text-2xl font-semibold">{value}</div>
        {delta && <div className={`text-sm ${delta.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{delta}</div>}
      </div>
    </div>
  )
}

export default function DashboardCards(){
  const data = [
    {title: 'Active learners', value: '1,240', delta: '+12%'},
    {title: 'Courses', value: '8'},
    {title: 'Monthly revenue', value: '$10,200', delta: '+3%'}
  ]
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      {data.map((c, i) => <Card key={i} {...c} />)}
    </section>
  )
}
