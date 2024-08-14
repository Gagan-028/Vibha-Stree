const { generateToken } = require('../utils/generateTokens');
const bcrypt = require('bcrypt');
const userModel =  require('../models/user-model');
const productModel = require('../models/product-model');
const jwt = require('jsonwebtoken');



module.exports ={
    createProducts : async(req,res)=>{
        res.render("createProducts")
    }


}

