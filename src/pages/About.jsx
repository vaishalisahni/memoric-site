import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

function TeamCard({ name, role, bio }) {
  return (
    <Card className="p-6 text-center flex flex-col items-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Avatar className="w-20 h-20 bg-slate-100 text-slate-500 flex items-center justify-center text-2xl">
        👤
      </Avatar>
      <h4 className="font-bold mt-2 text-slate-900">{name}</h4>
      <p className="text-sm text-slate-500">{role}</p>
      <p className="text-sm text-slate-600 mt-2">{bio}</p>
    </Card>
  );
}

export default function About() {
  return (
    <div className="w-full bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl space-y-16 px-4">

        {/* Mission */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Our Mission</h2>
          <Card className="p-8 bg-gradient-to-r from-[#0f1b33]/10 to-[#1a2c4f]/10 text-slate-900 shadow-xl">
            Applied AI Studio exists to bridge the gap between AI possibility and practical implementation.
            We provide education and consulting that respects your intelligence and focuses on real outcomes.
          </Card>
        </section>

        {/* Expertise */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-slate-900">Our Expertise</h2>
          <div className="flex justify-center">
            <Card className="bg-white/90 backdrop-blur-md border border-white/20 p-10 rounded-xl shadow-xl max-w-4xl">
              <p className="text-lg text-slate-700 leading-7 mb-4">
                Our team leverages AI technology, business management, and education
                to deliver practical solutions. We conduct research on AI governance
                and economic impact, guide organizations through secure AI implementation,
                and provide hands-on training for executives, educators, and students.
              </p>
              <p className="text-lg text-slate-700 leading-7">
                Whether you're looking to understand AI's potential for your business,
                need help choosing the right tools, or want to build AI skills in your
                team, we work with you to unlock AI's value while ensuring responsible use.
              </p>
            </Card>
          </div>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-slate-900">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamCard name="Mr. X" role="CEO" bio="[Biography]" />
            <TeamCard name="Ms. Y" role="COO" bio="[Biography]" />
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-slate-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-slate-900">Clarity</h4>
              <p className="text-sm mt-2 text-slate-600">We communicate complex ideas simply and accessibly.</p>
            </Card>
            <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-slate-900">Integrity</h4>
              <p className="text-sm mt-2 text-slate-600">We prioritize honest guidance over flashy solutions.</p>
            </Card>
            <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-slate-900">Excellence</h4>
              <p className="text-sm mt-2 text-slate-600">We deliver work we're proud to put our name on.</p>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
}
