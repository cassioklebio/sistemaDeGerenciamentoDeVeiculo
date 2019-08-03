import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerRegistrarionComponent } from './owner-registrarion/owner-registrarion.component';


@NgModule({
  declarations: [OwnerRegistrarionComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
