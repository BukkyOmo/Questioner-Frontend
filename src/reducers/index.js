import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { meetupReducer } from './meetupReducer';

const Reducer = combineReducers({
  auth: authReducer,
  meetup: meetupReducer
});

export default Reducer;
