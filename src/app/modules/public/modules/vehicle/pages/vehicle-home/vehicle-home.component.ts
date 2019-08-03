import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './vehicle-home.component.html',
  styleUrls: ['./vehicle-home.component.css']
})
export class VehicleHomeComponent implements OnInit {
  veiculo = 'assets/img/baseline-directions_car-24px.svg';
  edit = 'assets/img/edit.svg';
  lupa = 'assets/img/search.svg';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cadastroSimples() {
    this.router.navigateByUrl( 'vehicle/form-simple');

  }
  cadastroPrimeiraAquisicao() {
    this.router.navigateByUrl('vehicle/form-complete');
  }

}
