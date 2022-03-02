import React from "react"
import { Layout,Seo } from "../components"
import { graphql } from "gatsby"
import { displayDate } from "../utils"

const BlogTemplate = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, tags, date,summary,slug } = data.markdownRemark.frontmatter

  return (
    <div>
      <Layout>
        <Seo title={title} isBlogPost={true} description={summary} slug={`/blogs/${slug}`} />
        <div className="text-primary min-h-max p-2">
          <h1 className="text-left text-4xl md:text-3xl text-secondary capitalize mb-4">
            {title}
          </h1>
          <p className="text-left mb-4">{displayDate(date)}</p>

          <div dangerouslySetInnerHTML={{ __html: html }} />

          <div className="mt-8 flex items-center gap-4">
            {tags.split(",").map((tag, index) => (
              <span
                className="text-secondary bg-onHover p-2 rounded-md cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                key={index}
              >
                #{tag}
              </span>
            ))}
          </div>
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
      }
    }
  }
`
