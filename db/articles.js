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
    console.log("title check: ", title)
    return this.knex.raw(`SELECT * FROM articles WHERE title = '${title}'`);
  }

  // getArticleById(id) {
  //   return this._storage.filter(article => id == article.id)[0];
  // }

  // add an article function
  add(article) {
    // article.id = this._count;
    // this._storage.push(article);
    // this._count++;
    const insertArt = this.knex.raw(`INSERT INTO articles (title, body, author) VALUES ('${article.title}', '${article.body}', '${article.author}')`)
    // console.log("tryna put it in the db: ", insertArt)
    return insertArt;
  }

  editArticle(article, artTitle) {
    // console.log("whats being sent over: ", article)
    // console.log("original title: ", artTitle);
    const editArt = this.knex.raw(`UPDATE articles SET title = '${article.title}', body = '${article.body}', author = '${article.author}' WHERE title = '${artTitle.title}'`)
    // console.log("edit: ", editArt);
    return editArt;
  }

  // function to delete article
  deleteArticleByTitle(title) {

    const removeArticle = this.knex.raw(`DELETE FROM articles WHERE title = '${title}'`)

    return removeArticle;
  }
}

module.exports = Articles;