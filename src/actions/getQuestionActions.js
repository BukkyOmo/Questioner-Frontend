import {
  GET_QUESTION_PENDING,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE
} from '../action-types';

import axios from '../config/axiosConfig';

// actions
const getQuestionPending = () => ({
  type: GET_QUESTION_PENDING
});

const getQuestionSuccess = payload => ({
  type: GET_QUESTION_SUCCESS,
  payload
});

const getQuestionFailure = payload => ({
  type: GET_QUESTION_FAILURE,
  payload
});

// action creator
const getQuestion = id => async (dispatch) => {
  try {
    dispatch(getQuestionPending());
    const response = await axios.get(`/meetups/${id}/questions`);
    return dispatch(getQuestionSuccess(response.data));
  } catch (err) {
    dispatch(getQuestionFailure(err.response.data));
    return true;
  }
};

export {
  getQuestionPending,
  getQuestionSuccess,
  getQuestionFailure,
  getQuestion
};
