import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { throwIfAlreadyLoaded } from '@workspace/utils';
import { AbcCoreModule } from '@workspace/web';

@NgModule({
  imports: [AbcCoreModule, IonicModule.forRoot()]
})
export class AbcIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AbcIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'AbcIonicCoreModule');
  }
}
