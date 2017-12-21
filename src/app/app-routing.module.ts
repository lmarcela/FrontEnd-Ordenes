import { CreateOrderComponent } from './components/create-order/create-order.component';
import { CustomersComponent } from './customers/customers.component';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { ListarOrdersComponent } from './components/listarOrders/listarOrders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'listarorder', pathMatch: 'full' },
   { path: 'add', component: CreateOrderComponent },
   { path: 'customer', component: CustomersComponent },
   { path: 'listarorder', component: ListarOrdersComponent },
   { path: 'listcustomers', component: ListarOrdersComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
