import {
  GET_MEETUP_PENDING,
  GET_MEETUP_SUCCESS,
  GET_MEETUP_FAILURE
} from '../action-types';

import axios from '../config/axiosConfig';

// actions
const getSingleMeetupPending = () => ({
  type: GET_MEETUP_PENDING
});

const getSingleMeetupSuccess = payload => ({
  type: GET_MEETUP_SUCCESS,
  payload
});

const getSingleMeetupFailure = payload => ({
  type: GET_MEETUP_FAILURE,
  payload
});

// action-creators
const getSingleMeetup = (id, config) => async (dispatch) => {
  try {
    dispatch(getSingleMeetupPending());
    const response = await axios.get(`/meetups/${id}`, config);
    return dispatch(getSingleMeetupSuccess(response.data.data[0]));
  } catch (err) {
    return dispatch(getSingleMeetupFailure(err.response.data));
  }
};

export {
  getSingleMeetupPending,
  getSingleMeetupSuccess,
  getSingleMeetupFailure,
  getSingleMeetup
};
