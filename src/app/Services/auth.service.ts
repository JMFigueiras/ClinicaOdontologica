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

	constructor(public afa: AngularFireAuth, public afs: AngularFirestore, public router: Router) {}

	login(mail: string, clave: string) {
		let usuario;
		this.afa.auth.signInWithEmailAndPassword(mail, clave).then(value => {
			console.log('Logueo correcto!');
			this.afs.collection('usuarios').snapshotChanges().subscribe((res) => {
				res.forEach(r => {
					usuario = r.payload.doc.data();
					if (usuario["mail"] == mail) {
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
}
