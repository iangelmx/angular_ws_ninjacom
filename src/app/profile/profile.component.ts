import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo = {
    name: 'Ángel Ramírez',
    age : 23
  };

  constructor() { }

  ngOnInit(): void {
  }

}
