import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  CoreModule,
  AppComponent,
  FooterComponent,
  HeaderComponent,
  SidenavComponent
} from '@app/core';
import { RoutingModule } from '@app/routing';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
