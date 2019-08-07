import { _filter } from './../ticket-search/ticket-search.component';
import { Vehicle } from "./../../../vehicle/models/vehicle.interface";
import { VehicleService } from "./../../../vehicle/services/vehicle.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Ticket } from "../../models/ticket.interface";
import { TicketService } from "../../services/ticket.service";







@Component({
  templateUrl: "./ticket-registration.component.html",
  styleUrls: ["./ticket-registration.component.css"]
})
export class TicketRegistrationComponent implements OnInit {
  TicketForm = this.fb.group({
    board: ["", Validators.required],
    type: ["", Validators.required]
  });
  boards: Vehicle[];
  

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private vehicleService: VehicleService
  ) {}
  types = [
    { name: "Gravíssima" },
    { name: "Grave" },
    { name: "Média" },
    { name: "Leve" }
  ];

  ngOnInit() {
    this.listPlaca();
    this.TicketForm = this.fb.group({
      board: "",
      type: ""
    });




    
  }
  submit() {
    console.log(this.TicketForm);
    // this.ticketService.newTicket(this.formValue).subscribe(res => {
    //   alert("Multa Cadastrada com Sucesso!");
    //   this.TicketForm.reset();
    // });
  }


  hasError(field: string) {
    return this.TicketForm.controls[field].hasError("required");
  }

  listPlaca()  {
      
    
    console.log("sklksksksk"+this.vehicleService.getVehicle().subscribe());
  }

  getPDF() {
    this.ticketService.gerarPDF();
  }
}