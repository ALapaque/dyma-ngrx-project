import { ActionReducerMap } from '@ngrx/store';
import { AuthEffects } from './effects/auth.effects';
import { authReducer, AuthState } from './reducers/auth.reducer';

export interface State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer
};


export const effects = [
  AuthEffects
];
