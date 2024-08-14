const { generateToken } = require('../utils/generateTokens');
const bcrypt = require('bcrypt');
const userModel =  require('../models/user-model');
const productModel = require('../models/product-model');
const jwt = require('jsonwebtoken');



module.exports ={
    logoutUser : async (req,res)=>{
        res.cookie("token","");
        res.redirect("/");
    },
    getShop : async(req,res)=>{
        let products = await productModel.find();
        
        res.render("shop",{products});
    },
    viewCart : async(req,res)=>{
        
        let user = await userModel.findOne({email:currentUser.email}).populate("cart");
        
        res.render("cart",{user});
    }
}
