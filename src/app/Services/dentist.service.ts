import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

import { User } from './../Entities/user';

@Injectable({
  providedIn: 'root'
})
export class DentistService {

	public dentists = [];

  	constructor(private fireStore: AngularFirestore, private fireStorage: AngularFireStorage, private authService:AuthService) { }

  	public returnAll() {

  		//return this.fireStore.collection('users').snapshotChanges();
  		let user;

		this.fireStore.collection('users').snapshotChanges().subscribe((res) => {
			res.forEach(r => {
				user = r.payload.doc.data();
				if (user["type"] == "Especialista") {
	              
	            	this.dentists.push({
	                	id: r.payload.doc.id,
	                	data: r.payload.doc.data()
	              	});
				}
			})
		});

		return this.dentists;
  	}

  	/*public userLogin(email: string, password: string, type: string){
  		this.authService.signIn(email, password, type);
  	}

  	public userRegister(dni: string, email: string, password: string, firstName: string, lastName: string, type: string, file: any): Promise<Object> {
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

	    return this.fireStore.collection('users').add(request) ;
	}*/
}
