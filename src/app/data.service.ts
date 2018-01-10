import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Order } from './models/order';
import { Customer } from './models/customer';
import { HttpParams } from "@angular/common/http";

@Injectable()
export class DataService {
  public url = 'http://localhost:8080/';
  private customersUrl = this.url + 'customers';
  public ordersUrl;
  public saveOrdersUrl = this.url + 'order';


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
