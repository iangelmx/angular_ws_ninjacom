import { Component, OnInit } from '@angular/core';
import { FlightsService } from './../../services/flights.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  bookings = [];
  constructor( private flightService: FlightsService ) { }

  ngOnInit(): void {
    //this.userInfo = this.flightService.getUserInfo();
    
  }

  deleteUser() {
    Swal.fire('Good job!', `You delete the ${this.userInfo.age} user!`, 'error');
    this.flightService.deleteUser( this.userInfo.age );
  }

}
