import { CreateOrderComponent } from './create-order/create-order.component';
import { CustomersComponent } from './customers/customers.component';
import { ListarOrdersComponent } from './listarOrders/listarOrders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'listarorder', pathMatch: 'full' },
   { path: 'add', component: CreateOrderComponent },
   { path: 'customer', component: CustomersComponent },
   { path: 'listarorder', component: ListarOrdersComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
