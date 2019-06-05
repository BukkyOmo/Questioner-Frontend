import {
  GET_QUESTION_PENDING,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE,
  CREATE_QUESTION_PENDING
} from '../action-types';

const initialState = {
  isLoading: false,
  isCreating: false,
  questions: [],
  errorMessage: {}
};

const QuestionsReducer = (state = initialState, { type, payload }) => {
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
        questions: payload.data
      };
    case GET_QUESTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload
      };
    case CREATE_QUESTION_PENDING:
      return {
        ...state,
        isCreating: true
      };
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        isCreating: false,
        questions: [...state.questions, payload]
      };
    case CREATE_QUESTION_FAILURE:
      return {
        ...state,
        isCreating: false,
        errorMessage: payload.error
      };
    default:
      return state;
  }
};

export {
  QuestionsReducer,
  initialState
};
