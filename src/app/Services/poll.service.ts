import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PollService {

	public polls = [];

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

  	public returnAll() {

  		//return this.fireStore.collection('users').snapshotChanges();
  		let poll;

		this.fireStore.collection('polls').snapshotChanges().subscribe((res) => {
			res.forEach(r => {
				poll = r.payload.doc.data();
	              
	            	this.polls.push({
	                	id: r.payload.doc.id,
	                	data: r.payload.doc.data()
	              	});
				
			})
		});

		return this.polls;
  	}
}
