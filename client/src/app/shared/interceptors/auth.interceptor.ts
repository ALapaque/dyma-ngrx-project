import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { State } from '../store';
import { authTokenSelector } from '../store/selectors/auth.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public token: string;

  constructor(private store: Store<State>) {
    this.store.select(authTokenSelector).subscribe((token: string) => this.token = token);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.token) {
      const authReq = req.clone({
        headers: req.headers.set('authorization', this.token)
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
