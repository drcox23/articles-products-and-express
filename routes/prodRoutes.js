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
  // const prodDeets = DS_Prod.getProductById(id);
  // console.log("product: ", prodDeets);
  DS_Prod.getProductById(id)
    .then(result => {
      const id = result.rows[0]
      console.log("check id again: ", id)
      res.render('products', id);
    })
    .catch(err => {
      console.log('product get error: ', err)
    })
});

// get the product edit form
router.get("/:id/edit", (req, res) => {
  console.log("this is to get products to edit");
  const {
    id
  } = req.params;
  console.log("we are editing: ", id);

  DS_Prod.getProductById(id)
    .then(results => {
      const editProdItemValue = results.rows[0]
      let editProdItem = {
        Product: editProdItemValue
      }
      res.render('edit', editProdItem)
    })
    .catch(err => {
      console.log('prod edit get error: ', err)
    })
});

//post a new product
router.post("/new", (req, res) => {
  console.log("new product posted");
  const newProd = req.body;
  console.log("post Prod: ", newProd);
  DS_Prod.add(newProd)
    .then(results => {
      res.redirect("/products");
    })
    .catch(err => {
      console.log('products post error: ', err)
    })

});


// edit the product details
router.put("/:id", (req, res) => {
  // console.log("lets edit this product");
  // // console.log("req params: ", req.params);
  // console.log('req body: ', req.body);

  const data = req.body;
  const {
    id
  } = req.params
  // console.log('req.params: ', id);

  DS_Prod.updateProductById(data, id)
    .then(results => {
      console.log("updated item", data);
      res.redirect(`/products/${id}`)
    })
    .catch(err => {
      console.log('product put error: ', err)
    })
});

// delete the product
router.delete("/:id", (req, res) => {
  console.log("delete the product item: ", req.params);
  const {
    id
  } = req.params;
  console.log("req.params: ", id);

  DS_Prod.deleteProductById(id)
    .then(results => {
      console.log('deleted product: ', id);
      res.redirect("/products");
    })
    .catch(err => {
      console.log('product delete error: ', err)
    })

});

module.exports = router;