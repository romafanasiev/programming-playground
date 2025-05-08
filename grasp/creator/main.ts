import { Order } from './Order.ts';
import { OrderItem } from './OrderItem.ts';
import { BaseProduct } from './Product.ts';

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
