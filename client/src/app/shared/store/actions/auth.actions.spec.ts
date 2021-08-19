import { User } from '../../models/user.model';
import AUTH_ACTIONS, {
  Logout,
  SetCurrentUser,
  SigninError,
  SigninSuccess,
  SignupError,
  SignupSuccess, TryFetchCurrentUser, TryRefreshToken,
  TrySignin,
  TrySignup
} from './auth.actions';

describe('auth actions', () => {
  it('should create a try signup action', () => {
    const payload: User = {
      email: 'test@gmail.com',
      password: '123456',
      name: 'test',
    };
    const action: TrySignup = new TrySignup(payload);

    expect(action).toBeInstanceOf(TrySignup);
    expect({ ...action }).toEqual({
      type: AUTH_ACTIONS.TRY_SIGNUP,
      payload
    });
  });

  it('should create a signup success action', () => {
    const payload: User = {
      email: 'test@gmail.com',
      password: '123456',
      name: 'test',
    };
    const action: SignupSuccess = new SignupSuccess(payload);

    expect(action).toBeInstanceOf(SignupSuccess);
    expect({ ...action }).toEqual({
      type: AUTH_ACTIONS.SIGNUP_SUCCESS,
      payload
    });
  });

  it('should create a signup error action', () => {
    const payload: any = 'Ceci est une erreur';
    const action: SignupError = new SignupError(payload);

    expect(action).toBeInstanceOf(SignupError);
    expect({ ...action }).toEqual({
      type: AUTH_ACTIONS.SIGNUP_ERROR,
      payload
    });
  });

  it('should create a try signin action', () => {
    const payload: { email: string, password: string } = {
      email: 'test@gmail.com',
      password: '123456',
    };
    const action: TrySignin = new TrySignin(payload);

    expect(action).toBeInstanceOf(TrySignin);
    expect({ ...action }).toEqual({
      type: AUTH_ACTIONS.TRY_SIGNIN,
      payload
    });
  });

  it('should create a signin success action', () => {
    const payload = 'this should be a token';
    const action: SigninSuccess = new SigninSuccess(payload);

    expect(action).toBeInstanceOf(SigninSuccess);
    expect({ ...action }).toEqual({
      type: AUTH_ACTIONS.SIGNIN_SUCCESS,
      payload
    });
  });

  it('should create a signin error action', () => {
    const payload: any = 'Ceci est une erreur';
    const action: SigninError = new SigninError(payload);

    expect(action).toBeInstanceOf(SigninError);
    expect({ ...action }).toEqual({
      type: AUTH_ACTIONS.SIGNIN_ERROR,
      payload
    });
  });

  it('should create a try fetch current user action', () => {
    const action: TryFetchCurrentUser = new TryFetchCurrentUser();

    expect(action).toBeInstanceOf(TryFetchCurrentUser);
    expect({ ...action }).toEqual({
      type: AUTH_ACTIONS.TRY_FETCH_CURRENT_USER,
      payload: undefined
    });
  });

  it('should create a set current user action', () => {
    const payload: User = {
      email: 'test@gmail.com',
      password: '123456',
      name: 'test',
    };
    const action: SetCurrentUser = new SetCurrentUser(payload);

    expect(action).toBeInstanceOf(SetCurrentUser);
    expect({ ...action }).toEqual({
      type: AUTH_ACTIONS.SET_CURRENT_USER,
      payload
    });
  });

  it('should create a try refresh token action', () => {
    const action: TryRefreshToken = new TryRefreshToken();

    expect(action).toBeInstanceOf(TryRefreshToken);
    expect({ ...action }).toEqual({
      type: AUTH_ACTIONS.TRY_REFRESH_TOKEN,
      payload: undefined
    });
  });

  it('should create a logout action', () => {
    const action: Logout = new Logout();

    expect(action).toBeInstanceOf(Logout);
    expect({ ...action }).toEqual({
      type: AUTH_ACTIONS.LOGOUT,
      payload: undefined
    });
  });
});
