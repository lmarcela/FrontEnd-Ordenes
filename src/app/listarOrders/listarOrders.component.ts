import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { Customer } from '../models/customer';
import { OrderDetail } from '../models/orderDetail';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './listarOrders.component.html',
  styleUrls: ['./listarOrders.component.css'],
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

  constructor(private dataService: DataService) {
    this.fechaActual = new Date();
  }

  getOrdersDetail() {
    return this.dataService.getOrders().then(orders => this.orders = orders);
  }
  getCustomers() {
    return this.dataService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
    this.getCustomers();
  }
  limpiar() {
    this.noList = false;
  }
  onClickBuscar(cliente) {
    if (cliente != null) {
      this.dataService.ordersUrl = this.dataService.url + 'buscarOrdenesCliente?cliente=' + cliente;
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
      this.dataService.ordersUrl = this.dataService.url + 'buscarOrdenesClienteUltimoMes?cliente=' + cliente;
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
      this.dataService.ordersUrl = this.dataService.url + 'buscarOrdenesClienteFechas?cliente=' + cliente + "&fechaInicio=" + desde + "&fechaFin=" + hasta;
      console.log("url: " + this.dataService.ordersUrl);
      this.dataService.getOrdersDetail();
      this.getOrdersDetail();
      this.noList = true;
    }
    else {
      alert("Falta indicar un cliente.");
    }
  }
}
