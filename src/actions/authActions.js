import {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE
} from '../action-types';

import axios from '../config/axiosConfig';

// actions
const signupPending = () => ({
  type: SIGNUP_PENDING
});

const signupSuccess = ({ status, message, token }) => ({
  type: SIGNUP_SUCCESS,
  payload: {
    status,
    message,
    token
  }
});

const signupFailure = ({ status, error }) => ({
  type: SIGNUP_FAILURE,
  payload: {
    status,
    error
  }
});

const signinPending = () => ({
  type: SIGNIN_PENDING
});

const signinSuccess = ({ token, message, status }) => ({
  type: SIGNIN_SUCCESS,
  payload: {
    token,
    message,
    status
  }
});

const signinFailure = ({ error, status }) => ({
  type: SIGNIN_FAILURE,
  payload: {
    error,
    status
  }
});

// action-creators
const signUpUser = userObject => async (dispatch) => {
  try {
    dispatch(signupPending());
    const response = await axios.post('/auth/signup', userObject);
    const { status } = response;
    const { message } = response.data;
    const { token } = response.data.data[0];
    dispatch(signupSuccess({ token, status, message }));
  } catch (err) {
    const { status } = err.response;
    const { error } = err.response.data;
    dispatch(signupFailure({ status, error }));
  }
};

const signInUser = user => async (dispatch) => {
  try {
    dispatch(signinPending());
    const response = await axios.post('/auth/signin', user);
    const { token } = response.data.data[0];
    const { status } = response.data;
    const { message } = response.data;
    dispatch(signinSuccess({ token, status, message }));
    localStorage.setItem('token', token);
  } catch (err) {
    const { status } = err.response.data;
    const { error } = err.response.data;
    dispatch(signinFailure({ status, error }));
  }
};

export {
  signupPending,
  signupSuccess,
  signupFailure,
  signUpUser,
  signinPending,
  signinSuccess,
  signinFailure,
  signInUser
};
