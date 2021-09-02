import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/layout"

const AboutIndex = ({ data}) => {
  console.log(data);
  const post = data.markdownRemark

  return (
    <Layout >
      <article
        className="static-page"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header >
          <h1 className="static-page-title" itemProp="headline">{post.frontmatter.name}</h1>
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

export default AboutIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
      frontmatter: {title: {eq: "about-static"}}
      ) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        name
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