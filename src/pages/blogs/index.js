import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../../components"

const Blogs = ({ data }) => {
  // const { allMarkdownRemark } = data
  // const { nodes } = allMarkdownRemark
  // console.log(nodes)
  return (
    <Layout>
      <div className="min-h-screen text-primary">
        <div className="text-primary flex flex-col gap-4">
          {/* {nodes &&
            nodes.map(blog => {
              
              return (
                <Link to={`/blogs/${blog.frontmatter.slug}`}>
                  <p>{blog.frontmatter.title}</p>
                </Link>
              )
            })} */}
          <Link to="/blogs" className="hover:-translate-y-2 transition-transform duration-300 block p-4 shadow-lg rounded-xl border-t-2 border-onHover">
            <p className="mb-4 text-sm">May 27, 2020</p>
            <p className="text-2xl font-semibold mb-4 text-secondary text-justify">aksj asfdh fdhcdsacf dh</p>
            <p className="text-justify">loremjh sdfhds dfh sdhsd; sdfpsdhfiosdf sopdfhjsdopf sdpoifhsdopsfosd </p>
          </Link>
          <Link to="/blogs" className=" block p-4 shadow-lg rounded-xl border-t-2 border-onHover">
            <p className="mb-4 text-sm">May 27, 2020</p>
            <p className="text-2xl font-semibold mb-4 text-secondary text-justify">aksj asfdh fdhcdsacf dh</p>
            <p className="text-justify">loremjh sdfhds dfh sdhsd; sdfpsdhfiosdf sopdfhjsdopf sdpoifhsdopsfosd </p>
          </Link>
          <Link to="/blogs" className=" block p-4 shadow-lg rounded-xl border-t-2 border-onHover">
            <p className="mb-4 text-sm">May 27, 2020</p>
            <p className="text-2xl font-semibold mb-4 text-secondary text-justify">aksj asfdh fdhcdsacf dh</p>
            <p className="text-justify">loremjh sdfhds dfh sdhsd; sdfpsdhfiosdf sopdfhjsdopf sdpoifhsdopsfosd </p>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Blogs

// export const query = graphql`
//   query MyBlogs {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/src/blogs/" } }
//       sort: { fields: frontmatter___date, order: DESC }
//     ) {
//       nodes {
//         frontmatter {
//           date(fromNow: true)
//           title
//           slug
//           tags
//           summary
//         }
//         html
//         id
//       }
//     }
//   }
// `
