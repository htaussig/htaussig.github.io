import * as React from "react"

import "/src/styles/global.css"
import Head from "/src/components/head"
import Header from "/src/components/header"
import IconLinks from "/src/components/iconLinks"
import BookPostsPreview from "/src/components/bookPostsPreview"


export default function Home() {
	return (
	  
	  <div>
  
		  <Head title="Evil Bookshelf" />
		  <Header />


			<div id="bookDiv">
				<div style={{color: "gray"}}>
					<h2><u>Books Notes</u></h2>

					<p>Takeaways from the books I read (Starting from 2021) 
						<br></br>
						*Summary format stolen from <a href="https://www.youtube.com/watch?v=AjoxkxM_I5g&t=683s&ab_channel=AliAbdaal">Ali Abdaal</a>
					</p>
				</div>

				<hr></hr>

				<BookPostsPreview />

			</div>	

		</div>

	);
}

