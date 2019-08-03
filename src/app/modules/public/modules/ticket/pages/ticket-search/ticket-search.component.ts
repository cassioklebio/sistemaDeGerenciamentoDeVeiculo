import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-search',
  templateUrl: './ticket-search.component.html',
  styleUrls: ['./ticket-search.component.css']
})
export class TicketSearchComponent implements OnInit {
  addressForm = this.fb.group({
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    alert('Thanks!');
  }
  submit() {

  }
}
