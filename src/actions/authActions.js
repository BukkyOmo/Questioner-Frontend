// import Decode from '../utils/authorize';
import jwtDecode from 'jwt-decode';
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

const signinSuccess = payload => ({
  type: SIGNIN_SUCCESS,
  payload
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
    const { user } = response.data.data[0];
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    const decoded = jwtDecode(token);
    const { isAdmin } = decoded;
    dispatch(
      signupSuccess({
        token,
        status,
        message,
        isAdmin
      })
    );
  } catch (err) {
    const { status } = err.response;
    const { error } = err.response.data;
    dispatch(signupFailure({ status, error }));
  }
};

const signInUser = (userObject, config) => async (dispatch) => {
  try {
    dispatch(signinPending());
    const response = await axios.post('/auth/signin', userObject, config);
    const { token } = response.data.data[0];
    const { user } = response.data.data[0];
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    const decoded = jwtDecode(token);
    const { isAdmin } = decoded;
    dispatch(signinSuccess({ isAdmin, user }));
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
