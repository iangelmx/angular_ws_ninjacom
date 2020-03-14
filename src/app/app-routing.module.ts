import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomepageComponent} from './_components/homepage/homepage.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { FlightsComponent } from './_components/flights/flights.component';


const routes: Routes = [ 
  {
    path: '', component: HomepageComponent
  },
  {
    path : 'profile', component : ProfileComponent
  },
  {
    path : 'flights', component : FlightsComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
