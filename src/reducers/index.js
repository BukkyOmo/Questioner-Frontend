import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { meetupReducer } from './meetupReducer';
import { allMeetupReducer } from './getAllMeetupReducers';
import { singleMeetupReducer } from './singleMeetupReducers';
import { QuestionsReducer } from './QuestionsReducers';
import { singleQuestionReducer } from './singleQuestionReducer';
import { commentReducer } from './createCommentReducers';

const Reducer = combineReducers({
  auth: authReducer,
  meetup: meetupReducer,
  meetups: allMeetupReducer,
  singlemeetup: singleMeetupReducer,
  singleQuestion: singleQuestionReducer,
  questionStore: QuestionsReducer,
  commentStore: commentReducer
});

export default Reducer;
