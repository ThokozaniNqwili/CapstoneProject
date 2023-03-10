const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const route = express.Router();
const { User, Product } = require("../model");
const user = new User();
const product = new Product();
route.get("^/$|/FoodiesMarket", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../view/index.html"));
});

//Login
route.post("/login", bodyParser.json(), (req, res) => {
  user.login(req, res);
});

//Retrieve all users
route.get("/users", (req, res) => {
  user.fetchUsers(req, res);
});
//Retrieve user
route.get("/user/:id", (req, res) => {
  user.fetchUser(req, res);
});
//Update
route.put("/user/:id", bodyParser.json(), (req, res) => {
  user.updateUser(req, res);
});

//SignUp
route.post("/signup", bodyParser.json(), (req, res) => {
  user.createUser(req, res);
});

//Delete
route.delete("/user/:id", (req, res) => {
  user.deleteUser(req, res);
});

//-----------------Products--------------------------
//fetch all prducts
route.get("/products", (req, res) => {
  product.fetchProducts(req, res);
});
//fetch single product
route.get("/product/:id", (req, res) => {
  product.fetchProduct(req, res);
});
//Add a new product
route.post("/product", bodyParser.json(), (req, res) => {
  product.addProduct(req, res);
});
//Update a product
route.put("/product/:id", bodyParser.json(), (req, res) => {
  product.updateProduct(req, res);
});
//Delete a product
route.delete("/product/:id", (req, res) => {
  product.deleteProduct(req, res);
});

//-----------------Cart--------------------------
// route.get("/user/:id/carts",bodyParser.json,(req, res) => {
//     product.fetchProduct(req,res);
// });
// route.post("/user/:id/cart",bodyParser.json, (req, res) => {
//     product.addProduct(req,res);
// })
// route.put("/user/:id/cart", bodyParser.json, (req, res) => {
//     product.updateProduct(req,res);
// })
// route.delete("/user/:id/cart",bodyParser.json, (req, res) => {
//     product.deleteProduct(req,res);
// })




module.exports = route;
