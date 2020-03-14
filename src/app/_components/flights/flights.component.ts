import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights = [
    {
      id: 1,
      name: 'Paneta Ilyth',
      description: 'Lorem ipsum Aut nisi laboriosam similique. Aperiam eligendi enim ipsam mollitia dolore fuga quas doloremque nemo in, illo reprehenderit.',
      image: '../../../assets/engooplanet.jpg',
      price: 5000,
      stock: 5
    },
    {
      id: 2,
      name: 'Jupiter',
      description: 'Lorem ipsum Aut nisi laboriosam similique. Aperiam eligendi enim ipsam mollitia dolore fuga quas doloremque nemo in, illo reprehenderit.',
      image: '../../../assets/jupiter2.jpg',
      price: 8888,
      stock: 5
    },
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
    },
    {
      id: 5,
      name: 'Galaxia de Orion',
      description: 'Lorem ipsum Aut nisi laboriosam similique. Aperiam eligendi enim ipsam mollitia dolore fuga quas doloremque nemo in, illo reprehenderit.',
      image: '../../../assets/orion.jpg',
      price: 123456,
      stock: 5
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
