import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { PeoplePartialState } from './people.reducer';
import {
  LoadPeople,
  PeopleLoaded,
  PeopleLoadError,
  PeopleActionTypes
} from './people.actions';

@Injectable()
export class PeopleEffects {
  @Effect() loadPeople$ = this.dataPersistence.fetch(
    PeopleActionTypes.LoadPeople,
    {
      run: (action: LoadPeople, state: PeoplePartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new PeopleLoaded([]);
      },

      onError: (action: LoadPeople, error) => {
        console.error('Error', error);
        return new PeopleLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PeoplePartialState>
  ) {}
}
