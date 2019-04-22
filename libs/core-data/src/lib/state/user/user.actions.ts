import { Action } from '@ngrx/store';
import { Entity } from './user.reducer';

export enum UserActionTypes {
  AuthenticateUser = '[User] Authenticate User',
  UserAuthenticated = '[User] User authenticated',
  GoogleAuthenticateUser = '[User] Google Authenticate User',
  LogOutUser = '[User] Log out User',
  UserLoggedOut = '[User] User logged out',
  LoadUser = '[User] Load User',
  UserLoaded = '[User] User Loaded',
  UserLoadError = '[User] User Load Error'
}

export class AuthenticateUser implements Action {
  readonly type = UserActionTypes.AuthenticateUser;
}

export class UserAuthenticated implements Action {
  readonly type = UserActionTypes.UserAuthenticated;
  constructor(public payload: Entity[]) {}
}

export class GoogleAuthenticateUser implements Action {
  readonly type = UserActionTypes.GoogleAuthenticateUser;
}

export class LogOutUser implements Action {
  readonly type = UserActionTypes.LogOutUser;
}

export class UserLoggedOut implements Action {
  readonly type = UserActionTypes.UserLoggedOut;
  constructor(public payload: Entity[]) { }
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
  constructor(public payload: Entity[]) {}
}

export type UserAction =
  AuthenticateUser
  | UserAuthenticated
  | GoogleAuthenticateUser
  | LogOutUser
  | UserLoggedOut
  | LoadUser
  | UserLoaded
  | UserLoadError;

export const fromUserActions = {
  AuthenticateUser,
  UserAuthenticated,
  GoogleAuthenticateUser,
  LogOutUser,
  UserLoggedOut,
  LoadUser,
  UserLoaded,
  UserLoadError
};
