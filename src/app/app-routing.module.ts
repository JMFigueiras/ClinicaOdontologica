import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DentistShiftComponent } from './Components/dentist-shift/dentist-shift.component';
import { DentistShiftViewerComponent } from './Components/dentist-shift-viewer/dentist-shift-viewer.component';
import { AuthGuard } from './Guards/auth.guard';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './Components/statistics/statistics.component';

//const routes: Routes = [];

/*const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'DentistShift', component: DentistShiftComponent },
  { path: 'DentistShiftViewer', component: DentistShiftViewerComponent }
];*/

const routes: Routes = [

	{ path: '', redirectTo: 'Login', pathMatch: 'full' },
	{ path: 'Dashboard', component: DashboardComponent,
		canActivate: [AuthGuard],
		data: { types: ['Administrador','Cliente','Especialista','Recepcionista'] },

		children: [
		{
			path: 'Register',
			component: RegisterComponent,
			canActivate: [AuthGuard],
			data: { types: ['Administrador'] }
		},
		{
			path: 'DentistShift',
			component: DentistShiftComponent,
			canActivate: [AuthGuard],
			data: { types: ['Recepcionista','Cliente'] }
		},
		{
			path: 'DentistShiftViewer',
			component: DentistShiftViewerComponent,
			canActivate: [AuthGuard],
			data: { types: ['Administrador','Cliente','Especialista','Recepcionista'] }
		},
		{
			path: 'Statistics',
			component: StatisticsComponent,
			canActivate: [AuthGuard],
			data: { types: ['Administrador'] }
		}
	  ]
 	},
	{ path: 'Login', component: LoginComponent }
];

@NgModule({
  imports:[ CommonModule,
RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
