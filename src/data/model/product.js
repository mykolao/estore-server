const converter = require('../../utils/converter');
const Price = require('./price');

const roundToTwoDecimals = (num) =>
  Number((Math.round(num * 100) / 100).toFixed(2));

class Product {
  prices = [];
  category;
  description;
  gallery = [];
  attributes = [];
  inStock = true;
  brand;
  id;
  name;

  constructor(name) {
    this.name = name;
  }

  addPrice(price) {
    this.prices.push(price);

    return this;
  }

  getId = () => this.id;

  getCategory = () => this.category;

  setPrice(amountEUR) {
    converter.availableCurrencies.forEach((currency) => {
      this.addPrice(
        new Price(
          currency,
          roundToTwoDecimals(
            converter.convertFromEUR(amountEUR, currency.label)
          )
        )
      );
    });

    return this;
  }

  setId(id) {
    this.id = id;

    return this;
  }

  setCategory(category) {
    this.category = category;

    return this;
  }

  setDescription(description) {
    this.description = description;

    return this;
  }

  setInStock(is) {
    this.inStock = is;

    return this;
  }

  setBrand(brand) {
    this.brand = brand;

    return this;
  }

  addAttributeSet(attributeSet) {
    this.attributes.push(attributeSet);

    return this;
  }

  addImage(url) {
    this.gallery.push(url);

    return this;
  }

  addImages(urls) {
    this.gallery.push(...urls);

    return this;
  }
}

module.exports = Product;
