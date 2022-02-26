import React from "react"
import {
  Layout,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
} from "../components"

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <div className="min-h-screen">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </Layout>
    </div>
  )
}
