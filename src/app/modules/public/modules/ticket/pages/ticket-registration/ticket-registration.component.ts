import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../../models/ticket.interface';
import { TicketService } from '../../services/ticket.service';
import { Observable } from 'rxjs/internal/Observable';
import { startWith, map } from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  templateUrl: './ticket-registration.component.html',
  styleUrls: ['./ticket-registration.component.css']
})
export class TicketRegistrationComponent implements OnInit {
  TicketForm = this.fb.group({
    stateGroup: ['', Validators.required],
    type: ['', Validators.required],
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
      stateGroup: "",
      type: ''
    });
    this.stateGroupOptions = this.TicketForm
      .get("stateGroup")!
      .valueChanges.pipe(
        startWith("stateGroup"),
        map(value => this._filterGroup(value))
      );
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

}
