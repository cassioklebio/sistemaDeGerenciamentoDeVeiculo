import { Ticket } from './../../models/ticket.interface';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { TicketService } from '../../services/ticket.service';



@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  displayedColumnsTicket: string[];
  dataSource: MatTableDataSource<Ticket>;

  constructor(
    private ticketService: TicketService,
    private httpclient: HttpClient
  ) {
    this.dataSource = new MatTableDataSource<Ticket>();
    this.displayedColumnsTicket = ['board', 'type', 'date','imprimir'];
   }

  ngOnInit() {
    this.ticketService.getTicket().subscribe(tickets => {
      this.dataSource.data = tickets;
    })
  }

 gerarPDF({id}){
   this.ticketService.gerarPDF();
 }

  

}
