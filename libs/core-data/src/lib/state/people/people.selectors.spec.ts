import { Entity, PeopleState } from './people.reducer';
import { peopleQuery } from './people.selectors';

describe('People Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPeopleId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createPeople = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      people: {
        list: [
          createPeople('PRODUCT-AAA'),
          createPeople('PRODUCT-BBB'),
          createPeople('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('People Selectors', () => {
    it('getAllPeople() should return the list of People', () => {
      const results = peopleQuery.getAllPeople(storeState);
      const selId = getPeopleId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedPeople() should return the selected Entity', () => {
      const result = peopleQuery.getSelectedPeople(storeState);
      const selId = getPeopleId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = peopleQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = peopleQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
