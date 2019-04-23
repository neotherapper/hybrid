import { UserAction, UserActionTypes } from './user.actions';

export const USER_FEATURE_KEY = 'user';

/**
 * Interface for the 'User' data used in
 *  - UserState, and
 *  - userReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface UserState {
  user: firebase.User;
  isAuthenticated: boolean;
  loaded: boolean; // has the User been loaded
  error?: any; // last none error (if any)
}

export interface UserPartialState {
  readonly [USER_FEATURE_KEY]: UserState;
}

export const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  loaded: false
};

export function userReducer(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case UserActionTypes.UserLoaded: {
      state = {
        ...state,
        user: action.payload,
        loaded: true,
        isAuthenticated: true
      };
      break;
    }
    case UserActionTypes.UserLoggedOut: {
      state = {
        ...state,
        user: null,
        loaded: false,
        isAuthenticated: false
      }
    }
  }
  return state;
}
