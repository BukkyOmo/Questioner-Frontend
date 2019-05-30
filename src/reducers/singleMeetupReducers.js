import {
  GET_MEETUP_PENDING,
  GET_MEETUP_SUCCESS,
  GET_MEETUP_FAILURE
} from '../action-types';

const initialState = {
  isLoading: false,
  meetup: {},
  errorMessages: ''
};

const singleMeetupReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEETUP_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_MEETUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meetup: action.payload
      };
    case GET_MEETUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessages: action.payload
      };

    default:
      return state;
  }
};

export {
  singleMeetupReducer,
  initialState
};
