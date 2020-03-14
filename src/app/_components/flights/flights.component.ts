import { FlightsService } from './../../services/flights.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights : any;
  constructor( private flightService: FlightsService ) { }

  ngOnInit() {
    this.flights = this.flightService.getAllFlights();
  }

}
