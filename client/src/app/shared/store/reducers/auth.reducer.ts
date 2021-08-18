import { User } from '../../models/user.model';
import AUTH_ACTIONS, { AuthActions } from '../actions/auth.actions';

export interface AuthState {
  user: User;
  token: string;
  error: string;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  error: null,
  isLoggedIn: null,
};

export function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AUTH_ACTIONS.SIGNUP_ERROR:
    case AUTH_ACTIONS.SIGNIN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case AUTH_ACTIONS.SIGNIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
        error: null
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        error: null,
        user: null
      };
    case AUTH_ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
