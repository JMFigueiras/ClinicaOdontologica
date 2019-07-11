import { Component, OnInit } from '@angular/core';
import { DentistService } from '../../Services/dentist.service';
import { DentistShiftService } from '../../Services/dentist-shift.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './../../Entities/user';

@Component({
  selector: 'app-dentist-shift',
  templateUrl: './dentist-shift.component.html',
  styleUrls: ['./dentist-shift.component.css']
})
export class DentistShiftComponent implements OnInit {

	  public form: FormGroup;

	  public dentistList = [];

    public errorMessage: string;
    public error: boolean;
    public success: boolean;

  	constructor(public formBuilder: FormBuilder, public dentist: DentistService, public dentistShift: DentistShiftService) {
      
      let user = JSON.parse(localStorage.getItem('token'));

      this.resetForm(user.dni);

      this.errorMessage = '';
      this.error = false;
      this.success = false;

      this.dentistList = this.dentist.returnAll();
  	}

    resetForm(dni: string){
      this.form = this.formBuilder.group({
        dni: [dni, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)]],
        date: ['', Validators.required],
        hour: ['', [Validators.required, Validators.min(8), Validators.max(19)]],
        duration: ['', [Validators.required, Validators.min(15), Validators.max(60)]],
        lastName: ['', Validators.required]
      });
    }

  	ngOnInit() {

  	}

    public tryDentistShift(){

      console.log(this.form.valid);

    if (this.form.valid) {
        const dni: string = this.form.get('dni').value;
        const date: string = this.form.get('date').value;
        const hour: string = this.form.get('hour').value;
        const lastName: string = this.form.get('lastName').value;

      this.dentistShift.dentistShiftRegister(dni, date, hour, lastName)
        .then(
          response => {
                    this.success = true;
                    this.resetForm(dni);
                    location.reload();
                }
            )
            .catch(
                error => {
                  this.error = true;
                  this.errorMessage = error['Mensaje'];
                  console.log(error)
                }
            );
          } else {
              this.errorMessage = 'Debe completar los campos correctamente.';
          this.error = true;
        }
    }

}
