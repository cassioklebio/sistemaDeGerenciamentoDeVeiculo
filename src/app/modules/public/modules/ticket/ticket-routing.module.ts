import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketRegistrationComponent } from "./pages/ticket-registration/ticket-registration.component";
import { TicketSearchComponent } from "./pages/ticket-search/ticket-search.component";
/**
 * Array com as rotas referentes a Ticket
 */
const routes: Routes = [
  { path: "", redirectTo: "form", pathMatch: "full" },
  {
    path: "form",
    component: TicketRegistrationComponent,
    data: {
      title: "Home",
      breadcrumb: [{ label: " Home > Cadastrar Multa", url: "" }]
    }
  },
  {
    path: "search",
    component: TicketSearchComponent,
    data: { breadcrumb: [{ label: "Home > Consulta de Multa", url: "" }] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule {}
