import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	@Output() mail = new EventEmitter<String>();

	constructor(public fireAuth: AngularFireAuth, public fireStore: AngularFirestore, public router: Router) {}

	signIn(email: string, password: string, type: string) {
		let usuario;
		this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(value => {

			this.fireStore.collection('users').snapshotChanges().subscribe((res) => {
				res.forEach(r => {
					usuario = r.payload.doc.data();
					if (usuario["email"] == email && usuario["type"] == type) {
						localStorage.setItem("token", JSON.stringify(usuario));
						console.log("Entro");
						this.router.navigate(['/Dashboard']);
					}
				})
			});

		})
		.catch(e => {
			console.log('Error, algo fallo!', e.message);
		});
	}

	signUp(email: string, password: string) {
		this.fireAuth
	      .auth
	      .createUserWithEmailAndPassword(email, password)
	      .then(value => {
	        console.log('Registro correcto!', value);
	        this.router.navigate(['/Login']);
	      })
	      .catch(err => {
	        console.log('Error, algo fallo!',err.message);
	      });    
	}
}
