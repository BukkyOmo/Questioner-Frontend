import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorPage from '../utils/ErrorPage';
import { getSingleQuestion } from '../actions/getSingleQuestionActions';

export class SingleQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      computedMatch,
      getSingleQuestion: fetchSingleQuestion
    } = this.props;
    const { id } = computedMatch.params;
    fetchSingleQuestion(id);
  }

  render() {
    const { loading, singleQuestion, error } = this.props;
    if (error) {
      return <ErrorPage />;
    }
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
            <div className='question-flex'>
              <h2>{singleQuestion.body}</h2>

              <h6>posted by Bukola on 21/04/2018</h6>

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
                    <i className='fas fa-comment fa' />
                  </button>

                  <span className='comment-amount'>5</span>
                </div>
              </div>
            </div>

            <h3>Post a comment</h3>

            <textarea
              name='ask_questions'
              id='ask_questions'
              cols='83'
              rows='4'
              placeholder='Post a comment'
            />

            <input type='submit' value='Post' className='submit' />

            <h3 className='mt_30'>Comments</h3>

            <div className='question-flex'>
              <p className='comment-para'>
                I think the reason is to help incoming bootcampers
              </p>

              <h6>posted 20 minutes ago by Tony</h6>
            </div>
          </main>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.singleQuestion.isLoading,
  error: state.singleQuestion.error,
  singleQuestion: state.singleQuestion.question
});
export default connect(
  mapStateToProps,
  { getSingleQuestion }
)(SingleQuestion);
