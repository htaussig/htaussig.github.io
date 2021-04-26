import React from 'react';

import addToMailchimp from 'gatsby-plugin-mailchimp';


export default class SubscribeForm extends React.Component {
    render() {

        return (
            


            <form name="subscribeForm" method="POST" id="subscribe-form" className="subscribe-form">
                <div className="form-row">
                    <label>
                        <span className="screen-reader-text">Email address</span>
                        <input className="subscribe-email" type="email" name="email" placeholder="Enter Email Address..." />
                    </label>
                </div>
                <button className="button" type="submit">
                    Subscribe
                </button>
            </form>
        );
    }

    



}
