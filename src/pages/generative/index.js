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

const center = {
	margin: "0px 120px 0px 120px",
}
  
// ----------------------------------------------------------------------------------------------------------
 
export default function Home() {
  return (
    
    <div>

		<Head title="Generative Art" />
		<Header />

		

		<div id="bookDiv">
			<div>
				<h2> <u>Generative Art</u> </h2>

				<div style = {center}>
					<br></br>

					<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Flow Fields adapted from <a href="https://twitter.com/shiffman?ref_src=twsrc%5Etfw">@shiffman</a> <a href="https://twitter.com/hashtag/processing?src=hash&amp;ref_src=twsrc%5Etfw">#processing</a> <a href="https://twitter.com/hashtag/generative?src=hash&amp;ref_src=twsrc%5Etfw">#generative</a> <a href="https://t.co/rkpoDjxYXz">pic.twitter.com/rkpoDjxYXz</a></p>&mdash; Harry Taussig (@harry_taussig) <a href="https://twitter.com/harry_taussig/status/1064727069261746176?ref_src=twsrc%5Etfw">November 20, 2018</a></blockquote>
					
					<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Take <a href="https://twitter.com/shiffman?ref_src=twsrc%5Etfw">@shiffman</a>&#39;s flowfield, map x and y to the two angles of a torus, and turn the particles into pyramids that point inwards. Code here: <a href="https://t.co/LaElIf7uSi">https://t.co/LaElIf7uSi</a> <a href="https://twitter.com/hashtag/processing?src=hash&amp;ref_src=twsrc%5Etfw">#processing</a> <a href="https://twitter.com/hashtag/generative?src=hash&amp;ref_src=twsrc%5Etfw">#generative</a>. <a href="https://t.co/5Y8YUTaZNA">pic.twitter.com/5Y8YUTaZNA</a></p>&mdash; Harry Taussig (@harry_taussig) <a href="https://twitter.com/harry_taussig/status/1119750575992840192?ref_src=twsrc%5Etfw">April 20, 2019</a></blockquote>
					

					<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">These are the colors I associate with these shapes, except maybe hexagons are yellow <a href="https://twitter.com/hashtag/processing?src=hash&amp;ref_src=twsrc%5Etfw">#processing</a> <a href="https://twitter.com/hashtag/generative?src=hash&amp;ref_src=twsrc%5Etfw">#generative</a> <a href="https://twitter.com/hashtag/design?src=hash&amp;ref_src=twsrc%5Etfw">#design</a> same code as last time, but it&#39;s updated now <a href="https://t.co/2nah4nk3C1">pic.twitter.com/2nah4nk3C1</a></p>&mdash; Harry Taussig (@harry_taussig) <a href="https://twitter.com/harry_taussig/status/1067991176031232000?ref_src=twsrc%5Etfw">November 29, 2018</a></blockquote>
					
					<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Survivor - Evolutionary Steering Agents, adapted from a <a href="https://twitter.com/shiffman?ref_src=twsrc%5Etfw">@shiffman</a> coding challenge, that can choose to stick with their team and attack the others <a href="https://t.co/7uMYKWh5gh">pic.twitter.com/7uMYKWh5gh</a></p>&mdash; Harry Taussig (@harry_taussig) <a href="https://twitter.com/harry_taussig/status/1069407721001242624?ref_src=twsrc%5Etfw">December 3, 2018</a></blockquote>
				
					<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Reaction-Diffusion cells colored! Started with code from <a href="https://twitter.com/shiffman?ref_src=twsrc%5Etfw">@shiffman</a> and inspired by <a href="https://twitter.com/nervous_system?ref_src=twsrc%5Etfw">@nervous_system</a>. code here: <a href="https://t.co/ME0SibKpc9">https://t.co/ME0SibKpc9</a> <a href="https://twitter.com/hashtag/processing?src=hash&amp;ref_src=twsrc%5Etfw">#processing</a> <a href="https://twitter.com/hashtag/generative?src=hash&amp;ref_src=twsrc%5Etfw">#generative</a> <a href="https://t.co/23bV11iyw4">pic.twitter.com/23bV11iyw4</a></p>&mdash; Harry Taussig (@harry_taussig) <a href="https://twitter.com/harry_taussig/status/1082094693981319168?ref_src=twsrc%5Etfw">January 7, 2019</a></blockquote>

					<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Are the triangles facing up or down? <a href="https://twitter.com/hashtag/processing?src=hash&amp;ref_src=twsrc%5Etfw">#processing</a> <a href="https://t.co/GLqUNtfcz6">pic.twitter.com/GLqUNtfcz6</a></p>&mdash; Harry Taussig (@harry_taussig) <a href="https://twitter.com/harry_taussig/status/1085282468306014208?ref_src=twsrc%5Etfw">January 15, 2019</a></blockquote>



					<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/processing?src=hash&amp;ref_src=twsrc%5Etfw">#processing</a> <a href="https://twitter.com/hashtag/generative?src=hash&amp;ref_src=twsrc%5Etfw">#generative</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> Conway&#39;s game of life + Digital Rain. I know it&#39;s just random characters by I swear I keep seeing words in it. Inspired by <a href="https://twitter.com/thecodingtrain?ref_src=twsrc%5Etfw">@thecodingtrain</a>&#39;s tutorial with Emily Xie <a href="https://t.co/tJzD5xIsjd">pic.twitter.com/tJzD5xIsjd</a></p>&mdash; Harry Taussig (@harry_taussig) <a href="https://twitter.com/harry_taussig/status/1208458402671874048?ref_src=twsrc%5Etfw">December 21, 2019</a></blockquote>
				

					<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Flow fields with suggested shapes <a href="https://twitter.com/hashtag/generative?src=hash&amp;ref_src=twsrc%5Etfw">#generative</a> <a href="https://twitter.com/hashtag/processing?src=hash&amp;ref_src=twsrc%5Etfw">#processing</a> <a href="https://t.co/kFbChcsNQM">pic.twitter.com/kFbChcsNQM</a></p>&mdash; Harry Taussig (@harry_taussig) <a href="https://twitter.com/harry_taussig/status/1066897428673191939?ref_src=twsrc%5Etfw">November 26, 2018</a></blockquote>

					<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Our little torus, with both the color and inner radius mapped to 3D Simplex Noise (thanks <a href="https://twitter.com/shiffman?ref_src=twsrc%5Etfw">@shiffman</a>!) Got the point of a torus, and a point of the sphere, and moved between the two. <a href="https://twitter.com/hashtag/processing?src=hash&amp;ref_src=twsrc%5Etfw">#processing</a> <a href="https://twitter.com/hashtag/genertaive?src=hash&amp;ref_src=twsrc%5Etfw">#genertaive</a>. Code here: <a href="https://t.co/4FnRqapvGf">https://t.co/4FnRqapvGf</a> <a href="https://t.co/jl5yx5cH0L">pic.twitter.com/jl5yx5cH0L</a></p>&mdash; Harry Taussig (@harry_taussig) <a href="https://twitter.com/harry_taussig/status/1127078705254285312?ref_src=twsrc%5Etfw">May 11, 2019</a></blockquote>

					<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Flow fields with black to white gradient. Looks like smoke! <a href="https://twitter.com/hashtag/generative?src=hash&amp;ref_src=twsrc%5Etfw">#generative</a> <a href="https://twitter.com/hashtag/processing?src=hash&amp;ref_src=twsrc%5Etfw">#processing</a> <a href="https://t.co/F7Gws8Jsr2">pic.twitter.com/F7Gws8Jsr2</a></p>&mdash; Harry Taussig (@harry_taussig) <a href="https://twitter.com/harry_taussig/status/1065424150385344512?ref_src=twsrc%5Etfw">November 22, 2018</a></blockquote>
					
					<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">loopy squares that loop <a href="https://twitter.com/hashtag/processing?src=hash&amp;ref_src=twsrc%5Etfw">#processing</a> <a href="https://twitter.com/hashtag/webgl?src=hash&amp;ref_src=twsrc%5Etfw">#webgl</a> <a href="https://twitter.com/hashtag/generative?src=hash&amp;ref_src=twsrc%5Etfw">#generative</a> <a href="https://t.co/mssCqPfHVI">pic.twitter.com/mssCqPfHVI</a></p>&mdash; Harry Taussig (@harry_taussig) <a href="https://twitter.com/harry_taussig/status/1196255513463291904?ref_src=twsrc%5Etfw">November 18, 2019</a></blockquote>
				
				
				</div>
				
				
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