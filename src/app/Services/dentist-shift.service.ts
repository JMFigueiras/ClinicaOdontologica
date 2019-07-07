import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DentistShiftService {

  constructor(private fireStore: AngularFirestore, private authService:AuthService) {}


  dentistShiftRegister(dni: number, date: string, hour: string){

  	let user;


  }
}
