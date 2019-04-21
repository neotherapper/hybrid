import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users/users.service';
import { FirebaseModule } from '@workspace/firebase/src';

const MODULES = [
  CommonModule,
  FirebaseModule
];

const PROVIDERS = [
  UsersService
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
