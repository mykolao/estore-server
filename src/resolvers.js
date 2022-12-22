const converter = require('./utils/converter');
const products = require('./data/index');

const resolvers = {
  Query: {
    currencies: () => {
      return converter.availableCurrencies;
    },
    product: (_, { id }) => {
      const product = products.find((product) => product.getId() === id);
      return product;
    },
    category: (_, args) => {
      const { input: { title } = {} } = args;

      let result;

      if (!title || title === 'all') {
        result = products;
      } else {
        result = products.filter((product) => product.getCategory() === title);
      }

      if (!result.length) {
        return null;
      }

      return {
        name: title ? title : 'all',
        products: result,
      };
    },
    categories: () => {
      const result = products.reduce((categories, product) => {
        const category = product.getCategory();

        if (!categories[category]) {
          categories[category] = {
            name: category,
            products: [],
          };
        }

        const {
          [category]: { products },
        } = categories;

        products.push(product);

        return categories;
      }, {});

      return [
        {
          name: 'all',
          products,
        },
        ...Object.values(result),
      ];
    },
  },
};

module.exports = resolvers;
