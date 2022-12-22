class AttributeSet {
  id;
  items = [];
  type = 'text';

  constructor(name) {
    this.id = name;
  }

  addItem(item) {
    this.items.push(item);

    return this;
  }

  addItemList(items) {
    this.items.push(...items);

    return this;
  }

  setType(type) {
    this.type = type;

    return this;
  }
}

module.exports = AttributeSet;
