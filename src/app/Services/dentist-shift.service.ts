import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DentistShiftService {

	constructor(private fireStore: AngularFirestore, private authService:AuthService) {}


	dentistShiftRegister(dni: string, date: string, hour: string, specialist: string): Promise<Object>{

  	//Validación...

  		const request: Object = {
	      dni: dni,
	      date: date,
	      hour: hour,
	      specialist: specialist
	    };

	    return this.fireStore.collection('dentistShifts').add(request);


  }

    	/*public userRegister(dni: string, email: string, password: string, firstName: string, lastName: string, type: string, file: any): Promise<Object> {
	    const request: Object = {
	      dni: dni,
	      email: email,
	      password: password,
	      firstName: firstName,
	      lastName: lastName,
	      type: type
	    };

	    this.authService.signUp(email, password);

	    console.log(this.fireStorage.upload(dni, file));

	    return this.fireStore.collection('users').add(request);
	}*/
}
