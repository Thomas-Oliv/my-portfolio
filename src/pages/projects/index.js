import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/layout"
import Seo from "../../components/layout/seo"

const ExperienceIndex = ({ data}) => {
  const post = data.markdownRemark

  return (
    <Layout >
      <Seo title="My Projects"/>
      <article
        className="static-page"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header >
          <h1 className="static-page-title" itemProp="headline">{post.frontmatter.title}</h1>
          <hr className="med-break"/>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className="static-page-body"
        />
      </article>
    </Layout>
  )
}

export default ExperienceIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
      frontmatter: {title: {eq: "Projects"}}
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