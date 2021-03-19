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

		<Head title="what were you thinking" />
		<Header />

		

		<div id="bookDiv">
			<div>
				<h2>Heck</h2>

				<p>Okay whatever whatever you found the real secret alright cool sick just don't tell anyone. Here it is</p>

				<p><a href="/secret/secret2/NotActuallyTheRealSecret">The real secret</a></p>

				
			</div>


		</div>

		<IconLinks />


	</div>


  );
}

