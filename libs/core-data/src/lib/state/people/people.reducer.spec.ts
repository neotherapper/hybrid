import { PeopleLoaded } from './people.actions';
import {
  PeopleState,
  Entity,
  initialState,
  peopleReducer
} from './people.reducer';

describe('People Reducer', () => {
  const getPeopleId = it => it['id'];
  let createPeople;

  beforeEach(() => {
    createPeople = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid People actions ', () => {
    it('should return set the list of known People', () => {
      const peoples = [
        createPeople('PRODUCT-AAA'),
        createPeople('PRODUCT-zzz')
      ];
      const action = new PeopleLoaded(peoples);
      const result: PeopleState = peopleReducer(initialState, action);
      const selId: string = getPeopleId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = peopleReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
