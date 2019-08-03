import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleService } from './services/vehicle.service';
import { VehicleFormCompletComponent } from './pages/vehicle-form-complet/vehicle-form-complet.component';
import { VehicleFormSimpleComponent } from './pages/vehicle-form-simple/vehicle-form-simple.component';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { VehicleHomeComponent } from './pages/vehicle-home/vehicle-home.component';
import { from } from 'rxjs';


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
import {MatBadgeModule} from '@angular/material/badge';


import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [VehicleFormCompletComponent, VehicleFormSimpleComponent, VehicleListComponent, VehicleHomeComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    MatFormFieldModule,
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
    MatBadgeModule
  ],
  providers: [
    VehicleService
  ]
})
export class VehicleModule { }
