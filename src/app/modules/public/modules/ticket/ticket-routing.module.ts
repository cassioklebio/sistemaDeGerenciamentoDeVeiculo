import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketRegistrationComponent } from './pages/ticket-registration/ticket-registration.component';
import { TicketSearchComponent } from './pages/ticket-search/ticket-search.component';


const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: TicketRegistrationComponent, data:{breadcrumbs: 'Cadastro Multa'} },
  { path: 'search', component: TicketSearchComponent, data:{breadcrumbs: 'Consulta de Multa'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
