import React from "react"

// import { Link } from "gatsby"
//      <Link to="/">Home</Link>

// import { useStaticQuery, Link, graphql } from "gatsby"

export default function EvilHeader() {



  return (
    
    <div>
        <h1><a  id="pageTitle" href="/secret/secret2/NotActuallyTheRealSecret/TarryHaussig/">Tarry Haussig</a></h1>
        <nav id="navbar">		
            <a id="navbarlink" href="/secret/secret2/NotActuallyTheRealSecret/TarryHaussig/">Home</a>

            <a id="navbarlink" href="/secret/secret2/NotActuallyTheRealSecret/TarryHaussig/books/">Bookshelf</a>

            <a id="navbarlink" href="/secret/secret2/NotActuallyTheRealSecret/TarryHaussig/blog/">Writing</a>	
        </nav>
        <hr></hr>
    </div>
      
  );
}