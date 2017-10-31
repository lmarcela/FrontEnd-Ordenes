import { Order } from '../models/order';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { OrderDetail } from '../models/orderDetail';
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent implements OnInit {
  order = new Order;
  customers: Customer[];
  customer1: Customer;
  submitted = false;
  noList: boolean = true;
  fechaActual: any;
  get fecha() {
    return this.fechaActual.toISOString().substring(0, 10);
  }

  setNewCustomer(id: any): void {
    if (id == 0) {
      this.noList = true;
    }
    else {
      this.customer1 = this.customers.filter(value => value.customerId === parseInt(id))[0];
      this.noList = false;
    }
  }

  constructor(private dataService: DataService, private location: Location) {
    this.fechaActual = new Date();
  }
  ngOnInit() {
    this.getCustomers();
  }

  newCustomer(): void {
    this.submitted = false;
    this.order = new Order();
  }

  private save(): void {
    this.dataService.create(this.order);
  }

  getCustomers() {
    return this.dataService.getCustomers().then(customers => this.customers = customers);
  }
  limpiar() {
    this.noList = true;
  }

  onSubmit() {

    var creationDate = (<HTMLInputElement>document.getElementById("creationDate")).value;
    var deliveryAddress = (<HTMLInputElement>document.getElementById("deliveryAddress")).value;
    var quantity = document.getElementsByName("quantitys");
    var product = document.getElementsByName("productIds");
    var productQuantitys = [];
    var productIds = [];
    var unidades = 0;
    for (var i = 0; i < product.length && unidades < 6; i++) {
      var cantidad = parseInt((<HTMLInputElement>quantity[i]).value);
      if (cantidad > 0) {
        unidades += cantidad;
        productQuantitys.push(cantidad);
        productIds.push(parseInt((<HTMLInputElement>product[i]).textContent));
      }
    }
    if (deliveryAddress == " " || deliveryAddress == "") {
      alert("ERROR: Falta por diligenciar la dirección de entrega.")
    }
    else if (creationDate == "") {
      alert("ERROR: La fecha de creación no es valida.")
    }
    else {
      if (unidades < 6 && unidades > 0) {
        var data = {};
        data["customerId"] = this.order.customerId;
        data["deliveryAddress"] = this.order.deliveryAddress;
        data["creationDate"] = creationDate;
        data["productIds"] = productIds;
        data["productQuantitys"] = productQuantitys;
        try {
          this.dataService.create(data);
          alert("Se creó la orden.");
          document.getElementById("clean").click();
        }
        catch (error) {
          alert("Error: No se creó la orden. Hay datos incompletos.");
        }

      }

      else if (unidades == 0) {
        alert("ERROR: No se puede crear orden si no hay productos");
      }
      else {
        alert("ERROR: Se supero el maximo de unidades permitidas. El maximo permitido es 5 y su orden tiene " + unidades + " unidades.");
      }
    }
  }
}