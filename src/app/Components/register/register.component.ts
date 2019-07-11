import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
	selectedFiles: FileList;

	public errorMessage: string;
	public error: boolean;
	public success: boolean;

  	constructor(public formBuilder: FormBuilder, public userService: UserService, private router: Router) {
  		this.resetForm();

  		this.errorMessage = '';
  		this.error = false;
  		this.success = false;
  	}

	ngOnInit() {
	}


	public resetForm(){
		this.form = this.formBuilder.group({
  			dni: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)]],
  			email: ['', [Validators.required, Validators.email]],
  			password: ['', [Validators.required, Validators.minLength(6)]],
  			firstName: ['', [Validators.required]],
  			lastName: ['', [Validators.required]],
  			type: ['Cliente', [Validators.required]],
  			file: ['', [Validators.required, Validators.nullValidator]],
        recaptcha: ['']
  		});
	}

	public tryRegister(){

		if (this.form.valid) {
			const dni: string = this.form.get('dni').value;
			const email: string = this.form.get('email').value;
	    	const password: string = this.form.get('password').value;
	    	const firstName: string = this.form.get('firstName').value;
	    	const lastName: string = this.form.get('lastName').value;
	    	const type: string = this.form.get('type').value;

	    	//let file = this.form.get('file');
	    	let file = this.selectedFiles.item(0);

			this.userService.userRegister(dni, email, password, firstName, lastName, type, file)
				.then(
					response => {
              			this.success = true;
              			this.resetForm();
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


	onFileChange(event) {
		if(event.target.files.length > 0){
			this.selectedFiles = event.target.files;
		}
  }	

}
