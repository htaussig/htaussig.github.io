import React from "react"

import { useStaticQuery, Link, graphql } from "gatsby"

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
    
      
      <head>
        
        <title>{props.title} | {data.site.siteMetadata.title}</title>
      
      </head>
      
  );
}
