import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

	public reviews = [];

	constructor(private fireStore: AngularFirestore) {}


	reviewRegister(code: string, desc: string): Promise<Object>{

  	//Validación...

  		const request: Object = {
	      code: code,
	      desc: desc
	    };

	    return this.fireStore.collection('reviews').add(request);
  	}

  	public returnById(id: string) {

  		//return this.fireStore.collection('users').snapshotChanges();
  		let review;

		this.fireStore.collection('reviews').snapshotChanges().subscribe((res) => {
			res.forEach(r => {
				review = r.payload.doc.data();

				if(review["code"] == id){

					this.reviews.push({
	                	id: r.payload.doc.id,
	                	data: r.payload.doc.data()
	              	});

				}
				
			})
		});

		return this.reviews;
  	}
}
