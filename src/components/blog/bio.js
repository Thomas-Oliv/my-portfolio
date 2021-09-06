/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
//Get data for the biography card.
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            linkedIn
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  //Generate the biography card with my profile picture
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../../images/profile-pic.jpg"
        width={70}
        height={70}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        //Link my github & linkedIn
        <p className="color-dark bio-text">
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` You should follow me on `}
          <a className="color-dark" href={`https://github.com/${social?.github || ``}`}>
             Github 
          </a>
          {` or `}
          <a className="color-dark" href={`https://linkedin.com/in/${social?.linkedIn || ``}`}>
             LinkedIn
          </a>
          {'. You can also learn more about me '}
          <Link to="/about" className="color-dark">Here</Link>
          .
        </p>
      )}
    </div>
  )
}

export default Bio
