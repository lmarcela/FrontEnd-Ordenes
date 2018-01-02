import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../models/product'
import { ProductService } from '../../../services/product.service'
import { Router } from '@angular/router'

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styles: []
})
export class ListProductsComponent {

  myFunction() {
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

  private products : Product[];

 
constructor(private _productService: ProductService) {
  
  this._productService.getProducts().subscribe((products) => {
    console.log(products);
    this.products = products;
  }, (error) => {
    console.log(error);
  })
  
}
deleteProduct(product) {
  this._productService.deleteProduct(product.productId).subscribe((data) => {
    this.products.splice(this.products.indexOf(product), 1);
  }, (error) => {
    console.log(error);
  })
}
}



  /*private products: Product[];

  constructor(private _productService: ProductService, private _router: Router) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    }, (error) => {
      console.log(error);
    })
  }

  

  updateProduct(product) {
    this._productService.setter(product);
    this._router.navigate(['/op']);
  }

  newProduct() {
    let product = new Product();
    this._productService.setter(product);
    this._router.navigate(['/op']);

  }
}*/