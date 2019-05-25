import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  signupPending,
  signupSuccess,
  signupFailure,
  signUpUser
} from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const user = {
  username: 'Johnny29383',
  email: 'john@doe.com',
  password: 'johnny29383'
};

const token = 'mynameis7t890w084';

describe('Signup Auth Actions', () => {
  it('should begin the signup actions', () => {
    const action = signupPending();
    expect(action).toEqual({
      type: 'SIGNUP_PENDING'
    });
  });

  it('should create a success action', () => {
    const action = signupSuccess();
    expect(action).toEqual({
      type: 'SIGNUP_SUCCESS',
      payload: {}
    });
  });

  it('should create a failure action', () => {
    const action = signupFailure();
    expect(action).toEqual({
      type: 'SIGNUP_FAILURE',
      payload: {}
    });
  });

  it('should dispatch the signup begin action', () => {
    store.dispatch(signUpUser(user));
    expect(store.getActions()).toEqual([{
      type: 'SIGNUP_PENDING',
      payload: true
    },
    ]);
  });
});
