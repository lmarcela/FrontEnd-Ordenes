import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';
import { DataService } from '../../../data.service';
import { NgForm, FormControl } from '@angular/forms'
import { CustomerService } from '../../../services/customer.service'
import { ProductService } from '../../../services/product.service'
import { Product } from '../../../models/product'
import { Router } from '@angular/router'

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrls: [],
})

export class SaveCustomerComponent {
  customers: Customer[];
  private products: Product[];
  aux: Product[];
  constructor(public customerService: CustomerService, private _productService: ProductService, private _router: Router) {
    this.aux = this.customerService.selectedCustomer.products;
    this._productService.getProducts().subscribe((products) => {
      //console.log(products);
      this.products = products;
      //Inicio: Indicar que opciones seleccionar EJ: customerService.selectedCustomer.products=[this.products[1], this.products[2]]
      for (let j = 0; j < this.aux.length; j++) {
        for (let i = 0; i < this.products.length; i++) {
          if (this.aux[j].productId == this.products[i].productId) {
            this.customerService.selectedCustomer.products[j] = this.products[i]
          }
        }
      }
      //Fin: Indicar que opciones seleccionar
    }, (error) => {
      console.log(error);
    });
  }

  onSubmit(form: NgForm) {
    this.aux = this.customerService.selectedCustomer.products;
    for (let i = 0; i < this.aux.length; i++) {
      console.log(this.aux[i].name + "  " + this.aux[i].productId);
    }
    if (form.value.products.length > 0) {
      if (form.value.customerId == null) {
        this.customerService.createCustomer(this.customerService.selectedCustomer).subscribe((customer) => {
          console.log(customer);
          this._router.navigate(['/customers']);
        }, (error) => {
          console.log(error);
          alert("Error: Ya existe un cliente con ese nombre");
        })
      }
      else {
        this.customerService.updateCustomer(this.customerService.selectedCustomer).subscribe((customer) => {
          console.log(customer);
          this._router.navigate(['/customers']);
          this.resetForm(form);
        }, (error) => {
          console.log(error);
          alert("Error: Ya existe un cliente con ese nombre");
        })
      }
    }
    else { alert("El cliente debe tener al menos un producto"); }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.customerService.selectedCustomer = {
      customerId: null,
      name: '',
      email: '',
      products: null,
    }
  }

}