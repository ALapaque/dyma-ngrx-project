import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject, timer, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtToken } from '../models/jwt-token.model';
import { tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { State } from '../store';
import { TryRefreshToken } from '../store/actions/auth.actions';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private store: Store<State>
  ) {
  }

  public initTimer() {
    return timer(5000, 60000).pipe(
      tap(() => this.store.dispatch(new TryRefreshToken()))
    );
  }

  public refreshToken(): Observable<string> {
    return this.http.get<string>('/api/auth/refresh-token');
  }

  public signup(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/signup', user);
  }

  public signin(credentials: {
    email: string;
    password: string;
  }): Observable<string> {
    return this.http.post<string>('/api/auth/signin', credentials);
  }
}
