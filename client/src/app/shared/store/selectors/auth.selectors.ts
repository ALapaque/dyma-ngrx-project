import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

export const authSelector = createFeatureSelector('auth');
export const authErrorSelector = createSelector(
  authSelector,
  (authState: AuthState) => authState?.error ?? null
);
export const authTokenSelector = createSelector(
  authSelector,
  (authState: AuthState) => authState?.token ?? null
);
export const authIsLoggedInSelector = createSelector(
  authSelector,
  (authState: AuthState) => authState?.isLoggedIn ?? false
);
export const authCurrentUserSelector = createSelector(
  authSelector,
  (authState: AuthState) => authState?.user ?? null
);
