import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleMeetup } from '../actions/singleMeetupActions';
import { createQuestion } from '../actions/createQuestionActions';
import { getQuestion } from '../actions/getQuestionActions';
import image1 from '../assets/images/event1.jpg';

export class SingleMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  componentDidMount() {
    const {
      computedMatch,
      getSingleMeetup: fetchSingleMeetup,
      getQuestion: fetchMeetupQuestions
    } = this.props;
    const { id } = computedMatch.params;
    fetchSingleMeetup(id);
    fetchMeetupQuestions(id);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      computedMatch: {
        params: { id }
      }
    } = this.props;
    const { title, body } = this.state;
    const data = {
      title,
      body,
      id
    };
    const { createQuestion: question } = this.props;
    question(data);
  };

  render() {
    const { singleMeetup, loading, singleQuestion: questions } = this.props;
    const { title, body } = this.state;
    return (
      <div>
        {loading ? (
          <img
            src='https://www.voya.ie/Interface/Icons/LoadingBasketContents.gif'
            alt='spinner'
            className='spinner'
          />
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
            <h3>Ask Questions</h3>
            <h4 htmlFor='question-title'>Enter question title</h4>
            <input
              type='text'
              id='question-title'
              name='title'
              onChange={this.handleChange}
              value={title}
            />
            <h4 htmlFor='questions'>Enter a question</h4>
            <textarea
              name='body'
              id='ask_questions'
              cols='83'
              rows='4'
              onChange={this.handleChange}
              value={body}
              placeholder='Post a question'
            />
            <button
              type='submit'
              id='submit-question'
              className='submit'
              onClick={this.handleSubmit}
            >
              Post
            </button>
            <h3>Questions About this Meetup</h3>
            {questions
              && questions.map(question => (
                <div className='question-flex' key={question.id}>
                  <h6>{question.title}</h6>
                  <Link
                    to={`/question/${question.id}`}
                    className='question-link'
                  >
                    {question.body}
                  </Link>
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
              ))}
          </main>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.singlemeetup.isLoading,
  singleMeetup: state.singlemeetup.meetup,
  singleQuestion: state.questionStore.questions
});

export default connect(
  mapStateToProps,
  { getSingleMeetup, createQuestion, getQuestion }
)(SingleMeetup);
