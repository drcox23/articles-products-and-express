class Products {
  constructor() {
    this._count = 1;
    this._storage = [];
    this.add({
      name: "Products",
      desription: "check this product out"
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

  updateArticleById(id) {}
  deleteArticleById(id) {}
}

module.exports = Products;
