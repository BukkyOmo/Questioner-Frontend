import {
  GET_QUESTIONS_PENDING,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE
} from '../action-types';

import axios from '../config/axiosConfig';

// actions
const getQuestionsPending = () => ({
  type: GET_QUESTIONS_PENDING
});

const getQuestionsSuccess = payload => ({
  type: GET_QUESTIONS_SUCCESS,
  payload
});

const getQuestionsFailure = payload => ({
  type: GET_QUESTIONS_FAILURE,
  payload
});

// action creator
const getQuestions = id => async (dispatch) => {
  try {
    dispatch(getQuestionsPending());
    const response = await axios.get(`/meetups/${id}/questions`);
    return dispatch(getQuestionsSuccess(response.data));
  } catch (err) {
    dispatch(getQuestionsFailure(err.response.data));
    return true;
  }
};

export {
  getQuestionsPending,
  getQuestionsSuccess,
  getQuestionsFailure,
  getQuestions
};
