import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../../components"
import { displayDate } from "../../utils"

const Blogs = ({ data }) => {
  const { allMarkdownRemark } = data
  const { nodes } = allMarkdownRemark
  
  return (
    <Layout>
      <div className="min-h-screen text-primary">
        <div className="text-primary flex flex-col gap-4">
          {nodes &&
            nodes.map(blog => {
              return (
                <Link
                  key={blog.id}
                  to={`/blogs/${blog.frontmatter.slug}`}
                  className="hover:-translate-y-2 transition-transform duration-300 block p-4 shadow-lg rounded-xl border-t-2 border-onHover hover:border-2 hover:border-onHover "
                >
                  <p className="mb-4 text-sm">
                    {displayDate(blog.frontmatter.date)}
                  </p>
                  <p className="text-2xl font-semibold mb-4 text-secondary text-justify">
                    {blog.frontmatter.title}
                  </p>
                  <p className="text-justify">{blog.frontmatter.summary}</p>
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
          date
          slug
          summary
          tags
         
        }
        html
        id
      }
    }
  }
`
