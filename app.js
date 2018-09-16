const express = require("express");
const app = express();
const bp = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const knex = require('./knex/knex.js');

const prodRoute = require("./routes/prodRoutes");
const artRoute = require("./routes/artRoutes");
// const PORT = process.env.PORT || 9000;

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

app.listen(process.env.EXPRESS_CONTAINER_PORT, () => {
  console.log(`Started app on port: ${process.env.EXPRESS_CONTAINER_PORT}`);
});
