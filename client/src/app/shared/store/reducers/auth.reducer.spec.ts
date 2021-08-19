import { User } from '../../models/user.model';
import {
  Logout,
  SetCurrentUser,
  SigninError,
  SigninSuccess,
  SignupError,
  SignupSuccess
} from '../actions/auth.actions';
import { authReducer, AuthState, initialState } from './auth.reducer';

describe('auth reducer', () => {
  it('should return initial state', () => {
    const action = {} as any;

    expect(authReducer(undefined, action)).toEqual(initialState);
  });

  it('signup error should return an error', () => {
    const payload: any = { message: 'ceci est une erreur' };
    const action: SignupError = new SignupError(payload);
    const state: AuthState = authReducer(initialState, action);

    expect(state).toEqual({
      ...state,
      error: payload
    });
  });

  it('signin error should return an error', () => {
    const payload: any = { message: 'ceci est une erreur' };
    const action: SigninError = new SigninError(payload);
    const state: AuthState = authReducer(initialState, action);

    expect(state).toEqual({
      ...state,
      error: payload
    });
  });

  it('signup success should the state', () => {
    const payload: User = {
      email: 'test@gmail.com',
      password: '123456',
      name: 'test'
    };
    const action: SignupSuccess = new SignupSuccess(payload);
    const state: AuthState = authReducer(initialState, action);

    expect(state).toEqual({
      ...state
    });
  });

  it('signin success should return token, isLoggedIn, error', () => {
    const payload = 'ceci est un token';
    const action: SigninSuccess = new SigninSuccess(payload);
    const state: AuthState = authReducer(initialState, action);

    expect(state).toEqual({
      ...state,
      token: payload,
      isLoggedIn: true,
      error: null
    });
  });

  it('logout should return token, isLoggedIn, error, user', () => {
    const action: Logout = new Logout();
    const state: AuthState = authReducer(initialState, action);

    expect(state).toEqual({
      ...state,
      token: null,
      isLoggedIn: false,
      error: null,
      user: null
    });
  });

  it('set current user should return a user', () => {
    const payload: User = {
      email: 'test@gmail.com',
      password: '123456',
      name: 'test'
    };
    const action: SetCurrentUser = new SetCurrentUser(payload);
    const state: AuthState = authReducer(initialState, action);

    expect(state).toEqual({
      ...state,
      user: payload
    });
  });
});
