import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SaveCustomerComponent } from './components/customer/save-customer/save-customer.component';
import { DataService } from './data.service';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ListCustomersComponent } from './components/customer/list-customers/list-customers.component';
import { ListarOrdersComponent } from './components/listarOrders/listarOrders.component';

import {enableProdMode} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatSelectModule, MatInputModule, MatFormFieldModule,MatStepperModule, MatSortModule, MatListModule, MatTabsModule, MatDialogModule, MatPaginatorModule } from '@angular/material';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { ProductService } from './services/product.service';
import { SaveProductComponent } from './components/product/save-product/save-product.component';
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
    Ng2SmartTableModule,
    MatPaginatorModule
  ],
  providers: [DataService,ProductService,CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
