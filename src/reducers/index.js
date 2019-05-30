import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { meetupReducer } from './meetupReducer';
import { allMeetupReducer } from './getAllMeetupReducers';
import { singleMeetupReducer } from './singleMeetupReducers';

const Reducer = combineReducers({
  auth: authReducer,
  meetup: meetupReducer,
  meetups: allMeetupReducer,
  singlemeetup: singleMeetupReducer
});

export default Reducer;
