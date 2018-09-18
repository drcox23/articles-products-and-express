// ############## PRODUCTS ############

const express = require("express");
const router = express.Router();
const Products = require("../db/products.js");
const DS_Prod = new Products();
const knex = require("../knex/knex.js");

// middleware for the Product Routes
// router.use(routeCheck, (req, res, next) => {
//   console.log("The prod router is working!!");
//   next();
// });

//get to products index
router.get("/", (req, res) => {
  DS_Prod.all()
    .then(results => {
      const products = results.rows;
      if (products.length > 0) {
        res.render('index', {
          products
        });
      } else {
        const newProdPage = true;
        res.render("index", {
          newProdPage
        });
      }
    })
    .catch(err => {
      console.log('error: ', err)
    })

});

//get to new products form
router.get("/new", (req, res) => {
  console.log("lets add an product");
  const addProduct = true;
  res.render("form", {
    addProduct
  });
});

// get to products details
router.get("/:id", (req, res) => {
  console.log("call the prod DEETS");
  const {
    id
  } = req.params;
  const prodDeets = DS_Prod.getProductById(id);
  console.log("product: ", prodDeets);
  res.render("products", prodDeets);
});

//post a new product
router.post("/new", (req, res) => {
  console.log("new product posted");
  const newProd = req.body;
  console.log("post Prod: ", newProd);
  DS_Prod.add(newProd);
  res.redirect("/products");
});

// get the product edit form
router.get("/:id/edit", (req, res) => {
  console.log("this is to get products to edit");
  const {
    id
  } = req.params;
  console.log("we are editing: ", id);
  const editProdItem = DS_Prod.getProductById(id);
  res.render("edit", {
    editProdItem
  });
});

// edit the product details
router.put("/:id", (req, res) => {
  console.log("lets edit this product");
  // console.log("req params: ", req.params);
  const {
    id
  } = req.params;
  let editProduct = DS_Prod.getProductById(id);
  console.log("product to edit: ", editProduct.id);
  if (req.body.name !== editProduct.name) {
    editProduct.name = req.body.name;
  }
  if (req.body.price !== editProduct.price) {
    editProduct.price = req.body.price;
  }
  if (req.body.inventory !== editProduct.inventory) {
    editProduct.inventory = req.body.inventory;
  }
  res.redirect(`/products/${editProduct.id}`);
});

// delete the product
router.delete("/:id", (req, res) => {
  console.log("delete the product item: ", req.params);
  const {
    id
  } = req.params;
  console.log("req.params: ", id);
  let deleteProd = DS_Prod.deleteProductById(id);
  console.log("product to delete is: ", deleteProd);
  res.redirect("/products");
});

module.exports = router;