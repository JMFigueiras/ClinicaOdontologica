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

    public errorMessage: string;
    public error: boolean;
    public success: boolean;

  	constructor(public formBuilder: FormBuilder, public userService: UserService, private router: Router) {
  		this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
  		  type: ['Cliente', [Validators.required]],
        recaptcha: ['', [Validators.required]],
        loader: ['Cliente', [Validators.required]]
      });

      this.errorMessage = '';
      this.error = false;
      this.success = false;
  	}

  	ngOnInit() {
  	}

    public defaultLoader(type: string){

      let user: any = '';

      switch(type){
        case 'Administrador':
        user = { email: 'administrador@gmail.com', password: '123456', type: 'Administrador', recaptcha: '', loader: 'Administrador' };
        this.form.setValue(user);
        break;
        case 'Especialista':
        user = { email: 'especialista@gmail.com', password: '123456', type: 'Especialista', recaptcha: '', loader: 'Especialista' };
        this.form.setValue(user);
        break;
        case 'Recepcionista':
        user = { email: 'recepcionista@gmail.com', password: '123456', type: 'Recepcionista', recaptcha: '', loader: 'Recepcionista' };
        this.form.setValue(user);
        break;
        case 'Cliente':
        user = { email: 'cliente@gmail.com', password: '123456', type: 'Cliente', recaptcha: '', loader: 'Cliente' };
        this.form.setValue(user);
        break;
        default:
        user = { email: '', password: '', type: 'Cliente', recaptcha: '', loader: 'Cliente' };
        break;
      }

    }

  	public tryLogin(){

      if (this.form.valid) {
    		const email: string = this.form.get('email').value;
      	const password: string = this.form.get('password').value;
        const type: string = this.form.get('type').value;

        console.log(type);

        this.userService.userLogin(email, password, type);
      } else {
        this.errorMessage = 'Debe completar los campos correctamente.';
        this.error = true;
      }

  	}

}
