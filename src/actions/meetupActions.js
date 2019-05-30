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

    const formData = new FormData();
    Object.keys(meetupObject).forEach(key => formData.append(key, meetupObject[key]));

    const response = await axios.post('/meetups', formData, config);
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
