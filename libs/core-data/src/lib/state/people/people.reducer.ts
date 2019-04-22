import { PeopleAction, PeopleActionTypes } from './people.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Person } from '../../people/person.model';

export const PEOPLE_FEATURE_KEY = 'people';

/**
 * Interface for the 'People' data used in
 *  - PeopleState, and
 *  - peopleReducer
 *
 *  Note: replace if already defined in another module
 */
export interface PeopleState extends EntityState<Person> {
  list: Person[]; // list of People; analogous to a sql normalized table
  selectedId?: string | number; // which People record has been selected
  loaded: boolean; // has the People list been loaded
  error?: any; // last none error (if any)
}

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>();

export interface PeoplePartialState {
  readonly [PEOPLE_FEATURE_KEY]: PeopleState;
}

export const initialState: PeopleState = adapter.getInitialState({
  list: [],
  loaded: false
})

export function peopleReducer(
  state: PeopleState = initialState,
  action: PeopleAction
): PeopleState {
  switch (action.type) {
    case PeopleActionTypes.PeopleLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      // not sure if it works
      // adapter.addAll(action.payload, state);
      break;
    }
  }
  return state;
}

// get the selectors

