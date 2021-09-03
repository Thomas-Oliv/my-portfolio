import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/blog/bio"
import Layout from "../components/layout/layout"

const BlogPostTemplate = ({ data}) => {
  const post = data.markdownRemark

  const { previous, next } = data

  return (
    <Layout >
      <article
        className="blog-post static-page-body"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 className="static-page-title" itemProp="headline">{post.frontmatter.title}</h1>
          <p className="center-text">Publish Date: {post.frontmatter.date}</p>
          <hr className="med-break"/>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link className="button-primary" to={'/blog'+previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              
              <Link  className="button-primary" to={'/blog'+next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
      id: { eq: $id }
      ) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`