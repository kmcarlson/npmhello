// friggApi.js
const ProductController = require('./productController');

class FriggApi {
  constructor() {
    // Initialiserer underobjektet (productController)
    this.productController = new ProductController();
  }
}

module.exports = FriggApi;