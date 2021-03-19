import * as React from "react"

import "/src/styles/global.css"
import Head from "/src/components/head"
import Header from "/src/components/header"
import IconLinks from "/src/components/iconLinks"

var img = require('/src/images/7.jpg')

// ------------------------------------------------------------------------------------------------------------------

// styles
const body = {
	maxWidth:"40em",
	margin: "0 auto",
	padding: "5px",
	fontFamily: "Georgia, serif",
	fontSize: "20px",
	lineHeight:"30px",
	color: "#eeeeee",
	backgroundColor: "#20272F",
  }

  const gray = {
	color: "#808080",
    // margin: "20px 0px 30px 0px",
}
  
// ----------------------------------------------------------------------------------------------------------
 
export default function Home() {
  return (
    
    <div>

		<Head title="what were you thinking" />
		
		<div>
			<h1><a  id="pageTitle" href="./NotActuallyTheRealSecret/TarryHaussig/">Tarry Haussig</a></h1>
			<nav id="navbar">		
				<a id="navbarlink" href="/">Home</a>

				<a id="navbarlink" href="/books/">Bookshelf</a>

				<a id="navbarlink" href="/blog/">Writing</a>	
			</nav>
			<hr></hr>
    	</div>
		

		<div id="bookDiv">
			<div>
				<h2>The real secret that I was hiding</h2>

				<p>Yeah I know it's a silly thing to be insecure about, but it's my true dream. Just don't tell anyone, mmkay?</p>


				<img style={{maxWidth: "100%",}} src={img} alt="Not the real secret"/>

				
			</div>


		</div>

		<IconLinks />


	</div>


  );
}

