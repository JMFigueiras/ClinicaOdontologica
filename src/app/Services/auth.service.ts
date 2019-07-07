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

	signIn(email: string, password: string) {
		let usuario;
		this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
			console.log('Logueo correcto!');
			this.fireStore.collection('usuarios').snapshotChanges().subscribe((res) => {
				res.forEach(r => {
					usuario = r.payload.doc.data();
					if (usuario["email"] == email) {
						localStorage.setItem("token", JSON.stringify(usuario));
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
	      })
	      .catch(err => {
	        console.log('Error, algo fallo!',err.message);
	      });    
	}
}
