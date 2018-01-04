import { CreateOrderComponent } from './components/create-order/create-order.component';
import { SaveCustomerComponent } from './components/customer/save-customer/save-customer.component';
import { ListCustomersComponent } from './components/customer/list-customers/list-customers.component';
import { ListarOrdersComponent } from './components/listarOrders/listarOrders.component';
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'listarorder', pathMatch: 'full' },
   { path: 'add', component: CreateOrderComponent },
   { path: 'customer', component: SaveCustomerComponent },
   { path: 'listarorder', component: ListarOrdersComponent },
   { path: 'customers', component: ListCustomersComponent },
   { path: 'product', component: ListProductsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
