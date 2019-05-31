import {
  CREATE_QUESTION_PENDING,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE
} from '../action-types';

const initialState = {
  isLoading: false,
  topic: '',
  body: '',
  status: '',
  message: '',
  error: '',
  submit: false
};

const createQuestionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_QUESTION_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: payload.status,
        message: payload.message,
        submit: false
      };
    case CREATE_QUESTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };
    default:
      return state;
  }
};

export {
  createQuestionReducer,
  initialState
};
