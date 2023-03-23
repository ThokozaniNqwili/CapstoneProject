const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const route = express.Router();
const { User, Product, Cart } = require("../model");
const user = new User();
const product = new Product();
const cart = new Cart();
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
route.get("/user/:id/carts",(req, res) => {
    cart.fetchCart(req,res);
});
route.post("/user/:id/cart",bodyParser.json(), (req, res) => {
    cart.addToCart(req,res);
})
route.put("/user/:id/cart/:id", bodyParser.json(), (req, res) => {
    cart.updateCartItem(req,res);
})
route.delete("/user/:id/cart",(req, res) => {
    cart.deleteCart(req,res);
})
route.delete("/user/:id/cart/:id",(req, res) => {
  cart.deleteCartItem(req,res);
})




module.exports = route;
