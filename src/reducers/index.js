import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { meetupReducer } from './meetupReducer';
import { allMeetupReducer } from './getAllMeetupReducers';
import { singleMeetupReducer } from './singleMeetupReducers';
import { createQuestionReducer } from './createQuestionReducer';

const Reducer = combineReducers({
  auth: authReducer,
  meetup: meetupReducer,
  meetups: allMeetupReducer,
  singlemeetup: singleMeetupReducer,
  createquestion: createQuestionReducer
});

export default Reducer;
