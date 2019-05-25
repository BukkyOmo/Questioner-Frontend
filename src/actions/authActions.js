import {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../action-types';

import axios from '../config/axiosConfig';

// actions
const signupPending = response => ({
  type: SIGNUP_PENDING,
  payload: response
});

const signupSuccess = (status, message, token) => ({
  type: SIGNUP_SUCCESS,
  payload: {
    status,
    message,
    token
  }
});

const signupFailure = (status, error) => ({
  type: SIGNUP_FAILURE,
  payload: {
    status,
    error
  }
});

// action-creators
const signUpUser = userObject => async (dispatch) => {
  try {
    dispatch(signupPending(true));
    const response = await axios.post('/auth/signup', userObject);
    console.log(response);
    const { status } = response;
    const { message } = response.data;
    const { token } = response.data.data[0];
    dispatch(signupSuccess({ token, status, message }));
  } catch (err) {
    const { status } = err.response;
    const { error } = err.response.data;
    dispatch(signupFailure({ status, error }));
  } finally {
    dispatch(signupPending(false));
  }
};

export {
  signupPending,
  signupSuccess,
  signupFailure,
  signUpUser
};
