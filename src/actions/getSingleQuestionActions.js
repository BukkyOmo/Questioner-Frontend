
import {
  GET_A_QUESTION_PENDING,
  GET_A_QUESTION_SUCCESS,
  GET_A_QUESTION_FAILURE
} from '../action-types';

import axios from '../config/axiosConfig';

// actions
const getSingleQuestionPending = () => ({
  type: GET_A_QUESTION_PENDING
});

const getSingleQuestionSuccess = payload => ({
  type: GET_A_QUESTION_SUCCESS,
  payload
});

const getSingleQuestionFailure = payload => ({
  type: GET_A_QUESTION_FAILURE,
  payload
});

// action creators
const getSingleQuestion = id => async (dispatch) => {
  try {
    dispatch(getSingleQuestionPending());
    const response = await axios.get(`/questions/${id}`);
    return dispatch(getSingleQuestionSuccess(response.data.data[0]));
  } catch (error) {
    return dispatch(getSingleQuestionFailure(error.response.data));
  }
};

export {
  getSingleQuestionPending,
  getSingleQuestionSuccess,
  getSingleQuestionFailure,
  getSingleQuestion
};
