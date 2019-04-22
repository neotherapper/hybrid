import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

export const RegistrationRoutes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(RegistrationRoutes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
