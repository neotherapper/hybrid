import { Component } from '@angular/core';
import { RegistrationBaseComponent } from '@workspace/features';

@Component({
  selector: 'abc-ion-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss']
})
export class RegistrationComponent extends RegistrationBaseComponent{

  constructor() {
    super();
  }
}
