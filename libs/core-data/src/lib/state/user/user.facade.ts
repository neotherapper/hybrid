import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { UserPartialState } from './user.reducer';
import { userQuery } from './user.selectors';
import { LoadUser, AuthenticateUser, LogOutUser } from './user.actions';
import { UserAuth } from '../../user/user.auth';

@Injectable()
export class UserFacade {
  user$ = this.store.pipe(select(userQuery.getUser));

  constructor(private store: Store<UserPartialState>) {}

  authenticateUser(credentials: UserAuth) {
    this.store.dispatch(new AuthenticateUser(credentials));
  }

  loadUser() {
    this.store.dispatch(new LoadUser());
  }

  logOutUser() {
    this.store.dispatch(new LogOutUser());
  }
}
