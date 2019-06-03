import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { meetupReducer } from './meetupReducer';
import { allMeetupReducer } from './getAllMeetupReducers';
import { singleMeetupReducer } from './singleMeetupReducers';
import { createQuestionReducer } from './createQuestionReducer';
import { getQuestionReducer } from './getQuestionReducers';

const Reducer = combineReducers({
  auth: authReducer,
  meetup: meetupReducer,
  meetups: allMeetupReducer,
  singlemeetup: singleMeetupReducer,
  createquestion: createQuestionReducer,
  getQuestion: getQuestionReducer
});

export default Reducer;
