import {
  CREATE_COMMENT_PENDING,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
} from '../action-types';

const initialState = {
  isLoading: false,
  comment: {},
  errorMessage: {}
};

const commentReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case CREATE_COMMENT_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comment: payload
      };
    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload
      };
    default:
      return {
        initialState
      };
  }
};
export {
  initialState,
  commentReducer
};
