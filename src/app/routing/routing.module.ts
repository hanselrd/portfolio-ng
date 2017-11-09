import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { MaterialModule } from '@app/material';

import { CvComponent } from './components/cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { UnderConstructionDialogComponent } from './components/home/under-construction-dialog/under-construction-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  declarations: [
    CvComponent,
    HomeComponent,
    NotFoundComponent,
    PrivacyPolicyComponent,
    UnderConstructionDialogComponent
  ],
  entryComponents: [
    UnderConstructionDialogComponent
  ],
  exports: [
    RouterModule,
    CvComponent
  ]
})
export class RoutingModule { }
