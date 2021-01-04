import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
// import { AdminRoutingModule } from '../app.routing';
import { AppModule } from '../app.module';
import { ApptComponent } from './appt/appt.component';
import { SharedModule } from '../shared/shared.module';
import { CreateappointComponent } from './createappoint/createappoint.component';
import {FormsModule} from '@angular/forms'



@NgModule({
  declarations: [AppointmentlistComponent, AddpatientComponent, ApptComponent, CreateappointComponent],
  imports: [
    CommonModule,
   // AdminRoutingModule,
    AppointmentsRoutingModule,
    SharedModule,
    FormsModule
  ],
 
  exports:[
    AppointmentlistComponent, AddpatientComponent,CreateappointComponent
  ]
})
export class AppointmentsModule { }
