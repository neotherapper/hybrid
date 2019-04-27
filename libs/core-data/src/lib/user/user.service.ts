import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { authState, user } from 'rxfire/auth';
import { Observable, of } from 'rxjs';
import { UserAuthI } from './user.auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth) { }

  getUser(): Observable<firebase.User> {
    const firebaseApp = this.afAuth.auth.app;
    const auth = firebaseApp.auth();
    return user(auth);
  }

  logOutUser(): Observable<any> {
    return of(this.afAuth.auth.signOut());
  }

  signInUser(credentials: UserAuthI ): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signUpUser(credentials: UserAuthI): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

}
