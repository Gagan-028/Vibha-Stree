const { generateToken } = require('../utils/generateTokens');
const bcrypt = require('bcryptjs');
const userModel =  require('../models/userModel');
const productModel = require('../models/product-model');
const jwt = require('jsonwebtoken');




module.exports ={
    createProduct: async (req, res) => {
        try {
            let { name, price, discount, category } = req.body;
            let tagsArray = req.body.keywords.split(',').map(tag => tag.trim());
            let product = await productModel.create({
                image: req.file.buffer,
                name: name,
                price: price,
                category: category,
                discount: discount,
                keywords: tagsArray 
            });
    
            res.redirect("/admin/createProducts");
            console.log(product);
            
        } catch (err) {
            res.send(err.message);
        }
    }
    


}
