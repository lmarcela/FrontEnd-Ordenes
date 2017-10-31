import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { Order } from './models/order';
import { Customer } from './models/customer';
import { Product } from './models/product';
import { HttpParams } from "@angular/common/http";

@Injectable()
export class DataService {
  public url = 'http://localhost:8080/';
  private customersUrl = this.url + 'listarClientes';
  public ordersUrl = this.url + 'listarOrdenes';
  public ordersCustomerUrl = this.url + 'buscarOrdenesCliente?cliente=';
  public customerUrl = this.url + 'buscarClientes?cliente=1';
  public productUrl = this.url + 'buscarClientes?cliente=1';
  public saveOrdersUrl = this.url + 'createorder';


  // URL to web API

  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }

  /* ORDERS */
  getOrders(): Promise<Order[]> {
    return this.http.get(this.ordersUrl)
      .toPromise()
      .then(response => response.json() as Order[])
      .catch(this.handleError);
  }

  create(data): Promise<String> {
    this.headers.append('Access-Control-Allow-Origin', '*');
    return this.http
      .post(this.saveOrdersUrl, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(res => res.toString)
      .catch(this.handleError);
  }
  /* CUSTOMERS */
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }

  getCustomer(): Promise<Customer> {
    return this.http.get(this.customerUrl)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

  /* listar ordenes */
  getOrdersDetail(): Promise<Order[]> {
    return this.http.get(this.ordersUrl)
      .toPromise()
      .then(response => response.json() as Order[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
