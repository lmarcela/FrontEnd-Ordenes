import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/order';
import { Customer } from '../../../models/customer';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './listarOrders.component.html',
  styleUrls: [],
})

export class ListarOrdersComponent implements OnInit {
  orders: Order[];
  customers: Customer[];
  startDate: any;
  fechaActual: any;
  noList: boolean = false;
  get fecha() {
    return this.fechaActual.toISOString().substring(0, 10);
  }

  constructor(private dataService: DataService, private _router: Router) {
    this.fechaActual = new Date();
  }

  getOrdersDetail() {
    return this.dataService.getOrders().then(ordersResponse => this.orders = ordersResponse);
  }
  getCustomers() {
    return this.dataService.getCustomers().then(customersResponse => this.customers = customersResponse);
  }

  ngOnInit(): void {
    this.getCustomers();
  }
  limpiar() {
    this.noList = false;
  }

  //Inicio de la Programación de la accion de los botones
  createOrder(){
    this._router.navigate(['/add']);
  }

  onClickBuscar(cliente) {
    if (cliente != null) {
      this.dataService.ordersUrl = this.dataService.url + 'order/customer/' + cliente;
      this.dataService.getOrdersDetail();
      this.getOrdersDetail();
      this.noList = true;
    }
    else {
      alert("Falta indicar un cliente.");
    }
  }
  onClickUltimoMes(cliente) {
    if (cliente != null) {
      this.dataService.ordersUrl = this.dataService.url + 'order/customer/' + cliente+"/ultimoMes";
      this.dataService.getOrdersDetail();
      this.getOrdersDetail();
      this.noList = true;
    }
    else {
      alert("Falta indicar un cliente.");
    }
  }
  onClickRangoFechas(desde, hasta, cliente) {
    if (cliente != null) {
      this.dataService.ordersUrl = this.dataService.url + 'order/customer/' + cliente + "/desde/" + desde + "/hasta/" + hasta;
      console.log("url: " + this.dataService.ordersUrl);
      this.dataService.getOrdersDetail();
      this.getOrdersDetail();
      this.noList = true;
    }
    else {
      alert("Falta indicar un cliente.");
    }
  }
  //Fin de la Programación de la accion de los botones
}
