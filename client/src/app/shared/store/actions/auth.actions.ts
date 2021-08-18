import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const enum AUTH_ACTIONS {
  TRY_SIGNUP = '[user] try signup',
  SIGNUP_SUCCESS = '[user] signup success',
  SIGNUP_ERROR = '[user] signup error',
  TRY_SIGNIN = '[user] try signin',
  SIGNIN_SUCCESS = '[user] signin success',
  SIGNIN_ERROR = '[user] signin error',
  TRY_FETCH_CURRENT_USER = '[user] try fetch current user',
  SET_CURRENT_USER = '[user] set current user',
  TRY_REFRESH_TOKEN = '[user] try refresh token',
  LOGOUT = '[user] logout',
}

export class TrySignup implements Action {
  readonly type: AUTH_ACTIONS = AUTH_ACTIONS.TRY_SIGNUP;

  constructor(public payload: User) {
  }
}

export class SignupSuccess implements Action {
  readonly type: AUTH_ACTIONS = AUTH_ACTIONS.SIGNUP_SUCCESS;

  constructor(public payload: User) {
  }
}

export class SignupError implements Action {
  readonly type: AUTH_ACTIONS = AUTH_ACTIONS.SIGNUP_ERROR;

  constructor(public payload: any) {
  }
}

export class TrySignin implements Action {
  readonly type: AUTH_ACTIONS = AUTH_ACTIONS.TRY_SIGNIN;

  constructor(public payload: { email: string, password: string }) {
  }
}

export class SigninSuccess implements Action {
  readonly type: AUTH_ACTIONS = AUTH_ACTIONS.SIGNIN_SUCCESS;

  constructor(public payload: string) {
  }
}

export class SigninError implements Action {
  readonly type: AUTH_ACTIONS = AUTH_ACTIONS.SIGNIN_ERROR;

  constructor(public payload: any) {
  }
}

export class TryFetchCurrentUser implements Action {
  readonly type: AUTH_ACTIONS = AUTH_ACTIONS.TRY_FETCH_CURRENT_USER;

  constructor(public payload?: User) {
  }
}

export class SetCurrentUser implements Action {
  readonly type: AUTH_ACTIONS = AUTH_ACTIONS.SET_CURRENT_USER;

  constructor(public payload: User) {
  }
}

export class TryRefreshToken implements Action {
  readonly type: AUTH_ACTIONS = AUTH_ACTIONS.TRY_REFRESH_TOKEN;

  constructor(public payload?: User) {
  }
}

export class Logout implements Action {
  readonly type: AUTH_ACTIONS = AUTH_ACTIONS.LOGOUT;

  constructor(public payload?: User) {
  }
}

export type AuthActions =
  TrySignup
  | SignupSuccess
  | SignupError
  | TrySignin
  | SigninSuccess
  | SigninError
  | TryFetchCurrentUser
  | SetCurrentUser
  | TryRefreshToken
  | Logout;

export default AUTH_ACTIONS;
