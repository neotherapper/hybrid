import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { PeopleEffects } from './people.effects';
import { PeopleFacade } from './people.facade';

import { peopleQuery } from './people.selectors';
import { LoadPeople, PeopleLoaded } from './people.actions';
import {
  PeopleState,
  Entity,
  initialState,
  peopleReducer
} from './people.reducer';

interface TestSchema {
  people: PeopleState;
}

describe('PeopleFacade', () => {
  let facade: PeopleFacade;
  let store: Store<TestSchema>;
  let createPeople;

  beforeEach(() => {
    createPeople = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('people', peopleReducer, { initialState }),
          EffectsModule.forFeature([PeopleEffects])
        ],
        providers: [PeopleFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(PeopleFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allPeople$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allPeople$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `PeopleLoaded` to manually submit list for state management
     */
    it('allPeople$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allPeople$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new PeopleLoaded([createPeople('AAA'), createPeople('BBB')])
        );

        list = await readFirst(facade.allPeople$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
