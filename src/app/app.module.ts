import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from  '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import {AppointmentsModule} from './appointments/appointments.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './user/login/login.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    routing, 
    AppointmentsModule,
    UserModule,
    AdminModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
