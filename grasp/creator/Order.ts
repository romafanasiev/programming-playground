import type { OrderItem } from "./OrderItem.ts";

export class Order {
  constructor(public items: OrderItem[] = []) {}

  addItem(item: OrderItem) {
    this.items.push(item);
  }

  removeItem(item: OrderItem) {
    this.items = this.items.filter((product) => product !== item);
  }

  getTotalPrice() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}