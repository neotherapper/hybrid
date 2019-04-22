import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../../features/shared/shared.module';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [SharedModule, RegistrationRoutingModule],
  declarations: [RegistrationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrationModule { }
