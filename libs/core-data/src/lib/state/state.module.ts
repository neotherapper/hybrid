import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  PEOPLE_FEATURE_KEY,
  initialState as peopleInitialState,
  peopleReducer
} from './people/people.reducer';
import { PeopleEffects } from './people/people.effects';
import { PeopleFacade } from './people/people.facade';
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@workspace/core';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      { people: peopleReducer },
      {
        initialState: { people: peopleInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([PeopleEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [PeopleFacade]
})
export class StateModule {}
