import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PollService {

	constructor(private fireStore: AngularFirestore) {}


	pollRegister(dni: string, clinic: string, specialist: string, desc: string): Promise<Object>{

  	//Validación...

  		const request: Object = {
	      dni: dni,
	      clinic: clinic,
	      specialist: specialist,
	      desc: desc
	    };

	    return this.fireStore.collection('polls').add(request);
  	}
}
