class Products {
  constructor() {
    this.knex = require('../knex/knex.js')
    // this._count = 1;
    // this._storage = [];
    // this.add({
    //   name: "This is a Product",
    //   price: 10.0,
    //   inventory: 3
    // });
  }
  all() {
    return this.knex.raw('SELECT * FROM products')
  }

  getProductById(id) {
    return this._storage.filter(article => id == article.id)[0];
  }

  add(product) {
    product.id = this._count;
    this._storage.push(product);
    this._count++;
    return product.id;
  }

  updateProductById(id) {
    product.id = this._count;
  }
  deleteProductById(id) {
    let removedProduct = null;
    console.log("full DS before delete: ", this._storage);
    this._storage.forEach((element, index) => {
      if (element.id == id) {
        removedProduct = this._storage.splice(index, 1);
      }
    });
    console.log("DS after delete: ", this._storage);
    return removedProduct;
  }
}

module.exports = Products;