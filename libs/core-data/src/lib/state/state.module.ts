import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  PEOPLE_FEATURE_KEY,
  initialState as peopleInitialState
} from './people/people.reducer';
import { PeopleEffects } from './people/people.effects';
import { PeopleFacade } from './people/people.facade';
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@workspace/core';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  USER_FEATURE_KEY,
  initialState as userInitialState
} from './user/user.reducer';
import { UserEffects } from './user/user.effects';
import { UserFacade } from './user/user.facade';

import { reducers } from '.';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      reducers,
      {
        initialState: {
          people: peopleInitialState,
          user: userInitialState
        },
        // metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([PeopleEffects, UserEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
    // StoreModule.forFeature(USER_FEATURE_KEY, userReducer, {
    //   initialState: userInitialState
    // })
  ],
  providers: [PeopleFacade, UserFacade]
})
export class StateModule {}
