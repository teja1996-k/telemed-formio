import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormioModule, FormioAppConfig} from 'angular-formio';
// import {FormioWizard} from 'angular-formiowizard';
import { HeaderComponent } from './header/header.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
  ],
  providers:    [ {provide: FormioAppConfig, useValue: {
    appUrl: 'https://examples.form.io',
    apiUrl: 'https://api.form.io',
    icons: 'fontawesome'
  }} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
