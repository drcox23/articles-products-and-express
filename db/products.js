class Products {
  constructor() {
    this._count = 1;
    this._storage = [];
    this.add({
      name: "This is a Product",
      price: 10.0,
      inventory: 3
    });
  }
  all() {
    return [...this._storage];
  }

  getArticleById(id) {
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
    product.id = this._count;
  }
}

module.exports = Products;
