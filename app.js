const express = require("express");
const app = express();
const bp = require("body-parser");
const exphbs = require("express-handlebars");
const Articles = require("./db/articles.js");
const Products = require("./db/products.js");
const DS_Art = new Articles();
const DS_Prod = new Products();

app.use(express.static("public"));

app.use(bp.urlencoded({ extended: true }));

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

// app.get('/', (req, res) => {
//   res.send('Aloha');
// })

//render items
app.get("/", (req, res) => {
  // const articles = DS_Art.all();
  console.log("home");
  res.render("home");
});

// get to articles index
app.get("/articles", (req, res) => {
  const articles = DS_Art.all();
  console.log("articles", articles);
  res.render("index", { articles });
});

//get to products index
app.get("/products", (req, res) => {
  const products = DS_Prod.all();
  console.log("products", products);
  res.render("index", { products });
});

//get to new articles form
app.get("/articles/new", (req, res) => {
  console.log("lets add an article");
  const addArticle = true;
  res.render("form", { addArticle });
});

//post a new article
app.post("/articles/new", (req, res) => {
  console.log("new article posted");
  const newArt = req.body;
  console.log("post Art: ", newArt);
  DS_Art.add(newArt);
  res.redirect("/articles");
});

//get to new products form
app.get("/products/new", (req, res) => {
  console.log("lets add an product");
  const addProduct = true;
  res.render("form", { addProduct });
});

app.listen(process.env.PORT, () => {
  console.log(`Started app on port: ${process.env.PORT}`);
});
