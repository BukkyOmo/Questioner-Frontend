import { GET_QUESTION_SUCCESS } from '../action-types';

import axios from '../config/axiosConfig';

// action
const getAQuestionSuccess = payload => ({
  type: GET_QUESTION_SUCCESS,
  payload
});

// action creator
const getAQuestion = id => async (dispatch) => {
  try {
    const response = await axios.get(`/questions/${id}`);
    return dispatch(getAQuestionSuccess(response.data));
  } catch (error) {
    return true;
  }
};

export {
  getAQuestionSuccess,
  getAQuestion
};
