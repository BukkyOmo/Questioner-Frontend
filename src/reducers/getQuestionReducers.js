import {
  GET_QUESTION_PENDING,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE
} from '../action-types';

const initialState = {
  isLoading: false,
  question: [],
  errorMessage: {}
};

const getQuestionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_QUESTION_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        question: payload
      };
    case GET_QUESTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload
      };
    default:
      return state;
  }
};

export {
  getQuestionReducer,
  initialState
};
