import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  signupPending,
  signupSuccess,
  signupFailure,
  signUpUser,
  signinPending,
  signinSuccess,
  signinFailure,
  signInUser
} from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const success = {
  status: 201,
  message: 'You have been successfully registered',
  token: 'cs66789wh'
}

const failure = {
  status: 409,
  error: 'User already exists'
}

describe('Signin Auth Actions', () => {
  it('should begin the signin actions', () => {
    const action = signupPending();
    expect(action).toEqual({
      type: 'SIGNUP_PENDING'
    });
  });

  it('should create a success action', () => {

    const action = signupSuccess(success);
    expect(action).toEqual({
      type: 'SIGNUP_SUCCESS',
      payload: success
    });
  });

  it('should create a failure action', () => {
    const action = signupFailure(failure);
    expect(action).toEqual({
      type: 'SIGNUP_FAILURE',
      payload: failure
    });
  });

  it('should dispatch the signup begin action', () => {
    store.dispatch(signUpUser());
    expect(store.getActions()).toEqual([{
      type: 'SIGNUP_PENDING'
    },
    ]);
  });
});

describe('Signin Auth Actions', () => {
  it('should begin the signin actions', () => {
    const action = signinPending();
    expect(action).toEqual({
      type: 'SIGNIN_PENDING'
    });
  });

  it('should create a success action', () => {
    const action = signinSuccess(success);
    expect(action).toEqual({
      type: 'SIGNIN_SUCCESS',
      payload: success
    });
  });

  it('should create a failure action', () => {
    const action = signinFailure(failure);
    expect(action).toEqual({
      type: 'SIGNIN_FAILURE',
      payload: failure
    });
  });
});
