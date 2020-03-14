import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  inputs: ['id','name','description','image','price','stock','from']

})
export class FlightCardComponent implements OnInit {
  id: number;
  name: string;
  description: string|null = null;
  image: string;
  price: number|null = null;
  stock: number|null = null;
  from: string;

  constructor() { }

  ngOnInit() {
    console.log(this.stock);
  }

}
