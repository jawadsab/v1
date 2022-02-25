import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function NotFound({ data }) {
  console.log(data)
  return (
    <div className="h-screen bg-darkBlue flex items-center justify-center">
      <Img
        className="w-64 rounded-lg shadow-md -hue-rotate-60 hover:hue-rotate-0"
        fluid={data.file.childImageSharp.fluid}
      />
    </div>
  )
}

export const notfound = graphql`
  query notfound {
    file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
