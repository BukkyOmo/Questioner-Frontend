import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { meetupReducer } from './meetupReducer';
import { allMeetupReducer } from './getAllMeetupReducers';
import { singleMeetupReducer } from './singleMeetupReducers';
import { QuestionsReducer } from './QuestionsReducers';

const Reducer = combineReducers({
  auth: authReducer,
  meetup: meetupReducer,
  meetups: allMeetupReducer,
  singlemeetup: singleMeetupReducer,
  questionStore: QuestionsReducer,
});

export default Reducer;
