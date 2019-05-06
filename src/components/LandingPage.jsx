import React, { Component } from 'react';
import conversation from '../assets/images/conversation.svg';
import checklist from '../assets/images/checklist.svg';
import click from '../assets/images/click.svg';

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <h1 className="flex1">Welcome to Questioner</h1>
        <h2 className="flex1">Ask Questions about Upcoming Events.</h2>
      </div>
      <div className="banner2">
        <h2>Planning a meetup  and would love to get Questions upfront?</h2>
        <button className="flex2"><a href="signup.html">Get Started >></a></button>
      </div>

      <div className="center">
        <h1>How it works</h1>
      </div>
      <div class="svg">
       <div className="svg-item">

        <div className="justify-center">
            <img src={ conversation } alt="conversation-image" />
        </div>

        <p>Got any questions concerning any</p>
        <p>of the events posted here?</p>

      </div>
      <div className="svg-item">
        <div className="justify-center">
            <img src={ click } alt="checklist-image" />
        </div>
                <p>Click on the get Started button</p>
      </div>
      <div className="svg-item">
          <div className="justify-center">
              <img src={ checklist } alt="crowd-image" />
          </div>
            <p>View the event, ask your questions and vote</p>
            <p>for questions you also wish to know about</p>
        </div>
      </div>
    </React.Fragment>
    )
  }

export default LandingPage;
