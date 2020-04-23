import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { WizardComponent } from './wizard/wizard.component';
import { SpecialityMasterComponent } from './speciality-master/speciality-master.component';
import { ServiceMasterComponent } from './service-master/service-master.component';
import { UserComponent } from './user/user.component';
import { DoctorMasterComponent } from './doctor-master/doctor-master.component';
import { MarketingLinkComponent } from './marketing-link/marketing-link.component';


const routes: Routes = [
  {
    path:"home",
    component:WizardComponent,
    
    children: [
      {
        path:"",
        pathMatch:'full',
        redirectTo: "admin"
      },
      {
        path:"admin",
        component:AdminComponent,
        data: { breadcrumb: 'Administrator'},
      },
      {
        path:"speciality",
        component:SpecialityMasterComponent,
        data: { breadcrumb: 'Specialities'}
      },
      {
        path:"service",
        component:ServiceMasterComponent,
        data: { breadcrumb: 'Service Master'}
      },
      {
        path:"doctor",
        component:DoctorMasterComponent,
        data: { breadcrumb: 'Doctor Master'}
      },
      {
        path:"user",
        component:UserComponent,
        data: { breadcrumb: 'User'}
      },
      {
        path:"marketing",
        component: MarketingLinkComponent,
        data: { breadcrumb: 'Marketing Link Generation'}
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
