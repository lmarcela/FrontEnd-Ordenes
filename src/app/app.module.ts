import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { DataService } from './data.service';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { ListarOrdersComponent } from './components/listarOrders/listarOrders.component';

import {enableProdMode} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatSelectModule, MatInputModule, MatFormFieldModule,MatStepperModule, MatSortModule, MatListModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    CustomersComponent,
    ListCustomersComponent,
    ListarOrdersComponent,
    ListProductsComponent
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
    MatDialogModule
  ],
  providers: [DataService,ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }
