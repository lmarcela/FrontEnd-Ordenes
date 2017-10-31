export class Order {
    orderId: number;
    customerId: number;
    customerName: string;
    deliveryAddress: string;
    creationDate: Date;
    total: number;
    orderDetails: OrderDetails;
  }

  interface OrderDetails{
    productDescription : string,
    price : number,
    quantity : number
  }