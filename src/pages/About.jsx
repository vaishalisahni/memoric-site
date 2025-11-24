import React from 'react'

function TeamCard({name, role, bio}) {
  return (
    <div className="bg-white p-6 rounded shadow text-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-500">👤</div>
      <h4 className="mt-3 font-semibold">{name}</h4>
      <div className="text-sm text-slate-500">{role}</div>
      <p className="text-sm text-slate-600 mt-3">{bio}</p>
    </div>
  )
}

export default function About(){
  return (
    <div className="container mx-auto max-w-4xl">
      <section className="py-8">
        <h1 className="text-2xl font-semibold mb-3">Our Mission</h1>
        <div className="bg-white p-6 rounded shadow text-slate-700">
          Applied Al Studio exists to bridge the gap between Al possibility and practical implementation. We provide education and consulting that respects your intelligence and focuses on real outcomes.
          <br /> <br />
Our approach is straightforwardt understand the technology, identify genuine opportunities, and build capabilities that last. No hype. No shortcuts. Just thoughtful work that moves organizations forward.
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-xl font-semibold text-center mb-6">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TeamCard name="Mr. X" role="Chief Executive Officer" bio="[Biography]" />
          <TeamCard name="Ms. Y" role="Chief Operating Officer" bio="[Biography]" />
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-xl font-semibold text-center mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded text-center"> <h4 className="font-semibold">Clarity</h4><p className="text-sm">We communicate complex ideas in simple, accessable.</p></div>
          <div className="bg-slate-50 p-6 rounded text-center"> <h4 className="font-semibold">Integrity</h4><p className="text-sm">We prioritize honest guidance over impressing sounding solutions</p></div>
          <div className="bg-slate-50 p-6 rounded text-center"> <h4 className="font-semibold">Excellence</h4><p className="text-sm">We deliver work we're proud to put our name on.</p></div>
        </div>
      </section>
    </div>
  )
}
