import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

const Reducer = combineReducers({
  auth: authReducer
});

export default Reducer;
