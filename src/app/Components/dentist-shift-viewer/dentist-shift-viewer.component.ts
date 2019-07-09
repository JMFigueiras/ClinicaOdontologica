import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DentistShiftService } from '../../Services/dentist-shift.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as $ from "jquery";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dentist-shift-viewer',
  templateUrl: './dentist-shift-viewer.component.html',
  styleUrls: ['./dentist-shift-viewer.component.css']
})
export class DentistShiftViewerComponent implements OnInit {

  @ViewChild('modalMensaje') modal: ElementRef;

  public dentistShiftList = [];

  constructor(public dentistShift: DentistShiftService, private fireStore: AngularFirestore, private modalService: NgbModal) {

  	let user = JSON.parse(localStorage.getItem('token'));

  	if(user.type == "Especialista"){
  		this.dentistShiftList = dentistShift.returnAllBySpecialist(user.lastName);
  	}
  	else if(user.type == "Cliente"){
  		console.log(user.dni);
    	this.dentistShiftList = dentistShift.returnAllByDNI(user.dni);
  	}
  	
  }

  ngOnInit() {
  }

  public attend(id: string, dni: string, date: string, hour: string, specialist: string) {

  	const data: Object = {
  		dni: dni,
  		date: date,
  		hour: hour,
  		specialist: specialist,
  		status: 'Atendido'
  	};

	this.dentistShiftList = [];

  	this.fireStore.collection('dentistShifts').doc(id).set(data);

  	setTimeout(() => 
	{
	   location.reload();
	},
	3000);
  }

  public cancel(id: string){

  	this.dentistShiftList = [];
  	
  	this.fireStore.collection('dentistShifts').doc(id).delete();

  	setTimeout(() => 
	{
	   location.reload();
	},
	3000)

  }

  abrirModal(){
  	this.modalService.open(this.modal);
  }
  
}
