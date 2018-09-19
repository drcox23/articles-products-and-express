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
    console.log("id check: ", id);
    return this.knex.raw(`SELECT * FROM products WHERE id = ${id}`);

  }

  add(product) {
    const insertProduct = this.knex.raw(`INSERT INTO products (name, price, inventory) VALUES ('${product.name}', ${product.price}, ${product.inventory})`);
    return insertProduct;
  }

  updateProductById(product, pId) {
    console.log('whats being sent over: ', product, pId)

    const editProduct = this.knex.raw(`UPDATE products SET name = '${product.name}', price = ${product.price}, inventory = ${product.inventory} WHERE id = ${pId}`);
    return editProduct;
  }

  deleteProductById(pId) {
    const removeProduct = this.knex.raw(`DELETE FROM products WHERE id = ${pId}`);
    return removeProduct;
  }
}

module.exports = Products;