import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
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

  @ViewChild('modal1') modal1: ElementRef;
  @ViewChild('modal2') modal2: ElementRef;

  @Input() public id;

  public modalReference1: any = null;
  public modalReference2: any = null;

  public dentistShiftList = [];

  public user;

  //public isSpecialist: boolean = false;

  //public open: boolean = false;


  public show: number = 0;

  constructor(public dentistShift: DentistShiftService, private fireStore: AngularFirestore, private modalService: NgbModal) {

  	this.user = JSON.parse(localStorage.getItem('token'));

  	if(this.user.type == "Especialista"){
  		this.dentistShiftList = dentistShift.returnAllBySpecialist(this.user.lastName);
  		//this.isSpecialist = true;
  	}
  	else if(this.user.type == "Cliente"){
  		console.log(this.user.dni);
    	this.dentistShiftList = dentistShift.returnAllByDNI(this.user.dni);
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

  public openModal1(id: string){


  	this.modalReference1 = this.modalService.open(this.modal1);

  	this.id = id;

  }

  public closeModal1(){
  	this.modalReference1.close();
  }

  public openModal2(){

  	this.modalReference2 = this.modalService.open(this.modal2);

  }

  public closeModal2(){
  	this.modalReference2.close();
  }

}