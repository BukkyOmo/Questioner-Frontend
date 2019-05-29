import {
  CREATE_MEETUP_PENDING,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE
} from '../action-types';

import axios from '../config/axiosConfig';

// actions
const createMeetupPending = () => ({
  type: CREATE_MEETUP_PENDING
});

const createMeetupSuccess = data => ({
  type: CREATE_MEETUP_SUCCESS,
  payload: data
});

const createMeetupFailure = errorMessage => ({
  type: CREATE_MEETUP_FAILURE,
  payload: errorMessage
});

// action creators
const createMeetup = (meetupObject, config) => async (dispatch) => {
  try {
    dispatch(createMeetupPending());
    const response = await axios.post('/meetups', meetupObject, config);
    const data = response.data.data[0];
    dispatch(createMeetupSuccess(data));
  } catch (err) {
    const message = err.response.data;
    dispatch(createMeetupFailure(message));
  }
};

export {
  createMeetupPending,
  createMeetupSuccess,
  createMeetupFailure,
  createMeetup
};
