import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentDetailesComponent } from './student-detailes/student-detailes.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'discovery', component:DiscoveryComponent},
  {path: 'attendance', component:AttendanceComponent},
  {path: 'student', component:StudentDetailesComponent},
  {path: 'from',component:FormComponent},
  { path:'login',component:LoginComponent},
  {path:'sform',component:StudentFormComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
