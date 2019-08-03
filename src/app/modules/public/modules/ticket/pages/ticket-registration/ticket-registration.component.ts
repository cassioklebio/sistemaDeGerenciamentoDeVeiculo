import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../../models/ticket.interface';
import { TicketService } from '../../services/ticket.service';


@Component({
  templateUrl: './ticket-registration.component.html',
  styleUrls: ['./ticket-registration.component.css']
})
export class TicketRegistrationComponent implements OnInit {
  TicketForm = this.fb.group({
    board: ['', Validators.required],
    type: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService
  ) { }
  types = [
    { name: 'Gravíssima' },
    { name: 'Grave' },
    { name: 'Média' },
    { name: 'Leve' },
  ];

  ngOnInit() {
    this.TicketForm = this.fb.group({
      board: '',
      type: ''
    });
  }
  submit() {
    this.ticketService.newTicket(this.formValue).subscribe(res => {
      alert('Multa Cadastrada com Sucesso!');
      this.TicketForm.reset();

    });
  }

  get formValue() {
    const rawValue: Ticket = this.TicketForm.value;
    return { board: rawValue.board, type: rawValue.type };
  }
  hasError(field: string) {
    return this.TicketForm.controls[field].hasError('required');
  }


}
