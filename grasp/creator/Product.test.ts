import assert from 'node:assert';
import { beforeEach, describe, it } from 'node:test';
import { faker } from '@faker-js/faker';
import { Product } from './Product';

describe('Product', () => {
  let productName: string;
  let productPrice: number;

  beforeEach(() => {
    productName = faker.commerce.productName();
    productPrice = +faker.commerce.price();
  });

  it('When call getInfo, should return product name and price', () => {
    const product = new Product(productName, productPrice);

    assert.deepStrictEqual(product.getInfo(), {
      name: productName,
      price: productPrice,
    });
  }); 

  it('When call getPrice, should return product price', () => {
    const product = new Product(productName, productPrice);

    assert.strictEqual(product.getPrice(), productPrice);
  });
});
