import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DentistShiftService } from '../../Services/dentist-shift.service';
import { ReviewService } from '../../Services/review.service';
import { PollService } from '../../Services/poll.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import * as $ from "jquery";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import * as CanvasJS from 'canvasjs/canvasjs.min';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public dentistShiftList = [];

  public pedidos: number = 0;
  
  public atendidos: number = 0;

  public count: number = 0;


  constructor(public dentistShift: DentistShiftService, private fireStore: AngularFirestore) {

  	/*this.dentistShiftList = dentistShift.returnAll();

  	console.log(this.dentistShiftList.length);

  	//this.count = dentistShift.count();

  	console.log(this.fireStore.collection('dentistShifts').snapshotChanges.length);

  	console.log(this.fireStore.collection('dentistShifts').snapshotChanges().subscribe(
  		res =>{res.toString()}));


	this.fireStore.collection('dentistShifts').snapshotChanges().subscribe((res) => {
			res.forEach(r => {
				this.count++;         
			})
		});

	console.log(this.count);*/

  }

  ngOnInit() {
  	this.calculate();

  	
   	this.create1();

   	this.create2();

   	this.create3();
  }

  public calculate(){
  	let shift;

		this.fireStore.collection('dentistShifts').snapshotChanges().subscribe((res) => {
			res.forEach(r => {
				shift = r.payload.doc.data();

					this.dentistShiftList.push({
	                	id: r.payload.doc.id,
	                	data: r.payload.doc.data()
	              	});

	              	if(shift["status"] === "Pedido"){
	              		this.pedidos++;
	              	}

	              	if(shift["status"] === "Atendido"){
	              		this.atendidos++;
	              	}

	              	console.log(shift["date"]);
	              	console.log(shift["dni"]);
	              	console.log(shift["hour"]);
	              	console.log(shift["specialist"]);
	              	console.log(shift["status"]);

	              	this.count++;            
			})
	});

  }

  public create1(){
  	let chart1 = new CanvasJS.Chart("chartContainer1", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Estadisticas de EMPLEADOS"
		},
		data: [{
			type: "column",
			dataPoints: [
				{ y: 71, label: "Apple" },
				{ y: 55, label: "Mango" },
				{ y: 50, label: "Orange" },
				{ y: 65, label: "Banana" },
				{ y: 95, label: "Pineapple" },
				{ y: 68, label: "Pears" },
				{ y: 28, label: "Grapes" },
				{ y: 34, label: "Lychee" },
				{ y: 14, label: "Jackfruit" }
			]
		}]
	});
		
	chart1.render();
  }

  public create2(){


   	setTimeout(() => {

    }, 10000);

	let chart2 = new CanvasJS.Chart("chartContainer2", {
		theme: "light2",
		animationEnabled: true,
		exportEnabled: true,
		title:{
			text: "Estadisticas de TURNOS"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
			indexLabel: "{name} - #percent%",
			dataPoints: [
				{ y: this.fireStore.collection('dentistShifts').snapshotChanges.length, name: "TURNOS TOTALES" },
				{ y: this.pedidos, name: "TURNOS PEDIDOS" },
				{ y: this.atendidos, name: "TURNOS ATENDIDOS" }
			]
		}]
	});
		
	chart2.render();
  }

  public create3(){
	let dataPoints = [];
	let y = 0;		
	for ( var i = 0; i < 10000; i++ ) {		  
		y += Math.round(5 + Math.random() * (-5 - 5));	
		dataPoints.push({ y: y});
	}
	let chart3 = new CanvasJS.Chart("chartContainer3", {
		zoomEnabled: true,
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Estadisticas de ESPECIALIDADES"
		},
		subtitles:[{
			text: "Try Zooming and Panning"
		}],
		data: [
		{
			type: "line",                
			dataPoints: dataPoints
		}]
	});
		
	chart3.render();  	
  }



}
