import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor() { }

  getUserInfo() {
    http.get('localhost:3000')
  }
}
