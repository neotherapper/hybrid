import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private db: AngularFirestore
  ) { }

  getUsers(): Observable<any[]> {
    return this.db.collection('users').valueChanges();
  }

}
