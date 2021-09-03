import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

const HomeIndex = ({ data}) => {
  const post = data.markdownRemark

  return (
    <Layout >
      <article
        className="static-page"
        itemScope
        itemType="http://schema.org/Article"
      >
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className="static-page-body"
        />
      </article>
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
      frontmatter: {title: {eq: "Home"}}
      fields: {collection: {eq: "static"}}
      ) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        banner {
          childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`