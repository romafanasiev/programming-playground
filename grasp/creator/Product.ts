abstract class AbstractProduct {
  constructor(
    public name: string,
    public price: number,
  ) {}

  abstract getInfo(): { name: string; price: number };

  abstract getPrice(): number;
}

export class Product implements AbstractProduct {
  constructor(
    public name: string,
    public price: number,
  ) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return { name: this.name, price: this.price };
  }

  getPrice() {
    return this.price;
  }
}
