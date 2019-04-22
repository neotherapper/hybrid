import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { PeopleEffects } from './people.effects';
import { LoadPeople, PeopleLoaded } from './people.actions';

describe('PeopleEffects', () => {
  let actions: Observable<any>;
  let effects: PeopleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        PeopleEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(PeopleEffects);
  });

  describe('loadPeople$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadPeople() });
      expect(effects.loadPeople$).toBeObservable(
        hot('-a-|', { a: new PeopleLoaded([]) })
      );
    });
  });
});
