import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { UserPartialState } from './user.reducer';
import { userQuery } from './user.selectors';
import { LoadUser, AuthenticateUser } from './user.actions';

@Injectable()
export class UserFacade {
  user$ = this.store.pipe(select(userQuery.getUser));

  constructor(private store: Store<UserPartialState>) {}

  authenticateUser() {
    this.store.dispatch(new AuthenticateUser());
  }

  loadAll() {
    this.store.dispatch(new LoadUser());
  }
}
