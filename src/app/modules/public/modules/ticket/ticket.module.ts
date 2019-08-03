import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketRegistrationComponent } from './pages/ticket-registration/ticket-registration.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { TicketSearchComponent } from './pages/ticket-search/ticket-search.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [TicketRegistrationComponent, TicketListComponent, TicketSearchComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    LayoutModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
    MatChipsModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
