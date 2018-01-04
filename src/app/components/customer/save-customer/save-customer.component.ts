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

export class SaveCustomerComponent implements OnInit {
  selected1 = ['option2','option1'];
  //selected=this.customerService.selectedCustomer.products;
  customers: Customer[];
  toppings = new FormControl();
  private products: Product[];
p : Product[];
  //selected;
  productList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(public customerService: CustomerService,private _productService: ProductService, private _router:Router) {

    //this.selected=customerService.selectedCustomer.products
    this.p = this.customerService.selectedCustomer.products;
    //this.selected = this.p;

    for (let i = 0; i < this.p.length; i++) {
      console.log("productos aqui: "+this.p[i].name+"  "+this.p[i].productId);

      //this.selected = this.p[i]
      //customerService.selectedCustomer.products = this.selected
    }
    customerService.selectedCustomer.products = this.p;
   }

  ngOnInit() {
    this._productService.getProducts().subscribe((products) => {
      //console.log(products);
      this.products = products;
    }, (error) => {
      console.log(error);
    });

    //this.resetForm();

  }

  onSubmit(form: NgForm) {
    //alert("name "+this.customerService.selectedCustomer.name+"; email: "+this.customerService.selectedCustomer.email+"; productos: "+this.customerService.selectedCustomer.products);
    this.p = this.customerService.selectedCustomer.products;

    for (let i = 0; i < this.p.length; i++) {
      console.log(this.p[i].name+"  "+this.p[i].productId);
    }
    //if(form.value.price>0){
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
    //}
      //else{alert("El precio debe ser mayor a 0");}

      
    
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.customerService.selectedCustomer = {
      customerId: null,
      name: '',
      email: '',
      products : null,
    }
  }

}