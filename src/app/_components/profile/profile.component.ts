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
    this.bookings = [
      {
        id: 3,
        name: 'Saturno',
        description: 'Lorem ipsum Aut nisi laboriosam similique. Aperiam eligendi enim ipsam mollitia dolore fuga quas doloremque nemo in, illo reprehenderit.',
        image: '../../../assets/saturn.png',
        price: 90,
        stock: 5
      },
      {
        id: 4,
        name: 'Juno',
        description: 'Lorem ipsum Aut nisi laboriosam similique. Aperiam eligendi enim ipsam mollitia dolore fuga quas doloremque nemo in, illo reprehenderit.',
        image: '../../../assets/juno.jpg',
        price: 222,
        stock: 5
      }
    ];
    //this.userInfo = this.flightService.getUserInfo();
    
  }

  deleteUser() {
    Swal.fire('Good job!', `You delete the ${this.userInfo.age} user!`, 'error');
    this.flightService.deleteUser( this.userInfo.age );
  }

}
