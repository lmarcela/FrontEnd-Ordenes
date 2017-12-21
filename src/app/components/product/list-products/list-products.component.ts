import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product'
import { ProductService } from '../../../services/product.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styles: []
})
export class ListProductsComponent implements OnInit {

  private products: Product[];

  constructor(private _productService: ProductService, private _router: Router) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    }, (error) => {
      console.log(error);
    })
  }

  deleteUser(product) {
    this._productService.deleteProduct(product.id).subscribe((data) => {
      this.products.splice(this.products.indexOf(product), 1);
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
}