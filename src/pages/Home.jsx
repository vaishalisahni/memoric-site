import React from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1a2c4f] to-[#0f1b33] text-white px-6 py-16 relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

      {/* =====================  FIRST SECTION  ===================== */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 relative z-10">

        {/* Left Text Box */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl max-w-xl shadow-lg">
          <p className="leading-7 text-gray-200 text-lg">
            We are a research, consulting, and training company focused on making AI
            accessible and beneficial for businesses, educational institutions,
            and communities. We help organizations adopt artificial intelligence
            responsibly and effectively.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl w-[380px] h-[220px] flex justify-center items-center text-gray-200">
          Image Placeholder
        </div>
      </div>

      {/* =====================  SECOND SECTION  ===================== */}
      <div className="w-full flex justify-center mt-20 relative z-10">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-xl max-w-5xl shadow-lg">

          <p className="leading-7 text-gray-200 text-lg">
            Our team expertise in AI technology, business management, and education
            to deliver practical solutions. We conduct research on AI governance
            and economic impact, guide organizations through secure AI implementation,
            and provide hands-on training for executives, educators, and students.
            Whether you're looking to understand AI's potential for your business,
            need help choosing the right tools, or want to build AI skills in your
            team, we work with you to unlock AI's value while ensuring responsible use.
          </p>

          <br />

          <p className="leading-7 text-gray-200 text-lg">
            We partner with universities, businesses, and international organizations
            to drive innovation through seminars, workshops, consulting projects,
            and training programmes that make AI work for everyone.
          </p>

        </div>
      </div>
    </div>
  );
}
