import { Order } from './Order.ts';
import { OrderItem } from './OrderItem.ts';
import { Product } from './Product.ts';

class BaseProduct extends Product {
  constructor(
    public name: string,
    public price: number,
  ) {
    super(name, price);
  }

  getInfo() {
    return { name: this.name, price: this.price };
  }

  getPrice() {
    return this.price;
  }
}

const iphone = new BaseProduct('Iphone', 1000);
const laptop = new BaseProduct('Laptop', 2000);

const iphoneItem = new OrderItem(iphone, 2);
const laptopItem = new OrderItem(laptop, 1);

iphoneItem.add(3);
laptopItem.add(10);
laptopItem.remove(5);

const order = new Order();
order.addItem(iphoneItem);
order.addItem(laptopItem);

console.log(order.getTotalPrice());

order.removeItem(laptopItem);

console.log(order.getTotalPrice());
