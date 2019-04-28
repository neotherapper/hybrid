import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from '@workspace/firebase/src';
import { StateModule } from './state/state.module';
import { PeopleService } from './people/people.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './user/auth-guard.service';
import { NoAuthGuard } from './user/no-auth-guard.service';

const MODULES = [
  CommonModule,
  HttpClientModule,
  FirebaseModule,
  StateModule
];

const PROVIDERS = [
  AuthGuard,
  NoAuthGuard,
  PeopleService
]

@NgModule({
  imports: [
    ...MODULES
  ],
  providers: [
    ...PROVIDERS
  ]
})
export class CoreDataModule {}
