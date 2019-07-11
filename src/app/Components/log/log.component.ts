import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

	public logs = [];
	public imgs = [];

	constructor(private fireStore: AngularFirestore, private fireStorage: AngularFireStorage, private firebase: FirebaseApp) {

		this.logs = this.returnAll();

	}

  	public returnAll() {

  		//return this.fireStore.collection('users').snapshotChanges();
  		let log;

		this.fireStore.collection('logs').snapshotChanges().subscribe((res) => {
			res.forEach(r => {
				log = r.payload.doc.data();
	              
	            this.logs.push({
	                id: r.payload.doc.id,
	                data: r.payload.doc.data()
	            });

	   			this.returnImg(log["dni"] + ".png");

	            console.log(log["dni"]);

			})
		});

		return this.logs;
  	}

  	public returnImg(dni: string){
  		this.fireStorage.ref(dni).getDownloadURL().subscribe(r =>{
  			this.imgs.push(r.toString());
  		});

  		let file;

        file = this.fireStorage.ref(dni).getDownloadURL().subscribe(r =>{
        	console.log(r);
        });

        
    }

  ngOnInit() {
  }

}
