import { Action } from '@ngrx/store';
import { Person } from '../../people/person.model';


export enum PeopleActionTypes {
  LoadPeople = '[People] Load People',
  PeopleLoaded = '[People] People Loaded',
  PeopleLoadError = '[People] People Load Error'
}

export class LoadPeople implements Action {
  readonly type = PeopleActionTypes.LoadPeople;
}

export class PeopleLoadError implements Action {
  readonly type = PeopleActionTypes.PeopleLoadError;
  constructor(public payload: any) {}
}

export class PeopleLoaded implements Action {
  readonly type = PeopleActionTypes.PeopleLoaded;
  constructor(public payload: Person[]) {}
}

export type PeopleAction = LoadPeople | PeopleLoaded | PeopleLoadError;

export const fromPeopleActions = {
  LoadPeople,
  PeopleLoaded,
  PeopleLoadError
};
