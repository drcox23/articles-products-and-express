class Articles {
  constructor() {
    this.knex = require('../knex/knex.js')
    // this._count = 1;
    // this._storage = [];

    // this.add({
    //   title: "Brand New Article",
    //   body: "This is a new article",
    //   author: "LeBron James"
    // });
    // this.add({
    //   title: "Sports Article",
    //   body: "This is a generic sports article",
    //   author: "Dan Patrick"
    // });
    // this.add({
    //   title: "Fashion Article",
    //   body: "This is a generic fashion article",
    //   author: "Versace"
    // });
  }
  all() {
    return this.knex.raw('SELECT * FROM articles')
  }

  getTitle(title) {
    return this._storage.filter(article => title == article.title)[0];
  }

  getArticleById(id) {
    return this._storage.filter(article => id == article.id)[0];
  }

  // add an article function
  add(article) {
    // article.id = this._count;
    // this._storage.push(article);
    // this._count++;
    this.knex('articles').insert({title:`${this.title}`, body:`${this.body}`, author:`${this.author}`})
    console.log("tryna put it in the db: ", this.knex)
    return article.id;
  }

  // function to delete article
  deleteArticleByTitle(title) {
    let removedArticle = null;
    console.log("full DS before delete: ", this._storage);
    this._storage.forEach((element, index) => {
      if (element.title === title) {
        removedArticle = this._storage.splice(index, 1);
      }
    });
    console.log("DS after delete: ", this._storage);
    return removedArticle;
  }
}

module.exports = Articles;
