import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentDetailesComponent } from './student-detailes/student-detailes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { StudentFormComponent } from './student-form/student-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DiscoveryComponent,
    AttendanceComponent,
    StudentDetailesComponent,
    FormComponent,
    LoginComponent,
    StudentFormComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
