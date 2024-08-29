const { generateToken } = require('../utils/generateTokens');
const bcrypt = require('bcrypt');
const userModel =  require('../models/user-model');
const productModel = require('../models/product-model');
const jwt = require('jsonwebtoken');



module.exports ={
    adminIndexPage: async(req,res)=>{
        res.redirect("/admin/createProducts")
    },
    createProducts : async(req,res)=>{
        try{res.render("createProducts")
    
        }
        catch(err){
            res.status(502).send("Some Error has occured")
        }
    }

}

