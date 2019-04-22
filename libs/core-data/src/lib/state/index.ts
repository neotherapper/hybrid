import { ActionReducerMap } from '@ngrx/store';

import * as fromPeople from './people/people.reducer';
import * as fromUser from './user/user.reducer';

export interface AppState {
  people: fromPeople.PeopleState,
  user: fromUser.UserState
}

export const reducers: ActionReducerMap<AppState> = {
  people: fromPeople.peopleReducer,
  user: fromUser.userReducer
}
