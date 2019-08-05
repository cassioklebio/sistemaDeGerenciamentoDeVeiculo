import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VehicleFormCompletComponent } from "./pages/vehicle-form-complet/vehicle-form-complet.component";
import { VehicleFormSimpleComponent } from "./pages/vehicle-form-simple/vehicle-form-simple.component";
import { VehicleHomeComponent } from "./pages/vehicle-home/vehicle-home.component";


const routes: Routes = [
  {
    path: "vehicle-home",
    component: VehicleHomeComponent,
    data: { breadcrumb: [{ label: "Home > Veículo", url: "" }] }
  },
  {
    path: "form-complete",
    component: VehicleFormCompletComponent,
    data: {
      breadcrumb: [
        {
          label: "Home > Veículo > Cadastro de veículo primeira aquisição",
          url: ""
        }
      ]
    }
  },
  {
    path: "form-simple",
    component: VehicleFormSimpleComponent,
    data: {
      breadcrumb: [{ label: " Home > Veículo > Cadastro de veiculo", url: "" }]
    }
  },
  {
    path: "form-complete/edit/:id",
    component: VehicleFormCompletComponent,
    data: {
      breadcrumb: [
        { label: "Home > Veículo > Atualizanção dos dados do veiculo", url: "" }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule {}
