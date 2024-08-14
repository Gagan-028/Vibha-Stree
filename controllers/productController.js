const { generateToken } = require('../utils/generateTokens');
const bcrypt = require('bcrypt');
const userModel =  require('../models/user-model');
const productModel = require('../models/product-model');
const jwt = require('jsonwebtoken');



module.exports ={
    createProduct : async(req,res)=>{
        try{
            let {name,price,discount,bgColor,panelColor,textColor} = req.body;
            name = name.toLowerCase();
            console.log(name);
            
            let product = await productModel.create({
            image:req.file.buffer,
            name,
            price,
            discount,
            bgColor,
            panelColor,
            textColor
        });
        res.render("createProducts")
        }
        catch (err){
            res.send(err.message);
        }
    },
    addToCart : async(req,res)=>{
        let user = await userModel.findOne({email:currentUser.email});
        user.cart.push(req.params.productId);
        await user.save();
        res.redirect("/products");
    },
}



