import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ProductService } from '../../../services/product.service'
import { ListProductsComponent } from '../list-products/list-products.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styles: []
})
export class SaveProductComponent implements OnInit {
resultado;

  constructor(public productService: ProductService, private _router: Router, public listProduct : ListProductsComponent) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if(form.value.price>0){
      if (form.value.productId == null) {
        this.productService.createProduct(this.productService.selectedProduct).subscribe((product) => {
          //console.log(product);
          this.listProduct.cargarDatos();
          this.resetForm(form);
        }, (error) => {
          //console.log(error);
          alert("Error: Ya existe un producto con ese nombre");
        })
      }
      else {
        this.productService.updateProduct(this.productService.selectedProduct).subscribe((product) => {
          //console.log(product);
          this.listProduct.cargarDatos();
          this.resetForm(form);
        }, (error) => {
          //console.log(error);
          alert("Error: Ya existe un producto con ese nombre");
        })
      }}
      else{alert("El precio debe ser mayor a 0");}

      
    
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.productService.selectedProduct = {
      productId: null,
      name: '',
      price: 0,
    }
  }

  onDelete(form: NgForm) {


    /*this._productService.deleteProduct(product.productId).subscribe((data) => {
      this.products.splice(this.products.indexOf(product), 1);
    }, (error) => {
      console.log(error);
    })*/

    if (confirm("Are you sure to delete this record ?") == true) {
      this.productService.deleteProduct(form.value.productId).subscribe((product) => {
        //console.log(product);
        this.listProduct.cargarDatos();
        this.resetForm(form);
      }, (error) => {
        //console.log(error);
        alert("Error al eliminar");
      })
    }
  }

}
