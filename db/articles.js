class Articles {
  constructor() {
    this._count = 1;
    this._storage = [];
    this.add({
      name: 'Brand New Article',
      desription: 'This is a new article'
    });
    this.add({
      name: 'Sports Article',
      description: 'This is a generic sports article'
    });
    this.add({
      name: 'Fashion Article',
      description: 'This is a generic fashion article'
    })
    
  }
  all() {
    return[...this._storage];
  }

  getArticleById(id) {
    return this._storage.filter(article => id == article.id)[0];
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