import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { PeoplePartialState } from './people.reducer';
import { peopleQuery } from './people.selectors';
import { LoadPeople } from './people.actions';

@Injectable()
export class PeopleFacade {
  loaded$ = this.store.pipe(select(peopleQuery.getLoadedPeople));
  allPeople$ = this.store.pipe(select(peopleQuery.getAllPeople));
  selectedPeople$ = this.store.pipe(select(peopleQuery.getSelectedPeople));

  constructor(private store: Store<PeoplePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadPeople());
  }
}
