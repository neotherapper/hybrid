import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@workspace/ionic';
import { TranslateModule } from '@ngx-translate/core';

const MODULES = [
  TranslateModule,
  UIModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
