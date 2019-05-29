import {
  CREATE_MEETUP_PENDING,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE
} from '../action-types';

const initialState = {
  topic: '',
  location: '',
  date: '',
  image: '',
  tags: '',
  submit: false,
  redirect: false,
  isLoading: false,
  errorMessage: []
};

const meetupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_MEETUP_PENDING:
      return {
        ...state,
        isLoading: true,
        submit: true
      };

    case CREATE_MEETUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        topic: payload.topic,
        location: payload.location,
        date: payload.happeningon,
        submit: false,
        redirect: true
      };

    case CREATE_MEETUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
        submit: false,
        redirect: false
      };

    default:
      return state;
  }
};

export {
  meetupReducer,
  initialState
};
