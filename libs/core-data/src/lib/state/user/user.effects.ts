import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { UserPartialState } from './user.reducer';
import {
  AuthenticateUser,
  UserAuthenticated,
  GoogleAuthenticateUser,
  LogOutUser,
  UserLoggedOut,
  LoadUser,
  UserLoaded,
  UserLoadError,
  UserActionTypes
} from './user.actions';

@Injectable()
export class UserEffects {
  @Effect() loadUser$ = this.dataPersistence.fetch(UserActionTypes.LoadUser, {
    run: (action: LoadUser, state: UserPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new UserLoaded([]);
    },

    onError: (action: LoadUser, error) => {
      console.error('Error', error);
      return new UserLoadError(error);
    }
  });

  @Effect() authenticateUser$ = this.dataPersistence.fetch(UserActionTypes.AuthenticateUser, {
    run: (action: AuthenticateUser, state: UserPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new UserAuthenticated([]);
    },

    onError: (action: AuthenticateUser, error) => {
      console.error('Error', error);
      return new UserLoadError(error);
    }
  });

  @Effect() googleAuthenticateUser$ = this.dataPersistence.fetch(UserActionTypes.GoogleAuthenticateUser, {
    run: (action: GoogleAuthenticateUser, state: UserPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new UserLoaded([]);
    },

    onError: (action: GoogleAuthenticateUser, error) => {
      console.error('Error', error);
      return new UserLoadError(error);
    }
  });

  @Effect() logOutUser$ = this.dataPersistence.fetch(UserActionTypes.LogOutUser, {
    run: (action: LogOutUser, state: UserPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new UserLoggedOut([]);
    },

    onError: (action: LogOutUser, error) => {
      console.error('Error', error);
      return new UserLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<UserPartialState>
  ) {}
}
