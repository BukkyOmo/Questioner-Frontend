import {
  GET_ALL_MEETUPS_PENDING,
  GET_ALL_MEETUPS_SUCCESS,
  GET_ALL_MEETUPS_FAILURE
} from '../action-types';

import axios from '../config/axiosConfig';

// actions
const getAllMeetupPending = () => ({
  type: GET_ALL_MEETUPS_PENDING
});

const getAllMeetupSuccess = meetups => ({
  type: GET_ALL_MEETUPS_SUCCESS,
  payload: meetups
});

const getAllMeetupFailure = errorMessage => ({
  type: GET_ALL_MEETUPS_FAILURE,
  payload: errorMessage
});

// action creators
const getAllMeetups = meetupObject => async (dispatch) => {
  try {
    dispatch(getAllMeetupPending());
    const response = await axios.get('/meetups', meetupObject);
    const { data } = response.data;
    dispatch(getAllMeetupSuccess(data));
  } catch (err) {
    dispatch(getAllMeetupFailure(err.response.data));
  }
};

export {
  getAllMeetupPending,
  getAllMeetupSuccess,
  getAllMeetupFailure,
  getAllMeetups
};
