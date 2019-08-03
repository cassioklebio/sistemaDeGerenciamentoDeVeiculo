import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css']
})
export class PublicHomeComponent {
  multa = 'assets/img/baseline-file_copy-24px.svg';

  veiculo = 'assets/img/baseline-directions_car-24px.svg';

  proprietario = 'assets/img/baseline-people-24px.svg';

  lupa = 'assets/img/search.svg';

  edit = 'assets/img/edit.svg';



  constructor(private router: Router) { }

  searchTicket() {
    this.router.navigateByUrl('ticket/search');
  }

  registretionTicket() {
    this.router.navigateByUrl('ticket/form');
  }

  registretionVehicle() {
    this.router.navigateByUrl('vehicle/vehicle-home');
  }
}
