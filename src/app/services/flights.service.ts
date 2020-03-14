import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  info: any;
  bookings: any;
  flights: any;

  constructor() { }

  testService() {
    return 'Hello world from service';
  }

  getUserInfo() {
    this.info = {
      name: 'Ángel Ramírez Alvarez',
      age : 23
    };
    return this.info;
    //return this.http.get<any>('localhost:3000')
  }

  getBookings() {
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
    return this.bookings;
  }

  getAllFlights() {
    this.flights = [
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
    return this.flights;
  }



  deleteUser(id: number) {
    console.log('Se eliminará el Id:' + id);
  }

}
