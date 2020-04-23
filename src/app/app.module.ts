import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormioModule, FormioAppConfig} from 'angular-formio';
// import {FormioWizard} from 'angular-formiowizard';
import { HeaderComponent } from './header/header.component';
import { WizardComponent } from './wizard/wizard.component';
import { SpecialityMasterComponent } from './speciality-master/speciality-master.component';
import { ServiceMasterComponent } from './service-master/service-master.component';
import { UserComponent } from './user/user.component';
import { DoctorMasterComponent } from './doctor-master/doctor-master.component';
import { MarketingLinkComponent } from './marketing-link/marketing-link.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { TelehealthserviceComponent } from './telehealthservice/telehealthservice.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    WizardComponent,
    SpecialityMasterComponent,
    ServiceMasterComponent,
    UserComponent,
    DoctorMasterComponent,
    MarketingLinkComponent,
    TelehealthserviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    BreadcrumbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppMaterialModule,
    MatSlideToggleModule
  ],
  entryComponents: [TelehealthserviceComponent],
  providers:    [ {provide: FormioAppConfig, useValue: {
    appUrl: 'https://examples.form.io',
    apiUrl: 'https://api.form.io',
    icons: 'fontawesome'
  }},
  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}} ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
