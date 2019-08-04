import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.interface';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  quantidadeMulta = 34;
  displayedColumnsVeiculo: string[];
  dataSource: MatTableDataSource<Vehicle>;


  constructor(
    private vehicleService: VehicleService,
    private httpclient: HttpClient
  ) {
    this.dataSource = new MatTableDataSource<Vehicle>();
    this.displayedColumnsVeiculo = ['modelo', 'chassi', 'renavam', 'placa', 'ano', 'delete', 'atualizar'];
  }

  ngOnInit() {
    this.vehicleService.getVehicle(   ).subscribe(vehicles => {
     this.dataSource.data = vehicles;

    });
  }

  delete({ id }) {
    this.vehicleService.delete(id).subscribe(() => this.ngOnInit());
  }

  update({ id }) {
    


  }


}
