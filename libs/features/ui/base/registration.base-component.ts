import { BaseComponent } from '@workspace/core';
import { Observable } from 'rxjs';

export abstract class RegistrationBaseComponent extends BaseComponent {
  registration = {
    email: '',
    password: ''
  }
  submitted = false;


  constructor() {
    super();
  }

  onSignUp(): void {
    //here we will call registration dispatcher to sign up the user
    console.log('%cRegistrationBaseComponent onSignUp', 'color:brown', this.registration );
    this.submitted = true;
  }
}
