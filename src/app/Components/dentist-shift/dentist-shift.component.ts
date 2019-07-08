import { Component, OnInit } from '@angular/core';
import { DentistService } from '../../Services/dentist.service';
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

  	constructor(public formBuilder: FormBuilder, public dentist: DentistService) {
  		this.form = this.formBuilder.group({
        	dni: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)]],
        	date: ['', Validators.required],
  		  	hour: ['', Validators.required]
     	 });

      this.dentistList = this.dentist.returnAll();
  	}

  	ngOnInit() {

  	}

}
