import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  	constructor(private fireStore: AngularFirestore, private fireStorage: AngularFireStorage, private authService:AuthService) { }

  	public userLogin(email: string, password: string){
  		this.authService.signIn(email, password);
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

	    //this.authService.signUp(email, password);

	    let retorno;
	    //retorno += this.fireStore.collection('users').add(request);
	    retorno += this.fireStorage.upload(dni, file);
	    return retorno;
	}
}
