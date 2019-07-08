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

	//public dentists : Observable<User[]>;

	public dentistList: User[] = [];

  	constructor(public formBuilder: FormBuilder, public dentist: DentistService) {
  		this.form = this.formBuilder.group({
        	dni: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)]],
        	date: ['', Validators.required],
  		  	hour: ['', Validators.required]
     	 });


      this.dentist.returnAll().subscribe((res) => {
        res.forEach(r => {
          let user = new User(r.payload.doc.data());
            if (user["type"] == "Especialista") {

              console.log(user["lastName"]);

              this.dentistList.push(user);
              console.log(this.dentistList.length);

          //this.users.push(user["lastName"]);
            }
        })
      });

       /*this.dentist.returnAll().forEach( response => {
         this.selectedObj.push(response);
         //console.log(this.selectedObj);
      });*/

      //console.log("En componente: " +  this.dentist.returnAll().toString());

      /*console.log("asd",this.dentist.returnAll().toString());

  		this.dentist.returnAll().forEach( response => {
  			this.selectedObj = response.toString();

        console.log("reesponse", response.toString());
  		});*/
  		
  	}

  	ngOnInit() {

  	}

}
