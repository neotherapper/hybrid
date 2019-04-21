import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  USERS_FEATURE_KEY,
  initialState as usersInitialState,
  usersReducer
} from './users/users.reducer';
import { UsersEffects } from './users/users.effects';
import { UsersFacade } from './users/users.facade';
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@workspace/core/';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      { users: usersReducer },
      {
        initialState: { users: usersInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([UsersEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [UsersFacade]
})
export class StateModule {}
