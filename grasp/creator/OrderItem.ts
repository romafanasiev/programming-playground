import type { Product } from "./Product.ts";

export class OrderItem {
  constructor(public product: Product, public quantity: number = 1) {}

  get price() {
    return this.product.getPrice() * this.quantity;
  }

  add(itemsCount: number = 1) {
    this.quantity += itemsCount;
  }

  remove(itemsCount: number = 1) {
    this.quantity -= itemsCount;
  }
}