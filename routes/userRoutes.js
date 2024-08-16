const express = require('express');
const router = express.Router();
const ensure = require("../middlewares/isAlreadyLoggedIn")
const flash = require('connect-flash'); 
const userController = require('../controllers/userController');
isAlreadyLoggedIn = require('../middlewares/isAlreadyLoggedIn');
const productModel = require('../models/product-model');

router.get("/",async(req,res)=>{
    let products = await productModel.find();
    res.render("index",{products});
});

router.get("/products" ,userController.getProducts);
router.get("/cart",userController.viewCart);
router.post('/product-display', async (req, res) => {
    let {search} = req.body;
    let searchedProduct = await productModel.find({name:search});
    console.log(searchedProduct);
    res.render("productDisplay");
});
module.exports = router;