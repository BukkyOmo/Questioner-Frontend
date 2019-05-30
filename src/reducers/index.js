import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { meetupReducer } from './meetupReducer';
import { allMeetupReducer } from './getAllMeetupReducers';

const Reducer = combineReducers({
  auth: authReducer,
  meetup: meetupReducer,
  meetups: allMeetupReducer
});

export default Reducer;
