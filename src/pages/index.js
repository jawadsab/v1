import React from "react"
import {
  Layout,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
  Seo,
} from "../components"

export default function Home() {
  return (
    <Layout>
      <Seo />
      <div className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Layout>
  )
}
