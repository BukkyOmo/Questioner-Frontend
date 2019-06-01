import React from 'react';
import { Link } from 'react-router-dom';
import conversation from '../assets/images/conversation.svg';
import checklist from '../assets/images/checklist.svg';
import click from '../assets/images/click.svg';
import event2 from '../assets/images/event2.jpg';
import event3 from '../assets/images/event3.jpg';
import event4 from '../assets/images/event4.jpg';

const LandingPage = () => (
  <React.Fragment>
    <div className='banner'>
      <h1 className='flex1'>Welcome to Questioner</h1>
      <h2 className='flex1'>Ask Questions about Upcoming Events.</h2>
    </div>
    <div className='banner2'>
      <h2>Planning a meetup and would love to get Questions upfront?</h2>
      <button className='flex2' type='button'>
        <Link to='/signup'>Get Started &gt;&gt;</Link>
      </button>
    </div>
    <div className='center'>
      <h1>How it works</h1>
    </div>
    <div className='svg'>
      <div className='svg-item'>
        <div className='justify-center'>
          <img src={conversation} alt='conversation' />
        </div>
        <p>Got any questions concerning any</p>
        <p>of the events posted here?</p>
      </div>
      <div className='svg-item'>
        <div className='justify-center'>
          <img src={click} alt='checklist' />
        </div>
        <p>Click on the get Started button</p>
      </div>
      <div className='svg-item'>
        <div className='justify-center'>
          <img src={checklist} alt='crowd' />
        </div>
        <p>View the event, ask your questions and vote</p>
        <p>for questions you also wish to know about</p>
      </div>
    </div>

    <div className='center'>
      <h1>Meetups</h1>
    </div>
    <main className='main'>
      <div className='flex3'>
        <img src={event2} alt='eventimage' />

        <div className='flex-item'>
          <h3>SOCIAL MEDIA WEEK</h3>

          <p>Sat 22nd March, 2019</p>

          <p>Zone Tech Park, Gbagada.</p>
        </div>
      </div>

      <div className='flex3'>
        <img src={event3} alt='eventimage' />

        <div className='flex-item'>
          <h3>devfest Uyo</h3>

          <p>Sat 22nd March, 2019</p>

          <p>Bridge event center, Uyo</p>
        </div>
      </div>

      <div className='flex3'>
        <img src={event4} alt='eventimage' />

        <div className='flex-item'>
          <h3>Andela workshop</h3>

          <p>Sat 22nd March, 2019</p>

          <p>Andela Nigeria Epic Towers. Lagos</p>
        </div>
      </div>

      <div className='flex3'>
        <img src={event4} alt='eventimage' />

        <div className='flex-item'>
          <h3>Andela workshop</h3>

          <p>Sat 22nd March, 2019</p>

          <p>Andela Nigeria Epic Towers. Lagos</p>
        </div>
      </div>
      <div className='flex3'>
        <img src={event4} alt='eventimage' />

        <div className='flex-item'>
          <h3>Andela workshop</h3>

          <p>Sat 22nd March, 2019</p>

          <p>Andela Nigeria Epic Towers. Lagos</p>
        </div>
      </div>
      <div className='flex3'>
        <img src={event4} alt='eventimage' />

        <div className='flex-item'>
          <h3>Andela workshop</h3>

          <p>Sat 22nd March, 2019</p>

          <p>Andela Nigeria Epic Towers. Lagos</p>
        </div>
      </div>
    </main>

    <section>
      <div className='section'>
        <Link to='/signin'>View all meetups</Link>
      </div>
    </section>
  </React.Fragment>
);

export default LandingPage;
