import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DentistShiftComponent } from './Components/dentist-shift/dentist-shift.component';
import { DentistShiftViewerComponent } from './Components/dentist-shift-viewer/dentist-shift-viewer.component';

//const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: 'DentistShift', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'DentistShift', component: DentistShiftComponent },
  { path: 'DentistShiftViewer', component: DentistShiftViewerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
