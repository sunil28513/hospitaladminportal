import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CaadminComponent } from './caadmin/caadmin.component';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CaadminComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports:[
    CaadminComponent, AdminComponent
  ],
})

export class AdminModule { }


