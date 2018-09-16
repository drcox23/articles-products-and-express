// ############# ARTICLES ###################

const express = require("express");
const router = express.Router();
const Articles = require("../db/articles.js");
const DS_Art = new Articles();
const knex = require('../knex/knex.js')

// get to articles index
router.get("/", (req, res) => {
  DS_Art.all()
    .then(results => {
      const articles = results.rows
      res.render('index', { articles })
    })
    .catch(err => {
      console.log('error', err)
    })
  // console.log("articles", articles);
  // res.render("index", { articles });
});

//get to new articles form
router.get("/new", (req, res) => {
  console.log("lets add an article");
  const addArticle = true;
  res.render("form", {
    addArticle
  });
});

// get an article to details by title
router.get("/:title", (req, res) => {
  console.log("this is to select the article");
  const { title } = req.params;
  // const editArtItem = DS_Art.getTitle(title);
  // console.log("selected: ", editArtItem);
  knex.raw(`SELECT * FROM articles WHERE title = ${title}`)
  .then( result => {
    const title = result.rows[0]
    res.render('articles', title);
  })
  .catch( err => {
    console.log('art get error: ', err)
  })
});

// get the edit form
router.get("/:title/edit", (req, res) => {
  console.log("this is to get articles to edit");
  const {
    title
  } = req.params;
  console.log("we are editing: ", title);
  const editArtItem = DS_Art.getTitle(title);
  res.render("edit", {
    editArtItem
  });
});

//post a new article
router.post("/new", (req, res) => {
  console.log("new article posted");
  const newArt = req.body;
  console.log("post Art: ", newArt);
  DS_Art.add(newArt);
  res.redirect("/articles");
});

//edit an article
router.put("/:title", (req, res) => {
  console.log("lets edit this article");
  // console.log("req params: ", req.params);
  const {
    title
  } = req.params;
  let editArt = DS_Art.getTitle(title);
  console.log("article to edit: ", editArt.title);
  if (req.body.title !== editArt.title) {
    editArt.title = req.body.title;
  }
  if (req.body.body !== editArt.body) {
    editArt.body = req.body.body;
  }
  if (req.body.author !== editArt.author) {
    editArt.author = req.body.author;
  }
  res.redirect(`/articles/${editArt.title}`);
});

// delete an article
router.delete("/:title", (req, res) => {
  console.log("delete an article: ", req.params);
  const {
    title
  } = req.params;
  console.log("req.params: ", title);
  let deleteArt = DS_Art.deleteArticleByTitle(title);
  console.log("article to delete is: ", deleteArt);
  res.redirect("/articles");
});

module.exports = router;