import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
//import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegisterComponent } from './Components/register/register.component';
import { DentistShiftComponent } from './Components/dentist-shift/dentist-shift.component';
import { DentistShiftViewerComponent } from './Components/dentist-shift-viewer/dentist-shift-viewer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxCaptchaModule } from 'ngx-captcha';
import { TypeValidatorDirective } from './Directives/type-validator.directive';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { LogComponent } from './Components/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    RegisterComponent,
    DentistShiftComponent,
    DentistShiftViewerComponent,
    SpinnerComponent,
    TypeValidatorDirective,
    StatisticsComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  	AngularFirestoreModule, // Imports firebase/firestore, only needed for database features
    AngularFireStorageModule,
  	AngularFireAuthModule, // Imports firebase/auth, only needed for auth features
  	FormsModule,
  	ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NgbModule.forRoot(),
    NgxSpinnerModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
