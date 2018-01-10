import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  selectedProduct: Product = new Product();
  constructor(private dataService: DataService, private _http: Http) { }

  private baseUrl = this.dataService.url;

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private product = new Product();

  getProducts() {
    return this._http.get(this.baseUrl + 'products/', this.options).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  getProduct(id: Number) {
    return this._http.get(this.baseUrl + 'product/' + id, this.options).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  createProduct(product: Product) {
    return this._http.post(this.baseUrl + 'product/', JSON.stringify(product), this.options).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  updateProduct(product: Product) {
    return this._http.put(this.baseUrl + 'product/', JSON.stringify(product), this.options).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  deleteProduct(id: Number) {
    return this._http.delete(this.baseUrl + 'product/' + id, this.options).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    return Observable.throw(error || "SERVER ERROR");
  }

  setter(product: Product) {
    this.product = product;
  }

  getter() {
    return this.product;
  }
}
