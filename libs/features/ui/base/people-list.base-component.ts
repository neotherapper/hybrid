import { BaseComponent } from '@workspace/core';
import { Observable } from 'rxjs';
import { Person, PeopleFacade } from '@workspace/core-data/src';

export abstract class PeopleListBaseComponent extends BaseComponent {
  people$: Observable<Person[]>

  constructor(public peopleFacade: PeopleFacade) {
    super();
    this.peopleFacade.loadAll();
    this.people$ = this.peopleFacade.allPeople$;
  }
}
