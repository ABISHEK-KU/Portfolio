"use client"

import Navigation from "./navigation"
import Hero from "./hero"
import Skills from "./skills"
import Projects from "./projects"
import Experience from "./experience"
import Education from "./education"
import Contact from "./contact"
import Footer from "./footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
