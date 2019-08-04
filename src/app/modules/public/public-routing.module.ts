import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicHomeComponent } from './pages/public-home/public-home.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PublicHomeComponent, data:{breadcrumbs: 'Home'} },
  { path: 'about', component: AboutComponent, data: {breadcrumbs: 'About'} },


  { path: 'vehicle',  loadChildren: './modules/vehicle/vehicle.module#VehicleModule' },
  { path: 'ticket',  loadChildren: './modules/ticket/ticket.module#TicketModule'  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
