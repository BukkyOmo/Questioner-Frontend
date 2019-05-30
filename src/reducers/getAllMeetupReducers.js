import {
  GET_ALL_MEETUPS_PENDING,
  GET_ALL_MEETUPS_SUCCESS,
  GET_ALL_MEETUPS_FAILURE
} from '../action-types';

const initialState = {
  isLoading: false,
  getMeetups: [],
  errorMessage: ''
};

const allMeetupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_MEETUPS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_ALL_MEETUPS_SUCCESS:
      return {
        ...state,
        getMeetups: payload,
        isLoading: false
      };
    case GET_ALL_MEETUPS_FAILURE:
      return {
        ...state,
        errorMessage: payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export {
  allMeetupReducer,
  initialState
};
