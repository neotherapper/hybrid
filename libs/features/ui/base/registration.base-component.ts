import { BaseComponent } from '@workspace/core';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { UserFacade, UserAuthI, UserAuth } from '@workspace/core-data/src';

export abstract class RegistrationBaseComponent extends BaseComponent {
  registration = new UserAuth('', '');
  submitted = false;


  constructor(public toastController: ToastController, public userFacade: UserFacade) {
    super();
  }

  abstract onFacebookSign(): void;

  onSignUp(): void {
    this.userFacade.authenticateUser(this.registration);
    //here we will call registration dispatcher to sign up the user
    const toastMessage = `RegistrationBaseComponent onSignUp that will send ${JSON.stringify(this.registration)}`;
    this.message(toastMessage);
    this.submitted = true;
  }

  onSignIn(): void {
    this.userFacade.authenticateUser(this.registration);
    //here we will call sign in dispatcher to sign in the user
    const toastMessage = `RegistrationBaseComponent onSignIn that will send ${JSON.stringify(this.registration)}`;
    this.message(toastMessage);
    this.submitted = true;
  }

  async message(message: string) {
    const toastOptions = {
      message: message,
      duration: 2000,
      color: 'dark'
    }
    const toast = await this.toastController.create(toastOptions);
    toast.present();
  }
}
