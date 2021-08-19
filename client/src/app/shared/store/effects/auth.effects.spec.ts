import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { hot, cold } from 'jasmine-marbles';
import { TestObservable } from 'jasmine-marbles/src/test-observables';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { SignupError, SignupSuccess, TrySignup } from '../actions/auth.actions';
import { AuthEffects } from './auth.effects';

describe('auth effects', () => {

  let effects: AuthEffects;
  let actions: Observable<any>;
  let expected: TestObservable;
  let routerService: Router;
  let authService: AuthService;

  beforeAll(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({}),
        RouterTestingModule.withRoutes([ { path: 'signin', component: {} as any } ])
      ],
      providers: [
        AuthEffects,
        provideMockActions(() => actions),
        UserService,
        AuthService,
      ],
    });

    effects = TestBed.inject(AuthEffects);
    authService = TestBed.inject(AuthService);
    routerService = TestBed.inject(Router);
  });

  describe('trySignup$ effect', () => {
    it('-> should return SignupSuccess action', () => {
      spyOn(authService, 'signup').and.returnValue(of({ email: 'a@a.fr', name: 'a' }));
      actions = hot('---a-', { a: new TrySignup({ email: 'a@a.fr', name: 'a', password: 'a' }) });
      expected = cold('---b', { b: new SignupSuccess({ email: 'a@a.fr', name: 'a' }) });
      expect(true).toBeTruthy();
    });

    it('-> should return SignupError action', () => {
      spyOn(authService, 'signup').and.returnValue(cold('-#', {}, 'error'));
      actions = hot('---a-', { a: new TrySignup({ email: 'a@a.fr', name: 'a', password: 'a' }) });
      expected = cold('----b', { b: new SignupError('error') });
      expect(true).toBeTruthy();
    });
  });
});
