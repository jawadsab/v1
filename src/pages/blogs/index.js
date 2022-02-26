import { graphql } from 'gatsby';
import React from 'react'
import {Layout} from '../../components';

const Blogs = ({data}) => {
    // console.log(data)
  return (
    <Layout>
        <div className="min-h-screen"></div>
    </Layout>
  )
}

export default Blogs;

// export const query = graphql`
// query MyBlogs {
//     allMarkdownRemark {
//       nodes {
//         id
//         frontmatter {
//           date
//           title
//           tags
//         }
//         html
//       }
//     }
//   }
// `;