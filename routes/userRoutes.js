const express = require('express');
const router = express.Router();
const ensure = require("../middlewares/isAlreadyLoggedIn")
const flash = require('connect-flash'); 
const userController = require('../controllers/userController');
isAlreadyLoggedIn = require('../middlewares/isAlreadyLoggedIn');
const productModel = require('../models/product-model');
const userModel = require('../models/user-model');

router.get("/",userController.indexPage);
router.get("/profile",ensure.isAlreadyLoggedIn,userController.userProfile);
router.get("/products" ,userController.getProducts);
router.get("/cart",ensure.isAlreadyLoggedIn,userController.viewCart);
router.post('/product-display', userController.searchProduct);
router.get('/products/:category',  userController.viewCategory);
router.get('/profile/edit',ensure.isAlreadyLoggedIn,userController.getProfileEdit);
router.post('/profile/edit',ensure.isAlreadyLoggedIn,userController.postProfileEdit);
router.get("/addToCart/:productId", ensure.isAlreadyLoggedIn,userController.addToCart);
router.get("/newCollection",userController.newCollection);

module.exports = router;