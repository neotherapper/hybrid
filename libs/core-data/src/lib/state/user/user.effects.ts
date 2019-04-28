import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { UserPartialState } from './user.reducer';
import {
  AuthenticateUser,
  UserAuthenticationError,
  GoogleAuthenticateUser,
  LogOutUser,
  UserLoggedOut,
  LoadUser,
  UserLoaded,
  UserLoadError,
  UserActionTypes
} from './user.actions';
import { UserService } from '../../user/user.service';
import { map, catchError } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class UserEffects {
  @Effect() loadUser$ = this.dataPersistence.fetch(UserActionTypes.LoadUser, {
    run: (action: LoadUser, state: UserPartialState) => {
      return this.userService.getUser()
        .pipe(
          map( (user) => {
            return new UserLoaded(user);
          }),
          catchError((error) => of(new UserLoadError(error)))
        );
    },

    onError: (action: LoadUser, error) => {
      console.error('Error', error);
      return new UserLoadError(error);
    }
  });

  @Effect() authenticateUser$ = this.dataPersistence.pessimisticUpdate(UserActionTypes.AuthenticateUser, {
    run: (action: AuthenticateUser, state: UserPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return from(this.userService.signInUser(action.payload))
        .pipe(
          map((userCredentials) => new UserLoaded(userCredentials.user)),
          catchError((error) => of(new UserAuthenticationError(error)))
        );
    },

    onError: (action: AuthenticateUser, error) => {
      console.error('Error', error);
      return new UserLoadError(error);
    }
  });

  @Effect() googleAuthenticateUser$ = this.dataPersistence.fetch(UserActionTypes.GoogleAuthenticateUser, {
    run: (action: GoogleAuthenticateUser, state: UserPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      // return new UserLoaded([]);
      return;
    },

    onError: (action: GoogleAuthenticateUser, error) => {
      console.error('Error', error);
      return new UserLoadError(error);
    }
  });

  @Effect() logOutUser$ = this.dataPersistence.fetch(UserActionTypes.LogOutUser, {
    run: (action: LogOutUser, state: UserPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return this.userService.logOutUser()
        .pipe(
          map(() => new UserLoggedOut())
        )
    },

    onError: (action: LogOutUser, error) => {
      console.error('Error', error);
      return new UserLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<UserPartialState>,
    private userService: UserService
  ) {}
}
