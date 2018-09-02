class Articles {
  constructor() {
    this._count = 1;
    this._storage = [];

    this.add({
      title: "Brand New Article",
      body: "This is a new article",
      author: "LeBron James"
    });
    this.add({
      title: "Sports Article",
      body: "This is a generic sports article",
      author: "Dan Patrick"
    });
    this.add({
      title: "Fashion Article",
      body: "This is a generic fashion article",
      author: "Versace"
    });
  }
  all() {
    return [...this._storage];
  }

  getTitle() {
    return this.headerName;
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

module.exports = Articles;
