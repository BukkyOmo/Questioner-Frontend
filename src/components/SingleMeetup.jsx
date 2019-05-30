import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleMeetup } from '../actions/singleMeetupActions';
import image1 from '../assets/images/event1.jpg';

export class SingleMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { match, getSingleMeetup: fetchSingleMeetup } = this.props;
    const { id } = match.params;
    console.log(id);
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        token
      }
    };
    fetchSingleMeetup(id, config);
  }

  render() {
    const { singleMeetup, loading } = this.props;
    console.log(singleMeetup);
    return (
      <div>
        {loading ? (
          <img src='https://www.voya.ie/Interface/Icons/LoadingBasketContents.gif' alt='spinner' />
        ) : (
          <main className='meetup-contain'>
            <div className='meetup-flex'>
              <div>
                <img
                  src={singleMeetup.image || image1}
                  alt='specific-meetup'
                  className='meetup-img'
                />
              </div>

              <div className='meetup-details'>
                <h3>{singleMeetup.topic}</h3>

                <h4>{singleMeetup.location}</h4>

                <h5>
                  Date: {new Date(singleMeetup.happeningon).toDateString()}
                </h5>

                <h6>Tags: {singleMeetup.tags}</h6>
                <div>
                  <button className='btn-bg' type='button'>
                    <i className='fas fa-calendar-check fa-2x' />
                  </button>
                  <span>Rsvp this meetup</span>
                </div>
              </div>
            </div>

            <h3>Questions About this Meetup</h3>

            <div className='question-flex'>
              <Link to='question.html' className='question-link'>
                What are the reasons for starting the pre-bootcamp workshop
              </Link>

              <h6>posted by Bukola</h6>
              <hr />

              <div className='icons'>
                <div>
                  <button className='btn-bg' type='button'>
                    <i className='fas fa-caret-up fa-2x bg-blue' />
                  </button>
                  <span className='upvote-amount'>15</span>
                </div>
                <div>
                  <button className='btn-bg' type='button'>
                    <i className='fas fa-caret-down fa-2x bg-red' />
                  </button>
                  <span className='downvote-amount'>10</span>
                </div>
                <div>
                  <button className='btn-bg' type='button'>
                    <i className='fas fa-comment fa-2x' />
                  </button>
                  <span className='comment-amount'>5</span>
                </div>
              </div>
            </div>

            <h3>Ask your question</h3>

            <textarea
              name='ask_questions'
              id='ask_questions'
              cols='83'
              rows='4'
            />
          </main>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.singlemeetup.isLoading,
  singleMeetup: state.singlemeetup.meetup
});

export default connect(
  mapStateToProps,
  { getSingleMeetup }
)(SingleMeetup);
