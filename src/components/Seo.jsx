import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, slug, isBlogPost }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          siteLogo
          siteUrl
          title
          banner
          twitter
        }
      }
    }
  `)
  const defaults = site.siteMetadata;
  title = title || defaults.title;
  description = description || defaults.description;
  let banner = defaults.banner;
  let url = `${defaults.siteUrl}${slug || ""}`;
  let twitter = defaults.twitter;
  let ogimage = `${defaults.siteUrl}${banner}`
  if (isBlogPost) {
    title = title + " | Jawad Vajeeh"
  }
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="url" content={url} />
      <meta name="description" content={description} />
      {ogimage && <meta name="image" content={ogimage} />}
      <link rel="canonical" href={url} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogimage && <meta property="og:image" content={ogimage} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogimage && <meta name="twitter:image" content={ogimage} />}
    </Helmet>
  )
}

export default Seo
