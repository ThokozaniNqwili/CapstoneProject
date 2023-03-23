let db = require("../config");
let { hash, compare, hashSync } = require("bcrypt");
let { createToken } = require("../middleware/AuthenticatedUser");

class User {
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const loginQry = `SELECT
        userId ,firstName, lastName,phoneNumber, emailAdd, userPass, 
        userRole
        FROM Users
        Where emailAdd = ?;

        `;
    db.query(loginQry, [emailAdd], async (err, data) => {
      console.log(err, data);
      if (err) throw err;
      if (!data.length || data == null) {
        res.status(401).json({ err: `You've entered a wrong email address` });
      } else {
        await compare(userPass, data[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          const token = createToken({ emailAdd, userPass });
          res.cookie("CorrectUser", token, { maxAge: 3600000, httpOnly: true });
          if (cResult) {
            res.status(200).json({
              msg: "Logged in successfully",
              token,
              result: data[0],
            });
          } else {
            res.status(401).json({
              err: "You entere a wrong password/email address or you account does not exist",
            });
          }
        });
      }
    });
  }
  fetchUsers(req, res) {
    const usersQry = ` SELECT 
        userId ,firstName, lastName,phoneNumber, emailAdd, 
        userRole
        FROM Users;
        `;
    db.query(usersQry, (err, data) => {
      if (err) throw err;
      else res.status(200).json({ results: data });
    });
  }
  fetchUser(req, res) {
    const userQry = `
        SELECT
        userId ,firstName, lastName,phoneNumber, emailAdd, userRole
        FROM Users
        WHERE userId = ?
        `;
    db.query(userQry, [req.params.id], (err, data) => {
      if (err) throw err;
      else res.status(200).json({ result: data });
    });
  }
  async createUser(req, res) {
    let detail = req.body;
    detail.userPass = await hash(detail.userPass, 15);

    let user = {
      emailAdd: detail.emailAdd,
      userPass: detail.userPass,
    };

    const addUserQry = `
        insert into Users
        SET ?;
        `;
    db.query(addUserQry, [detail], (err) => {
      if (err) {
        res.status(401).json({ err });
      } else {
        const jwToken = createToken(user);
        res.cookie("CorrectUser", jwToken, {
          maxAge: 3600000,
          httpOnly: true,
        });
        res.status(200).json({ msg: "A new user was created" });
      }
    });
  }
  updateUser(req, res) {
    let data = req.body;
    if (data.userPass !== null || data.userPass !== undefined)
      data.userPass = hashSync(data.userPass, 20);
    const updateUserQry = `
        Update Users
        SET ?
        WHERE userId = ?;
        `;

    db.query(updateUserQry, [data, req.params.id], (err) => {
      if (err) throw err;
      request.status(200).json({ msg: "a record was updated successfully" });
    });
  }
  deleteUser(req, res) {
    const deleteUserQry = `
        Delete from Users
        Where userId = ?;
        `;
    db.query(deleteUserQry, [req.params.id], (err) => {
      if (err) throw err;
      request.status(200).json({ msg: "a record was deleted successfully" });
    });
  }
}
class Product {
  fetchProducts(req, res) {
    const productsQry = `
        SELECT
        productId, productName, prodNutrition, category, price, imgURL
        From products;
        `;

    db.query(productsQry, (err, results) => {
      if (err) throw err;
      res.status(200).json({ results: results });
    });
  }
  fetchProduct(req, res) {
    const productQry = `
        SELECT productId, productName, prodNutrition, category, price, imgURL
        FROM products
        WHERE productId = ?;
        `;
    db.query(productQry, [req.params.id], (err, result) => {
      if (err) throw err;
      res.status(200).json({ result });
    });
  }
  addProduct(req, res) {
    const addProductQry = `
        INSERT INTO products
        SET ?;
        `;
    db.query(addProductQry, [req.body], (err) => {
      if (err) {
        res.status(400).json({ err: "Unable to insert a new product" });
      } else {
        res.status(200).json({ msg: "Product added successfully" });
      }
    });
  }
  updateProduct(req, res) {
    const updateProductQry = `
        Update products
        SET ?
        Where productId = ?
        `;
    db.query(updateProductQry, [req.body, req.params.id], (err) => {
      if (err) {
        res.status(400).json({ err: "Unable to update a product" });
      } else {
        res.status(200).json({ msg: "Product updated successfully" });
      }
    });
  }
  deleteProduct(req, res) {
    const deleteProductQry = `
        Delete from products
        Where productId = ?
        `;
    db.query(deleteProductQry, [req.params.id], (err) => {
      if (err) res.status(400).json({ err: "The product was not found." });
      res.status(200).json({ msg: "Product deleted successfully" });
    });
  }
}

class Cart{
  fetchCart(req,res){
    const cartQry = `
    SELECT cartId,cartQuantity, productName, price, imgURL, (price*cartQuantity) As total
    FROM Users
    INNER JOIN cart
    ON cart.userId = Users.userId 
    INNER JOIN products
    ON cart.productId = products.productId
    where Users.userId = ?;
    `;
    db.query(cartQry, [req.params.id], (err, result) => {
      if (err) throw err, console.log(err);
      res.status(200).json({ result });
    });

  }
  addToCart(req,res){
    const addToCartQry = `
        INSERT INTO cart 
        SET ?
        
    `;
    db.query(addToCartQry, [req.body], (err, result) => {
      if (err) {
        res.status(400).json({ err: "Unable to add product to cart" });
      } else {
        res.status(200).json({ msg: "Product added to cart", result });
      }
    });
  }
  updateCartItem(req,res){
    const updateCartItemQry = `
        Update cart
        SET ?
        Where cartId = ?
        `;
    db.query(updateCartItemQry, [req.body, req.params.id], (err) => {
      if (err) {
        res.status(400).json({ err: "Unable to cart item" });
      } else {
        res.status(200).json({ msg: "cart item updated" });
      }
    });
  }
  deleteCart(req,res){
    const deleteCartQry = `
    Delete from cart
    Where userId = ?
    `;
    db.query(deleteCartQry, [req.params.id], (err) => {
    if (err) res.status(400).json({ err: "The cart was not found." });
    res.status(200).json({ msg: "cart deleted successfully" });
    });

  }
  deleteCartItem(req,res){
    const deleteCartItemQry = `
        Delete from cart
        Where cartId = ?
        `;
    db.query(deleteCartItemQry, [req.params.id], (err) => {
      if (err) res.status(400).json({ err: "The cart item not found." });
      res.status(200).json({ msg: "cart item deleted successfully" });
    });

  }
  
}

module.exports = { User, Product,Cart };
