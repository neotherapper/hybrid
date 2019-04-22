import { Component } from '@angular/core';

import { RegistrationBaseComponent } from '@workspace/features';

@Component({
  selector: 'abc-registration',
  templateUrl: 'registration.component.html'
})
export class RegistrationComponent extends RegistrationBaseComponent {
  constructor() {
    super();
  }
}
