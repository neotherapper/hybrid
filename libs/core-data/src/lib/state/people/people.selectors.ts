import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PEOPLE_FEATURE_KEY, PeopleState } from './people.reducer';

// Lookup the 'People' feature state managed by NgRx
const getPeopleState = createFeatureSelector<PeopleState>(PEOPLE_FEATURE_KEY);

const getLoaded = createSelector(
  getPeopleState,
  (state: PeopleState) => state.loaded
);
const getError = createSelector(
  getPeopleState,
  (state: PeopleState) => state.error
);

const getAllPeople = createSelector(
  getPeopleState,
  getLoaded,
  (state: PeopleState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getPeopleState,
  (state: PeopleState) => state.selectedId
);
const getSelectedPeople = createSelector(
  getAllPeople,
  getSelectedId,
  (people, id) => {
    const result = people.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const peopleQuery = {
  getLoaded,
  getError,
  getAllPeople,
  getSelectedPeople
};
