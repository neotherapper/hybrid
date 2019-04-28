import { Component } from '@angular/core';

import { PeopleListBaseComponent } from '@workspace/features';
import { PeopleFacade } from '@workspace/core-data/src';

@Component({
  selector: 'abc-ion-people-list',
  templateUrl: 'people-list.component.html'
})
export class PeopleListComponent extends PeopleListBaseComponent {
  constructor(public peopleFacade: PeopleFacade) {
    super(peopleFacade);
  }
}
