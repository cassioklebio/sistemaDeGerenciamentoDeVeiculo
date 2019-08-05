import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Ticket } from "../models/ticket.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TicketService {
  constructor(private httpService: HttpClient) {}
  /** Metodo para listar todas as multas cadastradas */
  getTicket(): Observable<Array<Ticket>> {
    return this.httpService.get<any>(this.endpoint).pipe(
      map(multa => {
        return multa.map(e => {
          return { placa: e.placa, tipo: e.tipo, data: e.data };
        });
      })
    );
  }
  /**
   * Metodo para gerar a multa
   */
 

  autoCompleteTicket(): Observable<Array<Ticket>> {
    return this.httpService.get<any>(this.endpoint);
  }

  /**
   * Metodo para cadastrar multa recebendo a multa
   * @param ticket
   */
  newTicket(ticket) {
    return this.httpService.post(this.endpoint, ticket).pipe();
  }
  /** Endpoint */
  get endpoint() {
    return `${environment.API_URL}/multa`;
  }

  get endpointAutoComplete() {
    return `${environment.API_URL}/multa/:placa`;
  }
}
