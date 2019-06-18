import {
  CREATE_COMMENT_PENDING,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
} from '../action-types';

import axios from '../config/axiosConfig';

// actions
const createCommentPending = () => ({
  type: CREATE_COMMENT_PENDING
});

const createCommentSuccess = payload => ({
  type: CREATE_COMMENT_SUCCESS,
  payload
});

const createCommentFailure = payload => ({
  type: CREATE_COMMENT_FAILURE,
  payload
});

// action creators
const createComment = comment => async (dispatch) => {
  try {
    dispatch(createCommentPending());
    const response = await axios.post('/comments', comment);
    return dispatch(createCommentSuccess(response.data.data[0]));
  } catch (error) {
    return dispatch(createCommentFailure(error.response.data));
  }
};
export {
  createCommentPending,
  createCommentSuccess,
  createCommentFailure,
  createComment
};
