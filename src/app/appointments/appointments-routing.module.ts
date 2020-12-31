import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppointmentlistComponent} from './appointmentlist/appointmentlist.component';
import {AddpatientComponent} from './addpatient/addpatient.component'

const routes: Routes = [
    {path:'listappts', component:AppointmentlistComponent},
    {path:'addappts', component:AddpatientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
