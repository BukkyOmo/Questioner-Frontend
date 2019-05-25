import {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../action-types';

const initialState = {
  isLoading: false,
  status: '',
  message: '',
  token: '',
  email: '',
  username: '',
  submit: false,
  redirect: false
};

const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_PENDING':
      return {
        ...state,
        isLoading: action.payload
      };

    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        submit: true
      };

    case 'SIGNUP_FAILURE':
      return {
        ...state,
        status: action.payload.status,
        error: action.payload.error,
        submit: false
      };
    default:
      return state;
  }
};

export {
  SignUpReducer,
  initialState
};
