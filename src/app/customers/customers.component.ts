import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { DataService } from '../data.service';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})

export class CustomersComponent implements OnInit {
  customers: Customer[];
  dataSource: CustomerDataSource;

  constructor(private dataService: DataService) { }

  getCustomers() {
    this.dataService.getCustomers().then(customers => this.customers = customers);
    this.dataSource = new CustomerDataSource(this.customers);
    return this.dataSource;
  }

  ngOnInit(): void {
    this.getCustomers();
  }

}
export class CustomerDataSource extends DataSource<any> {
  constructor(private data: Customer[]) {
    super();
  }
  connect(): Observable<Customer[]> {
    return Observable.of(this.data);
  }

  disconnect() { }

}