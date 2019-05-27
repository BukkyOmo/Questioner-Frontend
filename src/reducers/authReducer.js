import {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE
} from '../action-types';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  status: '',
  message: '',
  token: '',
  error: '',
  email: '',
  username: '',
  password: '',
  submit: false,
  redirect: false
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_PENDING:
      return {
        ...state,
        isLoading: payload
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        status: payload.status,
        message: payload.message,
        submit: true
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        status: payload.status,
        error: payload.error,
        submit: false
      };

    case SIGNIN_PENDING:
      return {
        ...state,
        isLoading: true
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        redirect: true,
        token: payload.token,
        status: payload.status,
        message: payload.message,
        isLoggedIn: true
      };

    case SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        redirect: false,
        error: payload.error,
        status: payload.status,
        submit: false,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export {
  authReducer,
  initialState
};
