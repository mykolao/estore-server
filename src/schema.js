const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    product(id: String!): Product
    currencies: [Currency]
    categories: [Category]
    category(input: CategoryInput): Category
  }

  input CategoryInput {
    title: String!
  }

  type Category {
    name: String
    products: [Product]!
  }

  type Product {
    id: String!
    name: String!
    inStock: Boolean
    gallery: [String]
    description: String!
    category: String!
    attributes: [AttributeSet]
    prices: [Price!]!
    brand: String!
  }

  type AttributeSet {
    id: String!
    name: String
    type: String
    items: [Attribute]
  }

  type Attribute {
    displayValue: String
    value: String
    id: String!
  }

  type Price {
    currency: Currency!
    amount: Float!
  }

  type Currency {
    label: String!
    symbol: String!
  }
`;

module.exports = typeDefs;
