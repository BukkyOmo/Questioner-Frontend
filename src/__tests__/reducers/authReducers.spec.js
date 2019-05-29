import { authReducer, initialState } from '../../reducers/authReducer';
import {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE
} from '../../action-types';

describe('Signup Auth reducers', () => {
  it('should change loading to true when the signup is pending', () => {
    const reducerState = authReducer(null, { type: SIGNUP_PENDING })
    expect(reducerState.isLoading).toEqual(true);
  })
  it('should recieve success payload on successful signup', () => {
    const payload = {
      status: 201,
      message: 'You have successfully registered',
      submit: false
    }
    const reducerState = authReducer(null, { type: SIGNUP_SUCCESS, payload })
    expect(reducerState.status).toEqual(201);
    expect(reducerState.message).toEqual('You have successfully registered');
    expect(reducerState.submit).toEqual(false);
  })
  it('should recieve success payload on successful signup', () => {
    const payload = {
      status: 409,
      error: 'User registration failed',
      submit: false
    }
    const reducerState = authReducer(null, { type: SIGNUP_FAILURE, payload })
    expect(reducerState.status).toEqual(409);
    expect(reducerState.error).toEqual('User registration failed');
    expect(reducerState.submit).toEqual(false);
  })
});

describe('Signin Auth reducers', () => {
  it('should change loading to true when the signup is pending', () => {
    const reducerState = authReducer(null, { type: SIGNIN_PENDING })
    expect(reducerState.isLoading).toEqual(true);
  })

  it('should recieve success payload on successful signin', () => {
    const payload = {
      status: 201,
      message: 'You have successfully registered',
      submit: true
    }
    const reducerState = authReducer(null, { type: SIGNUP_SUCCESS, payload })
    expect(reducerState.status).toEqual(201);
    expect(reducerState.message).toEqual('You have successfully registered');
    expect(reducerState.submit).toEqual(false);
  })

  it('should recieve success payload on successful signup', () => {
    const payload = {
      redirect: true,
      token: 'ghfyuj5768',
      status: 200,
      message: 'User signed in successfully',
      isLoggedIn: true
    }
    const reducerState = authReducer(null, { type: SIGNIN_SUCCESS, payload })
    expect(reducerState.redirect).toEqual(true);
    expect(reducerState.token).toEqual('ghfyuj5768');
    expect(reducerState.status).toEqual(200);
    expect(reducerState.message).toEqual('User signed in successfully');
    expect(reducerState.isLoggedIn).toEqual(true);
  })

  it('should recieve success payload on successful signin', () => {
    const payload = {
      redirect: false,
      status: 409,
      error: 'Sign in failed',
    }
    const reducerState = authReducer(null, { type: SIGNIN_FAILURE, payload })
    expect(reducerState.redirect).toEqual(false);
    expect(reducerState.status).toEqual(409);
    expect(reducerState.error).toEqual('Sign in failed');
  })

    it('should return the initial state', () => {
      expect(authReducer(undefined, {})).toEqual(
      initialState
    );
  });
});


