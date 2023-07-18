export class OrderItem {
  id: number;
  quantity: number;
  unitPrice: number;
  productId: number;
  productCategory: string;
  productSize: string;
  productTitle: string;
  productArtist: string;
  productArtId: string;
}

export class Order {
  orderId: number;
  orderDate: Date = new Date();
  orderNumber: string;
  items: OrderItem[] = new Array<OrderItem>();

  subtotal() {
    return this.items.reduce((tot: number, cur: OrderItem) => {
      return tot + (cur.quantity * cur.unitPrice);
    }, 0);
  }
}



