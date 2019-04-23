declare var firebase: firebase.app.App;
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { authState, user } from 'rxfire/auth';
import { Observable } from 'rxjs';
import { UserAuthI } from './user.auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth) { }

  getUser(): Observable<firebase.User> {
    return user(firebase.auth())
  }

  signInUser(credentials: UserAuthI ): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signUpUser(credentials: UserAuthI): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

}
