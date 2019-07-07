import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from './../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public form: FormGroup;

  	constructor(public formBuilder: FormBuilder, public userService: UserService, private router: Router) {

  		this.form = this.formBuilder.group({
  			dni: ['', Validators.required],
  			email: ['', Validators.required],
  			password: ['', Validators.required],
  			firstName: ['', Validators.required],
  			lastName: ['', Validators.required],
  			type: ['', Validators.required],
  		});

  	}

	ngOnInit() {
	}

	public tryRegister(){
		const dni: string = this.form.get('dni').value;
		const email: string = this.form.get('email').value;
    	const password: string = this.form.get('password').value;
    	const firstName: string = this.form.get('firstName').value;
    	const lastName: string = this.form.get('lastName').value;
    	const type: string = this.form.get('type').value;
		this.userService.userRegister(dni, email, password, firstName, lastName, type, "Archivo.jpg");
	}

}
