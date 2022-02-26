import React from "react"
import { Layout } from "../components"
import { graphql } from "gatsby"

const BlogTemplate = ({data}) => {
  // const {html} = data.markdownRemark;
  // const {title,tags,date} = data.markdownRemark.frontmatter
  return (
    <div>
      <Layout>
        <div className="text-primary">
          <h1>{title}</h1>
          <p>{tags}</p>
          <div dangerouslySetInnerHTML={{__html:html}} />
        </div>
      </Layout>
    </div>
  )
}

export default BlogTemplate

// export const query = graphql`
//   query BlogsPage($slug: String) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(fromNow: false)
//         tags
//         title
//       }
//     }
//   }
// `
