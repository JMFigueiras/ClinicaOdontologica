import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DentistShiftService {

	public dentistShifts = [];

	constructor(private fireStore: AngularFirestore, private authService:AuthService) {}


	dentistShiftRegister(dni: string, date: string, hour: string, specialist: string): Promise<Object>{

  	//Validación...

  		const request: Object = {
	      dni: dni,
	      date: date,
	      hour: hour,
	      specialist: specialist,
	      status: 'Pedido'
	    };

	    return this.fireStore.collection('dentistShifts').add(request);
  	}


  	public returnAll() {

  		let shift

		this.fireStore.collection('dentistShifts').snapshotChanges().subscribe((res) => {
			res.forEach(r => {
				shift = r.payload.doc.data();

					this.dentistShifts.push({
	                	id: r.payload.doc.id,
	                	data: r.payload.doc.data()
	              	});

	              	console.log(shift["date"]);              
			})
		});

		return this.dentistShifts;
  	}


  	public returnAllByDNI(dni: string) {

  		console.log("Entro");

  		let shift;

		this.fireStore.collection('dentistShifts').snapshotChanges().subscribe((res) => {
			res.forEach(r => {
				shift = r.payload.doc.data();

				if(shift["dni"] == dni){

					console.log("Entro más");

					console.log(shift["date"]);

					this.dentistShifts.push({
	                	id: r.payload.doc.id,
	                	data: r.payload.doc.data()
	              	});

				}	              

			})
		});

		return this.dentistShifts;
  	}

  	public returnAllBySpecialist(specialist: string) {

  		let shift

		this.fireStore.collection('dentistShifts').snapshotChanges().subscribe((res) => {
			res.forEach(r => {
				shift = r.payload.doc.data();

				if(shift["specialist"] == specialist){

					this.dentistShifts.push({
	                	id: r.payload.doc.id,
	                	data: r.payload.doc.data()
	              	});

				}	              

			})
		});

		return this.dentistShifts;
  	}


  	public count() {

  		let shift;

  		let count = 0;

		this.fireStore.collection('dentistShifts').snapshotChanges().subscribe((res) => {
			res.forEach(r => {
				shift = r.payload.doc.data();

				count++;              
			})
		});

		return count;
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
