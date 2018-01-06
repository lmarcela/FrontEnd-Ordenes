import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service'
import { Router } from '@angular/router'


@Component({
  selector: 'list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: [],
})

export class ListCustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService, private _router: Router) { }

  getCustomers() {
    this.customerService.getCustomers().subscribe((customers) => {
      //console.log(products);
      this.customers = customers;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  search() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  createCustomer() {
    this._router.navigate(['/customer']);
  }

  updateCustomer(customer) {
    this.customerService.setter(customer);

    this.customerService.selectedCustomer = Object.assign({}, customer);
    this._router.navigate(['/customer']);
  }

  deleteCustomer(customer) {
    if (confirm("Are you sure to delete this customer ?") == true) {
      this.customerService.deleteCustomer(customer.customerId).subscribe((data) => {
        this.customers.splice(this.customers.indexOf(customer), 1);
      }, (error) => {
        console.log(error);
      })
    }
  }

}