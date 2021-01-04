import { Routes, RouterModule } from '@angular/router';  
import {AppointmentsModule} from './appointments/appointments.module';

import { NgModule } from '@angular/core';
import { ApptComponent } from './appointments/appt/appt.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './user/login/login.component';
import { AddpatientComponent } from './appointments/addpatient/addpatient.component';
import { AppointmentlistComponent } from './appointments/appointmentlist/appointmentlist.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CaadminComponent } from './admin/caadmin/caadmin.component';
import { CreateappointComponent } from './appointments/createappoint/createappoint.component'


const arr: Routes = [
    {
      path: '',
      redirectTo: 'user/login', 
      pathMatch: 'full'
    },
    {
      path: 'appointments',
      component: ApptComponent, // this is the Appointment component 
      children: [
        {
          path: 'createappts', // Create Appt
          component:CreateappointComponent, // child route component that the router renders
        },
        {
          path: 'addappts', // add patient
          component: AddpatientComponent, // child route component that the router renders
        },
        {
          path: 'listappts',
          component: AppointmentlistComponent, // another child route component that the router renders
        },
      ],
    },
    {
    path: 'user',
    component: UserComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'login', // add patient
        component: LoginComponent, // child route component that the router renders
      },
    ],
  },
 
  {
    path: 'admin',
    component: AdminComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'addadmin', // add patient
        component: CaadminComponent, // child route component that the router renders
      },
    ],
  },
  ];

 export const routing = RouterModule.forChild(arr);  