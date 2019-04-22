import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from '@workspace/firebase/src';
import { StateModule } from './state/state.module';
import { PeopleService } from './people/people.service';
import { HttpClientModule } from '@angular/common/http';

const MODULES = [
  CommonModule,
  HttpClientModule,
  FirebaseModule,
  StateModule
];

const PROVIDERS = [
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
