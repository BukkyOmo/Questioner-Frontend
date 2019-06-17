import {
  GET_A_QUESTION_PENDING,
  GET_A_QUESTION_SUCCESS,
  GET_A_QUESTION_FAILURE
} from '../action-types';

const initialState = {
  isLoading: false,
  error: false,
  question: {},
  errorMessage: {}
};

const singleQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_A_QUESTION_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true
      };
    case GET_A_QUESTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        question: action.payload
      };
    case GET_A_QUESTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export {
  singleQuestionReducer,
  initialState
};
