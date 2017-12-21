import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { DataService } from '../../data.service';


@Component({
  selector: 'list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css'],
})

export class ListCustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private dataService: DataService) { }

  getCustomers() {
    return this.dataService.getCustomers().then(customersResponse => this.customers = customersResponse);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

}