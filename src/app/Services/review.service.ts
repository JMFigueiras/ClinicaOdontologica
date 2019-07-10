import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

	constructor(private fireStore: AngularFirestore) {}


	reviewRegister(code: string, desc: string): Promise<Object>{

  	//Validación...

  		const request: Object = {
	      code: code,
	      desc: desc
	    };

	    return this.fireStore.collection('reviews').add(request);
  	}
}
