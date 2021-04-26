import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

var favicon = require('/src/images/favicon.png')

export default function Head(props) {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
      
    <Helmet>
      {/* <meta charSet="utf-8" /> */}
      <link rel="shortcut icon" href={favicon} />
      <title>{props.title} | {data.site.siteMetadata.title}</title>
      
    </Helmet>
      
  );
}
