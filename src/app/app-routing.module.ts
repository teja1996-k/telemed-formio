import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { WizardComponent } from './wizard/wizard.component';


const routes: Routes = [
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"home",
    component:WizardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
