let db = require('../config');
let {hash, compare, hashSync} = require('bcrypt');
let {createToken} = require ('../middleware/AuthenticatedUser');

class User{
    login(req,res){
        const {emailAdd,userPass} = req.body;
        const strQry =
        `SELECT
        userId ,firstName, lastName,phoneNumber, emailAdd, userPass, 
        userRole
        FROM Users
        Where emailAdd = ?;

        `
        db.query(strQry, [emailAdd], async(err,data)=>{
            console.log(err,data)
            if(err) throw err;
            if((!data)||(data == null)){
                res.status(401).json({err: `You've entered a wrong email address`})
            }else{
                await compare(userPass, data[0].userPass,(cErr,cResult)=>{
                    if(cErr) throw cErr;
                    const token = createToken ({emailAdd,userPass})
                    res.cookie('CorrectUser',token,{maxAge:3600000, httpOnly: true})
                    if(cResult){
                        res.status(200).json({
                            msg: 'Logged in successfully', token,result:data[0]
                        })
                    }else{
                        res.status(401).json({
                            err:'You entere a wrong password/email address or you account does not exist'
                        });
                    }

                });

            }
        
        });
    }
    fetchUsers(req,res){
        const strQry = 
        ` SELECT 
        userId ,firstName, lastName,phoneNumber, emailAdd, 
        userRole
        FROM Users;
        `;
        db.query(strQry,(err,data)=>{
            if(err) throw err;
            else res.status(200).json({results:data});
        })
    }
    fetchUser(req,res){
        const strQry = 
        `
        userID ,firstName, lastName,phoneNumber, emailAdd, 
        userRole
        where userID = ?
        FROM Users;
        `;
        db.query(strQry,[req.params.id],(err,data)=>{
            if(err) throw err;
            else res.status(200).json({result:data});
        })
    }
    async createUser(req, res){
        let detail = req.body;
        detail.userPass = await
        hash(detail.userPass,15);

        let user = {
            emailAdd: detail.emailAdd,
            userPass: detail.userPass
        }

        const strQry =
        `
        insert into Users
        SET ?;
        `;
        db.query(strQry,[detail], (err)=>{
            if(err) {
                res.status(401).json({err});
            }else{
                const jwToken = createToken(user);
                res.cookie('CorrectUser',jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg:'A new user was created'})
            }
        })
    }
    updateUser(req,res){
        let data = req.body;
        if(data.userPass !== null || data.userPass !== undefined) 
        data.userPass = hashSync(data.userPass,20);
        const strQry =
        `
        Update Users
        SET ?
        WHERE userID = ?;
        `;

        db.query(strQry,[data, req.params.id],
            (err) =>{
                if(err) throw err;
                request.status(200).json({msg: 'a record was updated successfully'});
            })

    }
    deleteUser(req,res){
        const strQry =
        `
        Delete from Users
        Where userID = ?;
        `;
        db.query(strQry,[req.params.id],(err) =>{
            if(err) throw err;
            request.status(200).json({msg: 'a record was deleted successfully'});
    })
  }
}
class Product{
    fetchProducts(req,res){
        const strQry = 
        `
        SELECT
        productId, prodName, prodNutrition, category, price, prodQuantity, imgUrl
        From products;
        `;

        db.query(strQry, (err,results) =>{
            if(err) throw err;
            res.status(200).json({results: results});

    });
    }
    fetchProduct(req, res){
    const strQry = 
    `
    SELECT
    productId, prodName, prodNutrition, category, price, prodQuantity, imgUrl
    From products;
    where id = ?;
    `
    db.query(strQry,[req.params.id], (err,results) =>{
        if(err) throw err;
        res.status(200).json({results: results});
    });
    }
    addProduct(req, res){
    
        const strQry = 
        `
        INSERT INTO products
        SET ?;
        `;
        db.query(strQry,[req.body],(err) =>{
            if(err){
                res.status(400).json({err:'Unable to insert a new product'});

            }else{
                res.status(200).json({msg: 'Product added successfully'});
            }
        });
    }
    updateProduct(req,res){
        const strQry =
        `
        Update products
        SET ?
        Where productId = ?
        `;
        db.query(strQry,[req.body, req.params.id], (err) =>{
        if(err){
            res.status(400).json({err:'Unable to update a product'});
        }else{
            res.status(200).json({msg: 'Product updated successfully'});
        }
    

    });
    }
    deleteProduct(req,res){
        const strQry = 
        `
        Delete from products
        Where productId = ?
        `;
        db.query(strQry,[req.body, req.params.id], (err) =>{
            if(err) res.status(400).json({err:'The product was not found.'});
            res.status(200).json({msg: 'Product deleted successfully'});
    })
    }
}
module.exports = {User,Product}
