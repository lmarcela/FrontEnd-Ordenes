import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

import { enableProdMode } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatStepperModule, MatSortModule, MatListModule, MatTabsModule, MatDialogModule, MatPaginatorModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';

//Componentes
import { ListCustomersComponent } from './components/customer/list-customers/list-customers.component';
import { SaveCustomerComponent } from './components/customer/save-customer/save-customer.component';
import { ListarOrdersComponent } from './components/order/listarOrders/listarOrders.component';
import { CreateOrderComponent } from './components/order/create-order/create-order.component';
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { SaveProductComponent } from './components/product/save-product/save-product.component';

//Servicios
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    SaveCustomerComponent,
    ListCustomersComponent,
    ListarOrdersComponent,
    ListProductsComponent,
    SaveProductComponent,
    SaveProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSortModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  providers: [DataService, ProductService, CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
