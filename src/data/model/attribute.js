class Attribute {
  constructor(displayValue, value, id) {
    if (!value) {
      this.value = displayValue;
    }

    if (!id) {
      this.id = displayValue;
    }
  }
}

module.exports = Attribute;
