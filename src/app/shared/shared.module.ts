import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material';

import { PageComponent } from './components/page/page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    PageComponent
  ],
  exports: [
    MaterialModule,
    PageComponent
  ]
})
export class SharedModule { }
