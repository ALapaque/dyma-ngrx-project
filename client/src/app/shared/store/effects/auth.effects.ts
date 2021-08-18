import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of, Subscription } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import {
  AUTH_ACTIONS,
  SetCurrentUser,
  SigninError,
  SigninSuccess,
  SignupError,
  TrySignin,
  TrySignup
} from '../actions/auth.actions';
import { State } from '../index';
import { authTokenSelector } from '../selectors/auth.selectors';

@Injectable()
export class AuthEffects {
  private subscription: Subscription;

  public trySignup$ = createEffect(() => (
    this.actions$.pipe(
      ofType(AUTH_ACTIONS.TRY_SIGNUP),
      map((action: TrySignup) => action.payload),
      switchMap((user: User) => this.authService.signup(user)),
      switchMap(() => {
        this.router.navigate([ '/signin' ]);
        return EMPTY;
      }),
      catchError((err: any) => of(new SignupError(err)))
    )
  ));

  public trySignin$ = createEffect(() => (
    this.actions$.pipe(
      ofType(AUTH_ACTIONS.TRY_SIGNIN),
      map((action: TrySignin) => action.payload),
      switchMap((credentials: { email: string, password: string }) => this.authService.signin(credentials)),
      map((token: string) => {
        localStorage.setItem('token', token);
        return new SigninSuccess(token);
      }),
      catchError((err: any) => of(new SigninError(err)))
    )
  ));

  public tryRefreshToken$ = createEffect(() => (
    this.actions$.pipe(
      ofType(AUTH_ACTIONS.TRY_REFRESH_TOKEN),
      withLatestFrom(this.store.select(authTokenSelector)),
      switchMap(([ action, token ]) => {
        if (token) {
          return this.authService.refreshToken().pipe(
            map((t: string) => {
              localStorage.setItem('token', t);
              return new SigninSuccess(t);
            }),
            catchError(() => {
              localStorage.removeItem('token');
              if (this.subscription) {
                this.subscription.unsubscribe();
              }
              return EMPTY;
            })
          );
        } else {
          return EMPTY;
        }
      }),
    )
  ));

  public signinSuccess$ = createEffect(() => (
    this.actions$.pipe(
      ofType(AUTH_ACTIONS.SIGNIN_SUCCESS),
      tap(() => {
        if (!this.subscription) {
          this.subscription = this.authService.initTimer().subscribe();
        }
        this.router.navigate([ '/' ]);
      }),
    )
  ), { dispatch: false });

  public logout$ = createEffect(() => (
    this.actions$.pipe(
      ofType(AUTH_ACTIONS.LOGOUT),
      tap(() => {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
        localStorage.removeItem('token');
        this.router.navigate([ '/' ]);
      })
    )
  ), { dispatch: false });

  public tryFetchCurrentUser$ = createEffect(() => (
    this.actions$.pipe(
      ofType(AUTH_ACTIONS.TRY_FETCH_CURRENT_USER),
      switchMap(() => this.userService.getCurrentUser()),
      map((user: User) => new SetCurrentUser(user)),
      catchError((err: any) => {
        console.log('error in try fetch current user', err);
        return EMPTY;
      })
    )
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private store: Store<State>
  ) {
  }
}
