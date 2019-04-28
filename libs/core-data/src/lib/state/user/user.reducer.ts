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
  error?: any; // last none error (if any)
}

export interface UserPartialState {
  readonly [USER_FEATURE_KEY]: UserState;
}

export const initialState: UserState = {
  user: null,
};

export function userReducer(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case UserActionTypes.UserLoaded: {
      state = {
        ...state,
        user: action.payload
      };
      break;
    }
    case UserActionTypes.UserLoggedOut: {
      state = {
        ...state,
        user: null
      }
    }
  }
  return state;
}