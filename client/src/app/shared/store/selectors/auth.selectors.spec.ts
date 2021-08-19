import { User } from '../../models/user.model';
import { initialState } from '../reducers/auth.reducer';
import {
  authCurrentUserSelector,
  authErrorSelector,
  authIsLoggedInSelector,
  authTokenSelector
} from './auth.selectors';

describe('auth selectors', () => {
  describe('authErrorSelector', () => {
    it('should return null', () => {
      const mockState: {} = {
        auth: initialState
      };

      expect(authErrorSelector(mockState)).toEqual(null);
    });

    it('should return an error msg', () => {
      const mockState: {} = {
        auth: {
          ...initialState,
          error: ''
        }
      };

      expect(authErrorSelector(mockState)).toEqual('');
    });
  });

  describe('authTokenSelector', () => {
    it('should return null', () => {
      const mockState: {} = {
        auth: initialState,
        token: null
      };

      expect(authTokenSelector(mockState)).toEqual(null);
    });

    it('should return the token', () => {
      const token = 'ceci est un token';
      const mockState: {} = {
        auth: {
          ...initialState,
          token
        }
      };

      expect(authTokenSelector(mockState)).toEqual(token);
    });
  });

  describe('authIsLoggedInSelector', () => {
    it('should return false', () => {
      const mockState: {} = {
        auth: initialState
      };

      expect(authIsLoggedInSelector(mockState)).toEqual(false);
    });

    it('should return the isLoggedIn state', () => {
      const isLoggedIn = true;
      const mockState: {} = {
        auth: {
          ...initialState,
          isLoggedIn
        }
      };

      expect(authIsLoggedInSelector(mockState)).toBeTruthy();
    });
  });

  describe('authCurrentUserSelector', () => {
    it('should return null', () => {
      const mockState: {} = {
        auth: initialState
      };

      expect(authCurrentUserSelector(mockState)).toEqual(null);
    });

    it('should return the user', () => {
      const user: User = {
        email: 'test@gmail.com',
        password: '123456',
        name: 'test'
      };
      const mockState: {} = {
        auth: {
          ...initialState,
          user
        }
      };

      expect(authCurrentUserSelector(mockState)).toEqual(user);
    });
  });
});
