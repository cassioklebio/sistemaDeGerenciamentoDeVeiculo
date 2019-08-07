import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Ticket } from "../models/ticket.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as jsPDF from "jspdf";

@Injectable()
export class TicketService {
  constructor(private httpService: HttpClient) {}

  /** Metodo para listar todas as multas cadastradas */
  getTicket(): Observable<Array<Ticket>> {
    return this.httpService.get<any>(this.endpoint).pipe(
      map(multa => {
        return multa.map(e => {
          return { board: e.board, type: e.type, date: e.date };
        });
      })
    );
  }

  searchTicket({placa}): Observable<Array<Ticket>> {
    return this.httpService.get<any>(this.endpoint).pipe(
      map(multa => {
        return multa.map(e => {
          return { board: e.board, type: e.type, date: e.date };
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
    return `${environment.API_URL}/vehicle/:placa`;
  }

  get endpointSearchTicket(){
    return `${environment.API_URL}/multa/:placa`;
  }

  /**
   * Metodo para gerar a atuação de infração 
   */

  gerarPDF() {
    const title = 'Departamento de Estradas de Rodagem';
    let documento = new jsPDF();
    documento.setFont("Courier");
    documento.setFontStyle("bold");
    documento.setFontSize(14);
    documento.text(title, 50, 10);

    documento.setFontSize(12);
    documento.text(
      "Notificação de Autuação por Infração à Legislação de Trânsito",
      19,
      15
    );

    documento.rect(10, 17, 190, 0);
    documento.setFontSize(7);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text(
      "O Superintendente do DER, no uso das atribuições que lhe confere o artigo 21 do Código de Trânsito Brasileiro - CTB \n\n Lei nº 9.503, de 23/09/97, comunica Vossa Senhoria do cometimento de cometimento de infração à legistação de trânsito",
      15,
      20
    );
    documento.rect(10, 27, 100, 0);
    documento.setFontSize(10);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("IDENTIFICAÇÃO DA AUTUAÇÃO", 70, 30.5);

    documento.rect(10, 31, 100, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Orgão Autuador", 10.5, 33);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("DEPARTAMENTO DE ESTRADAS DE RODAGEM", 10.5, 36.5);

    documento.rect(109.9, 31, 30, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Código do Orgão", 110.5, 33);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("126200", 110.5, 36.5);

    documento.rect(139.9, 31, 30, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Auto de Infração", 140.5, 33);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("10539735-4", 140.5, 36.5);

    documento.rect(169.9, 31, 30, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Data da postagem", 170.5, 33);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("01/08/2018", 170.5, 36.5);

    //identificação do veículo
    documento.rect(10, 27, 190, 0);
    documento.setFontSize(10);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("IDENTIFICAÇÃO DO VEÍCULO", 70, 41);

    documento.rect(10, 41.6, 20, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Placa", 10.5, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("NQK0396", 10.5, 47);

    documento.rect(30, 41.6, 65, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Município", 31.5, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("Paraíba", 31.5, 47);

    documento.rect(95, 41.6, 12, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("UF", 96, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("PB", 96, 47);

    documento.rect(107, 41.6, 50, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Marca/Model", 107.5, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("BMW/BMW-SUV", 107.5, 47);

    documento.rect(157, 41.6, 30, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Espécie/Tipo", 157.5, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("Automóvel", 157.5, 47);

    documento.rect(187, 41.6, 13, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("País", 187.5, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("BR", 187.5, 47);

    //identificação do veículo

    //Local da infração
    documento.setFontSize(10);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text(
      "IDENTIFICAÇÃO DO VLOCAL DE COMETIMENTO DA INFRAÇÃO",
      50,
      52
    );

    documento.rect(10, 52.6, 30, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Local / ACesso", 10.5, 55);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("BR", 10.5, 58);

    documento.rect(40, 52.6, 15, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Rodovia", 40.5, 55);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("BR230", 40.5, 58);

    documento.rect(55, 52.6, 10, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Km", 55.5, 55);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("039", 55.5, 58);

    documento.rect(65, 52.6, 20, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Metros", 65.5, 55);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("400", 65.5, 58);

    documento.rect(85, 52.6, 10, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Sentido", 85.5, 55);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("NORTE", 85.5, 58);

    documento.rect(95, 52.6, 55, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Município da Infração", 95.5, 55);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("Campina Grande", 95.5, 58);

    documento.rect(150, 52.6, 9, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("UF", 150.5, 55);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("PB", 150.5, 58);

    documento.rect(159, 52.6, 10, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Código", 159.5, 55);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("29653", 159.5, 58);

    documento.rect(169, 52.6, 20, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Data", 169.5, 55);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("27/07/2019", 169.5, 58);

    documento.rect(189, 52.6, 11, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Hora", 189.5, 55);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("09:57", 189.5, 58);
    //Local da infração
    //tIPIFICAÇÃO DA INFRAÇÃO
    documento.rect(10, 62, 70, 0);
    documento.setFontSize(10);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("TIPIFICAÇÃO DA INFRAÇÃO", 15, 65.5);
    documento.rect(10, 67, 70, 0);
    documento.setFontSize(8);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Código da Infração", 10, 70);
    documento.setFontSize(8);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text(" 746 3", 50, 70);

    documento.setFontSize(8);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Pontos", 10, 76);
    documento.setFontSize(8);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text(" 4", 50, 76);

    documento.rect(10, 79, 70, 0);

    documento.setFontSize(8);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Limite Regulamentado:", 10, 82);
    documento.setFontSize(8);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text(" 40 Km/h", 50, 82);

    documento.setFontSize(8);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Medição Considerada:", 10, 86);
    documento.setFontSize(8);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text(" 60 Km/h", 50, 86);

    documento.setFontSize(8);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Valor Considerado:", 10, 90);
    documento.setFontSize(8);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text(" 53 Km/h", 50, 90);

    documento.setFontSize(8);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Valor da Multa:", 10, 110);
    documento.setFontSize(8);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("R$ 985.48 ", 50, 110);

    //Codigo de barras

    //Codigo de barras

    //tIPIFICAÇÃO DA INFRAÇÃO

    //foto do veículo
    documento.rect(82, 62, 118, 60);
    //foto do veiculo

    documento.output("dataurlnewwindow");
  }
}
