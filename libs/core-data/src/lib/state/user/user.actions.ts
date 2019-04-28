import { Action } from '@ngrx/store';
import { Entity } from './user.reducer';
import { UserAuth } from '../../user/user.auth';

export enum UserActionTypes {
  AuthenticateUser = '[User] Authenticate User',
  UserAuthenticationError = '[User] User authentication Error',
  GoogleAuthenticateUser = '[User] Google Authenticate User',
  LogOutUser = '[User] Log out User',
  UserLoggedOut = '[User] User logged out',
  LoadUser = '[User] Load User',
  UserLoaded = '[User] User Loaded',
  UserLoadError = '[User] User Load Error'
}

export class AuthenticateUser implements Action {
  readonly type = UserActionTypes.AuthenticateUser;
  constructor(public payload: UserAuth) { }
}

export class UserAuthenticationError implements Action {
  readonly type = UserActionTypes.UserAuthenticationError;
  constructor(public payload: any) { }
}

export class GoogleAuthenticateUser implements Action {
  readonly type = UserActionTypes.GoogleAuthenticateUser;
}

export class LogOutUser implements Action {
  readonly type = UserActionTypes.LogOutUser;
}

export class UserLoggedOut implements Action {
  readonly type = UserActionTypes.UserLoggedOut;
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;
}

export class UserLoadError implements Action {
  readonly type = UserActionTypes.UserLoadError;
  constructor(public payload: any) {}
}

export class UserLoaded implements Action {
  readonly type = UserActionTypes.UserLoaded;
  constructor(public payload: firebase.User) {}
}

export type UserAction =
  AuthenticateUser
  | UserAuthenticationError
  | GoogleAuthenticateUser
  | LogOutUser
  | UserLoggedOut
  | LoadUser
  | UserLoaded
  | UserLoadError;

export const fromUserActions = {
  AuthenticateUser,
  GoogleAuthenticateUser,
  LogOutUser,
  UserLoggedOut,
  LoadUser,
  UserLoaded,
  UserLoadError
};
