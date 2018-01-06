import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../models/product'
import { ProductService } from '../../../services/product.service'
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styles: []
})
export class ListProductsComponent {

  private products: Product[];


  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this._productService.getProducts().subscribe((products) => {
      //console.log(products);
      this.products = products;
    }, (error) => {
      console.log(error);
    });
    (<HTMLInputElement>document.getElementById("myInput")).value="";
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

  updateProduct(product) {
    /*Usar this._productService.selectedProduct = product; si se desea permitir que al modificar los datos en el form se cambien a la vez en la lista*/
    this._productService.selectedProduct = Object.assign({}, product);
  }

  deleteProduct(product) {
    this._productService.deleteProduct(product.productId).subscribe((data) => {
      this.products.splice(this.products.indexOf(product), 1);
    }, (error) => {
      console.log(error);
    })
  }
}