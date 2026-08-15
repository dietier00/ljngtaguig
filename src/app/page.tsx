import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import AboutPrev from "@/components/sections/AboutPrev";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";

export default function Home() {

  return (
    <div
      className="relative min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-white"
    >

      <Navbar />

      <main className="relative">
        {/* Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* About */}
        <section id="about">
          <AboutPrev />
        </section>

        {/* Projects */}
        <section id="projects">
          <Projects />
        </section>

        {/* Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>

      </main>

      <Footer />
    </div>
  );
}