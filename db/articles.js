class Articles {
  constructor() {
    this._count = 1;
    this._storage = [];
    
  }
  all() {
    return[...this._storage];
  }

  getArticleById(id) {
    return this._storage.filter(interface => id == article.id)[0];
  }

  add(article) {
    article.id = this._count;
    this._storage.push(article);
    this._count++;
    return article.id;
  }

  updateArticleById(id) {}
  deleteArticleById(id) {}

}

module.exports = Articles