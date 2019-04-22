import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PEOPLE_FEATURE_KEY, PeopleState } from './people.reducer';

// Lookup the 'People' feature state managed by NgRx
const peopleFeatureState = createFeatureSelector<PeopleState>(PEOPLE_FEATURE_KEY);

const selectAllLoadedPeople = (state: PeopleState) => state.loaded;

const selectAllPeople = (state: PeopleState, isLoaded:boolean) => {
  return isLoaded ? state.list : [];
}

const selectErrors = (state: PeopleState) => state.error;

const getLoadedPeople = createSelector(
  peopleFeatureState,
  selectAllLoadedPeople
);
const getError = createSelector(
  peopleFeatureState,
  selectErrors
);

const getAllPeople = createSelector(
  peopleFeatureState,
  getLoadedPeople,
  selectAllPeople
);
const getSelectedId = createSelector(
  peopleFeatureState,
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
  getLoadedPeople,
  getError,
  getAllPeople,
  getSelectedPeople
};
