import mockStore from '../../mocks/mockstore';
import 'babel-polyfill';
import moxios from 'moxios';
import axios from '../../config/axiosConfig';
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
import {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE
} from '../../action-types';

const success = {
  status: 201,
  message: 'You have been successfully registered',
  token: 'cs66789wh'
};

const failure = {
  status: 409,
  error: 'User already exists'
};

describe('Signin Auth Actions', () => {
  it('should begin the signup actions', () => {
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

describe('Signin Auth Actions Dispatch', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });


  it('should dispatch signin failure when signin is unsuccessful', async () => {
    const store = mockStore({});
    const failure = {
      status: 409,
      response: {
        status: 409,
        error: 'User sign in unsuccessfully'
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(failure);
    });
    await store.dispatch(signInUser());
    expect(store.getActions()).toEqual([
      {
        type: SIGNIN_PENDING
      },
      {
        type: SIGNIN_FAILURE,
        payload: {
          error: failure.response.error,
          status: failure.response.status
        }
      }
    ]);
  });
});

describe('Signup Auth Actions Dispatch', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });
  it('should dispatch signup failure when signup is unsuccessful', async () => {
    const store = mockStore({});
    const failure = {
      status: 409,
      response: {
        status: 409,
        error: 'User sign up unsuccessful'
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(failure);
    });
    await store.dispatch(signUpUser());
    expect(store.getActions()).toEqual([
      {
        type: SIGNUP_PENDING
      },
      {
        type: SIGNUP_FAILURE,
        payload: {
          error: failure.response.error,
          status: failure.response.status
        }
      }
    ]);
  });
});
