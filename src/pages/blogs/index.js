import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../../components"

const Blogs = ({ data }) => {
  const { allMarkdownRemark } = data
  const { nodes } = allMarkdownRemark
  console.log(nodes)
  return (
    <Layout>
      <div className="min-h-screen text-primary">
        <div className="text-primary">
          {nodes &&
            nodes.map(blog => {
              
              return (
                <Link to={`/blogs/${blog.frontmatter.slug}`}>
                  <p>{blog.frontmatter.title}</p>
                </Link>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export default Blogs

export const query = graphql`
  query MyBlogs {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/blogs/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(fromNow: true)
          title
          slug
          tags
        }
        html
        id
      }
    }
  }
`
