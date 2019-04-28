import { Component } from '@angular/core';
import { RegistrationBaseComponent } from '@workspace/features';
import { ToastController } from '@ionic/angular';
import { UserFacade } from '@workspace/core-data/src';

@Component({
  selector: 'abc-ion-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss']
})
export class RegistrationComponent extends RegistrationBaseComponent {
  constructor(
    public toastController: ToastController,
    public userFacade: UserFacade
  ) {
    super(toastController, userFacade);
  }

  onFacebookSign(): void {
    //here we will call registration dispatcher to sign up the user
    const toastMessage = 'Facebook sign up handled on xplat ionic registration';
    this.message(toastMessage);
  }
}
