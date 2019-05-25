import { combineReducers } from 'redux';
import { SignUpReducer } from './authReducer';

const Reducer = combineReducers({
  auth: SignUpReducer
});

export default Reducer;
