import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public form: FormGroup;

  	constructor(public formBuilder: FormBuilder, public authService: AuthService, private router: Router) {

  		this.form = this.formBuilder.group({
  			mail: ['', Validators.required],
  			clave: ['', Validators.required]
  		});

  	}

  	ngOnInit() {
  	}

  	public tryLogin(){

  		const mail: string = this.form.get('mail').value;
    	const clave: string = this.form.get('clave').value;
    	this.authService.login(mail, clave);
  	}

}
