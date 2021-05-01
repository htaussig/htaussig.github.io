/**

import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class MailChimpForm extends React.Component {
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  // 1. via `.then`
  _handleSubmit = e => {
    e.preventDefault();
    // addToMailchimp(email, listFields) 
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
  }

  // 2. via `async/await`
  // _handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const result = await addToMailchimp(email, listFields)
  //   // I recommend setting `result` to React state
  //   // but you can do whatever you want
  // }

  render () {
    return (
      // <form onSubmit={this._handleSubmit(email, {listFields})}></form>
      <form onSubmit={this._handleSubmit(email)}>

      

      </form>
    )
  }
} */

/* eslint no-console:0 no-alert:0 */
import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class MailChimpForm extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                alert(err)
            })
    }

    render() {
        return (
            <div>
                {/* <p>Submit the form below and check your browser console!</p> */}
                
                <div>
                    <p style={{color: "#4EC5F1"}}>Sign up to hear when I write new things
                        <form onSubmit={this._handleSubmit}>
                            {/* <input
                                type="text"
                                onChange={this._handleChange}
                                placeholder="name"
                                name="name"
                            /> */}
                            <input
                                type="email"
                                onChange={this._handleChange}
                                placeholder="silly@banana.com"
                                name="email"
                            />
                        
                            <input style={{marginLeft: "3px"}} type="submit" value="Sign Up"/>
                            
                        </form>
                    </p>
                </div>
            </div>
        )
    }
}