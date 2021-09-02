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
        <header className="color-secondary page-title">
          <h1  itemProp="headline">{post.frontmatter.title}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
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
      frontmatter: {title: {eq: "About"}}
      ) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
    }
  }
`