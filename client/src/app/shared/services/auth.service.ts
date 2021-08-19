import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { Observable, timer, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { State } from '../store';
import { TryRefreshToken } from '../store/actions/auth.actions';

@Injectable()
export class AuthService {
  private baseUrl: string = environment.apiUrl;

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
    return this.http.get<string>(`${ this.baseUrl }/api/auth/refresh-token`);
  }

  public signup(user: User): Observable<User> {
    return this.http.post<User>(`${ this.baseUrl }/api/auth/signup`, user);
  }

  public signin(credentials: {
    email: string;
    password: string;
  }): Observable<string> {
    return this.http.post<string>(`${ this.baseUrl }/api/auth/signin`, credentials);
  }
}
