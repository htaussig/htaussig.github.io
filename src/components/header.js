import React from "react"

// import { Link } from "gatsby"
//      <Link to="/">Home</Link>

import { useStaticQuery, Link, graphql } from "gatsby"

export default function Header() {

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
    
    <div>
        <h1><a  id="pageTitle" href="/">{data.site.siteMetadata.title}</a></h1>
        <nav id="navbar">		
            <a id="navbarlink" href="/">Home</a>

            <a id="navbarlink" href="/books/">Bookshelf</a>

            <a id="navbarlink" href="/blog/">Writing</a>	
        </nav>
        <hr></hr>
    </div>
      
  );
}