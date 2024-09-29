const { generateToken } = require('../utils/generateTokens');
const bcrypt = require('bcryptjs');
const userModel =  require('../models/user-model');
const productModel = require('../models/product-model');
const jwt = require('jsonwebtoken');




module.exports ={
    createProduct : async(req,res)=>{
        try{
            let {name,price,discount,category} = req.body;
            let product = await productModel.create({
            image:req.file.buffer,
            name : name,
            price : price,
            category : category,
            discount : discount
        });
        res.json({ success: true });
        }
        catch (err){
            res.send(err.message);
        }
    },
    


}
