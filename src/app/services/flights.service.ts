import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  info: any;
  bookings: any;

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

  deleteUser(id: number) {
    console.log('Se eliminará el Id:' + id);
  }

}
