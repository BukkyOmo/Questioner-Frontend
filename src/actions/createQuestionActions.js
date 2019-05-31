import {
  CREATE_QUESTION_PENDING,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE
} from '../action-types';

import axios from '../config/axiosConfig';

// actions
const createQuestionPending = () => ({
  type: CREATE_QUESTION_PENDING
});

const createQuestionSuccess = payload => ({
  type: CREATE_QUESTION_SUCCESS,
  payload
});

const createQuestionFailure = payload => ({
  type: CREATE_QUESTION_FAILURE,
  payload
});

// action creators
const createQuestion = question => async (dispatch) => {
  try {
    dispatch(createQuestionPending());
    const response = await axios.post('/questions', question);
    console.log(response.data);
    dispatch(createQuestionSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(createQuestionFailure(err.response));
  }
};

export {
  createQuestionPending,
  createQuestionSuccess,
  createQuestionFailure,
  createQuestion
};
