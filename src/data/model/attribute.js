class Attribute {
  displayValue;
  value;
  id;

  constructor(displayValue, value, id) {
    this.displayValue = displayValue;
    this.value = value;
    this.id = id;

    if (!value) {
      this.value = displayValue;
    }

    if (!id) {
      this.id = displayValue;
    }
  }
}

module.exports = Attribute;
