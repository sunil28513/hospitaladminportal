import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { AddpatientComponent } from './addpatient/addpatient.component';


@NgModule({
  declarations: [AppointmentlistComponent, AddpatientComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule
  ],
  exports:[
    AppointmentlistComponent, AddpatientComponent
  ]
})
export class AppointmentsModule { }
