export abstract class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}

  abstract getInfo(): { name: string; price: number };

  abstract getPrice(): number;
}
