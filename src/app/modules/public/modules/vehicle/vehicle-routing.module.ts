import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleFormCompletComponent } from './pages/vehicle-form-complet/vehicle-form-complet.component';
import { VehicleFormSimpleComponent } from './pages/vehicle-form-simple/vehicle-form-simple.component';
import { VehicleHomeComponent } from './pages/vehicle-home/vehicle-home.component';


const routes: Routes = [
  {path: 'vehicle-home', component: VehicleHomeComponent},
  {path: 'form-complete', component: VehicleFormCompletComponent},
  {path: 'form-simple', component: VehicleFormSimpleComponent},
  {path: 'form-complete/edit/:id', component: VehicleFormCompletComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
