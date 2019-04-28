import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../../features/shared/shared.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';

@NgModule({
  imports: [SharedModule,PeopleRoutingModule],
  declarations: [PeopleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PeopleModule { }
