import * as React from "react"

import "/src/styles/global.css"
import Head from "/src/components/head"
import Header from "/src/components/header"
import IconLinks from "/src/components/iconLinks"



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

		<Head title="Now" />
		<Header />

		

		<div id="bookDiv">
			<div>
				<h2> <u>Things I'm doing right now</u> </h2>

					<br></br>
				
					<h3>Running Haverford Effective Altruism</h3>
					<p>Tried to join the gorup but it didn't exist. Trying to get it restarted.</p>

					<h3>Taking a semester off from Haverford College</h3>
					<p>Get those online classes outta here. We don't need that.</p>

					<h3>Working on this website</h3>
					<p>Wanted to code some stuff and making it has been fun. Currently using <a href = "https://gatsbyjs.com/" target="_blank">Gatsby</a></p>

					<h3>Reading a bunch and taking notes like a nerd</h3>
					<p>I'm using <a href = "https://obsidian.md/" target="_blank">Obsidian</a> to incrementally work out ideas in an <a href = "https://notes.andymatuschak.org/z4SDCZQeRo4xFEQ8H4qrSqd68ucpgE6LU155C" target="_blank">Evergreen notes</a> framework.
					Would reccomend if you don't like the fact that you're going to forget most of what you read.</p>

					<h3>Writing on this website</h3>
					<p>When I get interested in the ideas I'm writing in my Evergreen notes, sometimes I put them together and write something bigger. 
						Trying to learn how to better communicate my ideas since it seems universally useful and also helpful to force yourself to 
						think more clearly. Helps me figure out what I actually believe. 
					</p>
	
					<p style = {gray}>Find other friendly nerds on <a href = "https://nownownow.com/" target="_blank">nownownow.com</a></p>
				
				
			</div>


		</div>

		<IconLinks />


	</div>

    // </div>

  );
}



// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `