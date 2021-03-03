import React from "react"

import "/src/styles/global.css"
import Head from "/src/components/head"
import Header from "/src/components/header"
import BookFooter from "/src/components/bookFooter"
import BlogPostInfo from "/src/components/blogPostInfo"

var bookCover = require('/src/images/BookCovers/anything.jpg')

export default function BlogFooter(props) {
  return (

    <div>
    
    <Head title={props.title} />
		<Header />

			<div id="bookDiv">
                {/* TODO: how to auto load book cover based on a props variable */}
				<img id="bookCover" src={bookCover} ></img> 

				<h2>{props.title} by {props.author}</h2>


				<p id="bookInfo">
						Rating: {props.rating}
					<br></br> 
						Date Read: {props.dateRead}
					<br></br>
					<br></br>
					 
				</p>

				<h3>The Book In 3 Sentences</h3>
				<p>
                    {props.threeSentences}
				</p>

				<h3>Who Should Read It?</h3>
				<p>
					Anyone who thinks they want to start a business. Anyone who feels like the things their culture pushes them to want are misaligned with what they really want (everyone). Anyone who works too hard or thinks too much. 

				</p>

				<h3>My Top 3 Quotes</h3>
				<p>
					Then, when Disc Makers bought CD Baby, they bought it not from me but from the trust, turning it into $22 mil ion cash to benefit music education. It's not that I'm altruistic. I'm sacrificing nothing. I've just learned what makes me happy. And doing it this way made me the happiest. I get the deeper happiness of knowing that the lucky streak I've had in my life will benefit tons of people—not just me. I get the pride of knowing I did something irreversibly smart before I could change my mind. I get the safety of knowing I won't be the target of wrongful lawsuits, since I have very little net worth. I get the unburdened freedom of having it out of my hands so I can't do something stupid. But most of all , I get the constant priceless reminder that I have enough.
					<br></br><br></br>
					Are you helping people? Are they happy? Are you happy? Are you profitable? Isn't that enough?
					<br></br><br></br>
					Just pay close attention to what excites you and what drains you. Pay close attention to when you're being the real you and when you're trying to impress an invisible jury. Even if what you're doing is slowing the growth of your business—if it makes you happy, that's OK. It's your choice to remain small.
				</p>
				<h3>How the Book Changed Me</h3>
				<p>
					Recognizing a business as really just another avenue to help people. I was most struck by Derek saying he really didn't care if his business died because people no longer needed it. That would mean he achieved his goal! 
					<br></br><br></br>
					Chilling out about doing what I think I'm supposed to do and more doing just what I enjoy (will also probably be more effective over the long run)
					<br></br><br></br>
					Actively trying to relate everything I do that I don't inherently enjoy to a higher goal. So if I am reading a book I don't like, there better be a good reason for that (like better knowledge of a problem that I can then help fix) or else why am I forcing it?
					<br></br>
					<BookFooter />
				</p>
			</div>

    </div>
      
  );
}

        