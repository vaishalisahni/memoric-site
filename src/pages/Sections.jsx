import React from "react";
import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import Contact from "./Contact";

export default function Sections() {
  return (
    <div className="w-full">
      <section id="home">
        <Home />
      </section>

      <section id="courses" className="scroll-mt-16 md:scroll-mt-20">
        <Courses />
      </section>


      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
}
