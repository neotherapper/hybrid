import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { NoAuthGuard } from '@workspace/core-data/src';

export const RegistrationRoutes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(RegistrationRoutes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
