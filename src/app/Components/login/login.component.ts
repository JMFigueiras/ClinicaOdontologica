import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from './../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	  public form: FormGroup;

  	constructor(public formBuilder: FormBuilder, public userService: UserService, private router: Router) {
  		this.form = this.formBuilder.group({
  			email: ['', Validators.required],
  			password: ['', Validators.required]
  		});

  	}

  	ngOnInit() {
  	}

  	public tryLogin(){
  		const email: string = this.form.get('email').value;
    	const password: string = this.form.get('password').value;
    	this.userService.userLogin(email, password);
  	}

}
