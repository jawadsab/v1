import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Resume = () => {
  const data = useStaticQuery(graphql`
    query MyResume {
      file(relativePath: { eq: "resume.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="pt-14 min-h-screen">
      <header className="text-3xl text-onHover font-semibold tracking-wider text-center">
        Here's my Resume
      </header>
      <a href="#" className="pt-14 block sm:pt-8">
        <Img
          className="w-3/4 mx-auto rounded-xl drop-shadow-2xl brightness-50 hover:brightness-100 transition-all duration-300 "
          fluid={data.file.childImageSharp.fluid}
        />
      </a>
    </section>
  )
}

export default Resume
