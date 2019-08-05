import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Ticket } from "../../models/ticket.interface";
import { TicketService } from "../../services/ticket.service";
import { Observable } from "rxjs/internal/Observable";
import { startWith, map } from "rxjs/operators";
import * as jsPDF from "jspdf";

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  templateUrl: "./ticket-registration.component.html",
  styleUrls: ["./ticket-registration.component.css"]
})
export class TicketRegistrationComponent implements OnInit {
  TicketForm = this.fb.group({
    stateGroup: ["", Validators.required],
    type: ["", Validators.required]
  });

  stateGroups: StateGroup[] = [
    {
      letter: "A",
      names: ["Alabama", "Alaska", "Arizona", "Arkansas"]
    },
    {
      letter: "C",
      names: ["California", "Colorado", "Connecticut"]
    },
    {
      letter: "D",
      names: ["Delaware"]
    },
    {
      letter: "F",
      names: ["Florida"]
    },
    {
      letter: "G",
      names: ["Georgia"]
    },
    {
      letter: "H",
      names: ["Hawaii"]
    },
    {
      letter: "I",
      names: ["Idaho", "Illinois", "Indiana", "Iowa"]
    },
    {
      letter: "K",
      names: ["Kansas", "Kentucky"]
    },
    {
      letter: "L",
      names: ["Louisiana"]
    },
    {
      letter: "M",
      names: [
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana"
      ]
    },
    {
      letter: "N",
      names: [
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota"
      ]
    },
    {
      letter: "O",
      names: ["Ohio", "Oklahoma", "Oregon"]
    },
    {
      letter: "P",
      names: ["Pennsylvania"]
    },
    {
      letter: "R",
      names: ["Rhode Island"]
    },
    {
      letter: "S",
      names: ["South Carolina", "South Dakota"]
    },
    {
      letter: "T",
      names: ["Tennessee", "Texas"]
    },
    {
      letter: "U",
      names: ["Utah"]
    },
    {
      letter: "V",
      names: ["Vermont", "Virginia"]
    },
    {
      letter: "W",
      names: ["Washington", "West Virginia", "Wisconsin", "Wyoming"]
    }
  ];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private fb: FormBuilder, private ticketService: TicketService) {}
  types = [
    { name: "Gravíssima" },
    { name: "Grave" },
    { name: "Média" },
    { name: "Leve" }
  ];

  ngOnInit() {
    this.TicketForm = this.fb.group({
      stateGroup: "",
      type: ""
    });
    this.stateGroupOptions = this.TicketForm.get(
      "stateGroup"
    )!.valueChanges.pipe(
      startWith("stateGroup"),
      map(value => this._filterGroup(value))
    );
  }
  submit() {
    this.ticketService.newTicket(this.formValue).subscribe(res => {
      alert("Multa Cadastrada com Sucesso!");
      this.TicketForm.reset();
    });
  }

  get formValue() {
    const rawValue: Ticket = this.TicketForm.value;
    return { board: rawValue.board, type: rawValue.type };
  }
  hasError(field: string) {
    return this.TicketForm.controls[field].hasError("required");
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({
          letter: group.letter,
          names: _filter(group.names, value)
        }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  gerarPDF() {
    let brasao = "/assets/img/brasao.png";
    let documento = new jsPDF();
    documento.setFont("Courier");
    documento.setFontStyle("bold");
    documento.setFontSize(14);
    documento.text("Departamento de Estradas de Rodagem", 50, 10);

    documento.setFontSize(12);
    documento.text(
      "Notificação de Autuação por Infração à Legislação de Trânsito",
      19,15
    );

    documento.rect(10, 17, 190, 0);
    documento.setFontSize(7);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text(
      "O Superintendente do DER, no uso das atribuições que lhe confere o artigo 21 do Código de Trânsito Brasileiro - CTB \n\n Lei nº 9.503, de 23/09/97, comunica Vossa Senhoria do cometimento de cometimento de infração à legistação de trânsito",
      15, 20
    );
    documento.rect(10, 27, 100, 0);
    documento.setFontSize(10);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text(
      "IDENTIFICAÇÃO DA AUTUAÇÃO",
      70, 30.5);
    
    documento.rect(10, 31,100,7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Orgão Autuador",10.5, 33);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("DEPARTAMENTO DE ESTRADAS DE RODAGEM",10.5, 36.5);

    documento.rect(109.9, 31,30,7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Código do Orgão",110.5, 33);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("126200",110.5, 36.5);

    documento.rect(139.9, 31,30,7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Auto de Infração",140.5, 33);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("10539735-4",140.5, 36.5);

    documento.rect(169.9, 31,30,7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Data da postagem",170.5, 33);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("01/08/2018",170.5, 36.5);

    //identificação do veículo
    documento.rect(10, 27, 190, 0);
    documento.setFontSize(10);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text(
      "IDENTIFICAÇÃO DO VEÍCULO",
      70, 41);

      
    documento.rect(10, 41.6, 20, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Placa",10.5, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("NQK0396",10.5, 47);

    documento.rect(30, 41.6, 65, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Município",31.5, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("Paraíba",31.5, 47);

    documento.rect(95, 41.6, 12, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("UF",96, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("PB",96, 47);
    
    documento.rect(107, 41.6, 50, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Marca/Model",107.5, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("BMW/BMW-SUV",107.5, 47);

    documento.rect(157, 41.6, 30, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("Espécie/Tipo",157.5, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("Automóvel",157.5, 47);

    documento.rect(187, 41.6, 13, 7);
    documento.setFontSize(5);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text("País",187.5, 43.5);
    documento.setFontSize(6);
    documento.setFontStyle("normal");
    documento.verticalOffset = 0.5;
    documento.text("BR",187.5, 47);   

    //identificação do veículo

    //Local da infração
    documento.setFontSize(10);
    documento.setFontStyle("bold");
    documento.verticalOffset = 0.5;
    documento.text(
      "IDENTIFICAÇÃO DO VLOCAL DE COMETIMENTO DA INFRAÇÃO",
      50, 52);

      documento.rect(10, 52.6, 30, 7);
      documento.setFontSize(5);
      documento.setFontStyle("bold");
      documento.verticalOffset = 0.5;
      documento.text("Local / ACesso",10.5, 55);
      documento.setFontSize(6);
      documento.setFontStyle("normal");
      documento.verticalOffset = 0.5;
      documento.text("BR",10.5, 58); 

      documento.rect(40, 52.6, 15, 7);
      documento.setFontSize(5);
      documento.setFontStyle("bold");
      documento.verticalOffset = 0.5;
      documento.text("Rodovia",40.5, 55);
      documento.setFontSize(6);
      documento.setFontStyle("normal");
      documento.verticalOffset = 0.5;
      documento.text("BR230",40.5, 58); 

      documento.rect(55, 52.6, 10, 7);
      documento.setFontSize(5);
      documento.setFontStyle("bold");
      documento.verticalOffset = 0.5;
      documento.text("Km",55.5, 55);
      documento.setFontSize(6);
      documento.setFontStyle("normal");
      documento.verticalOffset = 0.5;
      documento.text("039",55.5, 58);

      documento.rect(65, 52.6, 20, 7);
      documento.setFontSize(5);
      documento.setFontStyle("bold");
      documento.verticalOffset = 0.5;
      documento.text("Metros",65.5, 55);
      documento.setFontSize(6);
      documento.setFontStyle("normal");
      documento.verticalOffset = 0.5;
      documento.text("400",65.5, 58);

      documento.rect(85, 52.6, 10, 7);
      documento.setFontSize(5);
      documento.setFontStyle("bold");
      documento.verticalOffset = 0.5;
      documento.text("Sentido",85.5, 55);
      documento.setFontSize(6);
      documento.setFontStyle("normal");
      documento.verticalOffset = 0.5;
      documento.text("NORTE",85.5, 58);

      documento.rect(95, 52.6, 55, 7);
      documento.setFontSize(5);
      documento.setFontStyle("bold");
      documento.verticalOffset = 0.5;
      documento.text("Município da Infração",95.5, 55);
      documento.setFontSize(6);
      documento.setFontStyle("normal");
      documento.verticalOffset = 0.5;
      documento.text("Campina Grande",95.5, 58);

      documento.rect(160, 52.6, 9, 7);
      documento.setFontSize(5);
      documento.setFontStyle("bold");
      documento.verticalOffset = 0.5;
      documento.text("UF",160.5, 55);
      documento.setFontSize(6);
      documento.setFontStyle("normal");
      documento.verticalOffset = 0.5;
      documento.text("PB",160.5, 58);

      documento.rect(169, 52.6, 10, 7);
      documento.setFontSize(5);
      documento.setFontStyle("bold");
      documento.verticalOffset = 0.5;
      documento.text("Código",169.5, 55);
      documento.setFontSize(6);
      documento.setFontStyle("normal");
      documento.verticalOffset = 0.5;
      documento.text("29653",169.5, 58);
      

    //Local da infração


    // documento.setFontSize(6);
    // documento.setFontStyle("bold");
    // documento.verticalOffset = 0.5;
    // documento.text("Orgão Autuador",10.5, 33);
    // documento.setFontSize(8);
    // documento.setFontStyle("normal");
    // documento.verticalOffset = 0.5;
    // documento.text("DEPARTAMENTO DE ESTRADAS DE RODAGEM",10.5, 36.5);



    documento.output("dataurlnewwindow");
  }
}
