import React from "react"
import { Layout } from "../components"
import { graphql } from "gatsby"
import {displayDate} from "../utils";

const BlogTemplate = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, tags, date } = data.markdownRemark.frontmatter
  console.log(data.markdownRemark.frontmatter);
  
  return (
    <div>
      <Layout>
        <div className="text-primary min-h-max p-2">
          <h1 className="text-center text-4xl text-secondary capitalize mb-4">
            {title}
          </h1>
          <p className="text-left mb-4">{displayDate(date)}</p>
         
          <div dangerouslySetInnerHTML={{__html:html}} />

          {
            tags.split(",").map((tag,index) => <div key={index} className="mt-4 flex items-center"><span>{tag}</span></div>)
          }
        </div>
      </Layout>
    </div>
  )
}

export default BlogTemplate

export const query = graphql`
  query BlogsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        summary
        tags
        title
        thumb {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
