import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export interface AuthState {
  user: User;
  token: string;
  error: string;
  isLoggedIn: boolean;
}

export function authReducer(state: AuthState, action: Action): AuthState {
  return state;
}
