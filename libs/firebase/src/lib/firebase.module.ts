import { NgModule } from '@angular/core';
import { environment } from '@workspace/core';

// @angular/fire/ Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

const MODULES = [
  AngularFirestoreModule,
  AngularFireStorageModule,
  AngularFireAuthModule,
  AngularFireFunctionsModule
];

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'starwars'),
    ...MODULES
  ],
  providers:[
    {
      provide: FirestoreSettingsToken, useValue: {}
    }
  ],
  exports: [...MODULES]
})
export class FirebaseModule { }
