import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { UsersPartialState } from './users.reducer';
import { usersQuery } from './users.selectors';
import { LoadUsers } from './users.actions';

@Injectable()
export class UsersFacade {
  loaded$ = this.store.pipe(select(usersQuery.getLoaded));
  allUsers$ = this.store.pipe(select(usersQuery.getAllUsers));
  selectedUsers$ = this.store.pipe(select(usersQuery.getSelectedUsers));

  constructor(private store: Store<UsersPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadUsers());
  }
}
