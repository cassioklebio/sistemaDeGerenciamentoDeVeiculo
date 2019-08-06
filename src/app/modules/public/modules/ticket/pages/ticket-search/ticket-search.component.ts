import { Vehicle } from './../../../vehicle/models/vehicle.interface';
import { Observable } from "rxjs";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { TicketService } from "../../services/ticket.service";
import { startWith, map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../../../vehicle/services/vehicle.service';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: "app-ticket-search",
  templateUrl: "./ticket-search.component.html",
  styleUrls: ["./ticket-search.component.css"]
})
export class TicketSearchComponent implements OnInit {
  [x: string]: any;
  searchTicket: FormGroup = this._formBuilder.group({
    ticketSearch: ""
  });


  stateGroupOptions: Observable<Vehicle>;

  constructor(
    private _formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private ticketService: TicketService,
    private httclient: HttpClient
    
  ) {}

  ngOnInit() {
    this.vehicleService.getVehicle().subscribe();
    this.stateGroupOptions = this
      .get(this.vehicleService.getVehicle())!
      .valueChanges.pipe(
        startWith(""),
        map(value => this._filterGroup(value))
      );
  }
  

  submit( {placa }){
    this.ticketService.searchTicket(placa).subscribe();

    
  }
}
