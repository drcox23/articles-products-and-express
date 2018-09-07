const express = require("express");
const app = express();
const bp = require("body-parser");
// const router = express.Router();
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
// const Articles = require("./db/articles.js");
// const Products = require("./db/products.js");
// const DS_Art = new Articles();
// const DS_Prod = new Products();
const prodRoute = require("./routes/prodRoutes");
const artRoute = require("./routes/artRoutes");

app.use(express.static("public"));

app.use(bp.urlencoded({ extended: true }));

// setting up for method-override
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("_method"));

app.use("/products", prodRoute);
app.use("/articles", artRoute);

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//render home page
app.get("/", (req, res) => {
  // const articles = DS_Art.all();
  console.log("home");
  res.render("home");
});

// // ############# ARTICLES ###################

// // get to articles index
// app.get("/articles", (req, res) => {
//   const articles = DS_Art.all();
//   // console.log("articles", articles);
//   res.render("index", { articles });
// });

// //get to new articles form
// app.get("/articles/new", (req, res) => {
//   console.log("lets add an article");
//   const addArticle = true;
//   res.render("form", { addArticle });
// });

// // // get to articles details by id
// // app.get("/articles/:id", (req, res) => {
// //   console.log("call the art DEETS");
// //   const { id } = req.params;
// //   const artDeets = DS_Art.getArticleById(id);
// //   console.log("article id: ", artDeets);
// //   res.render("articles", artDeets);
// // });

// // get an article to details by title
// app.get("/articles/:title", (req, res) => {
//   console.log("this is to select the article");
//   const { title } = req.params;
//   const editArtItem = DS_Art.getTitle(title);
//   console.log("selected: ", editArtItem);
//   res.render("articles", editArtItem);
// });

// // get the edit form
// app.get("/articles/:title/edit", (req, res) => {
//   console.log("this is to get articles to edit");
//   const { title } = req.params;
//   console.log("we are editing: ", title);
//   const editArtItem = DS_Art.getTitle(title);
//   res.render("edit", { editArtItem });
// });

// //post a new article
// app.post("/articles/new", (req, res) => {
//   console.log("new article posted");
//   const newArt = req.body;
//   console.log("post Art: ", newArt);
//   DS_Art.add(newArt);
//   res.redirect("/articles");
// });

// //edit an article
// app.put("/articles/:title", (req, res) => {
//   console.log("lets edit this article");
//   // console.log("req params: ", req.params);
//   const { title } = req.params;
//   let editArt = DS_Art.getTitle(title);
//   console.log("article to edit: ", editArt.title);
//   if (req.body.title !== editArt.title) {
//     editArt.title = req.body.title;
//   }
//   if (req.body.body !== editArt.body) {
//     editArt.body = req.body.body;
//   }
//   if (req.body.author !== editArt.author) {
//     editArt.author = req.body.author;
//   }
//   res.redirect(`/articles/${editArt.title}`);
// });

// // delete an article
// app.delete("/articles/:title", (req, res) => {
//   console.log("delete an article: ", req.params);
//   const { title } = req.params;
//   console.log("req.params: ", title);
//   let deleteArt = DS_Art.deleteArticleByTitle(title);
//   console.log("article to delete is: ", deleteArt);
//   res.redirect("/articles");
// });

// // ############## PRODUCTS ############

// //get to products index
// app.get("/products", (req, res) => {
//   const products = DS_Prod.all();
//   if (products.length > 0) {
//     console.log("products", products);
//     res.render("index", { products });
//   } else {
//     const newProdPage = true;
//     res.render("index", { newProdPage });
//   }
// });

// //get to new products form
// app.get("/products/new", (req, res) => {
//   console.log("lets add an product");
//   const addProduct = true;
//   res.render("form", { addProduct });
// });

// // get to products details
// app.get("/products/:id", (req, res) => {
//   console.log("call the prod DEETS");
//   const { id } = req.params;
//   const prodDeets = DS_Prod.getProductById(id);
//   console.log("product: ", prodDeets);
//   res.render("products", prodDeets);
// });

// //post a new product
// app.post("/products/new", (req, res) => {
//   console.log("new product posted");
//   const newProd = req.body;
//   console.log("post Prod: ", newProd);
//   DS_Prod.add(newProd);
//   res.redirect("/products");
// });

// // get the product edit form
// app.get("/products/:id/edit", (req, res) => {
//   console.log("this is to get products to edit");
//   const { id } = req.params;
//   console.log("we are editing: ", id);
//   const editProdItem = DS_Prod.getProductById(id);
//   res.render("edit", { editProdItem });
// });

// // edit the product details
// app.put("/products/:id", (req, res) => {
//   console.log("lets edit this product");
//   // console.log("req params: ", req.params);
//   const { id } = req.params;
//   let editProduct = DS_Prod.getProductById(id);
//   console.log("product to edit: ", editProduct.id);
//   if (req.body.name !== editProduct.name) {
//     editProduct.name = req.body.name;
//   }
//   if (req.body.price !== editProduct.price) {
//     editProduct.price = req.body.price;
//   }
//   if (req.body.inventory !== editProduct.inventory) {
//     editProduct.inventory = req.body.inventory;
//   }
//   res.redirect(`/products/${editProduct.id}`);
// });

// // delete the product
// app.delete("/products/:id", (req, res) => {
//   console.log("delete the product item: ", req.params);
//   const { id } = req.params;
//   console.log("req.params: ", id);
//   let deleteProd = DS_Prod.deleteProductById(id);
//   console.log("product to delete is: ", deleteProd);
//   res.redirect("/products");
// });

app.listen(process.env.PORT, () => {
  console.log(`Started app on port: ${process.env.PORT}`);
});
