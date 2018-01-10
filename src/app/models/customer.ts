export class Customer {
  customerId: number;
  name: string;
  email: string;
  products: Product[];
}

interface Product {
  productId: number,
  name: string,
  price: number
}