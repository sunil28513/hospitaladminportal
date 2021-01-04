import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {appointment} from '../model/appointment'

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { CreateappointsComponent } from './createappoints/createappoints.component';


@NgModule({
  declarations: [AppointmentlistComponent, AddpatientComponent, CreateappointsComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    FormsModule
  ],
  exports:[
    AppointmentlistComponent, AddpatientComponent, CreateappointsComponent
  ]
})
export class AppointmentsModule { }
