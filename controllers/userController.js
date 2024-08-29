const { generateToken } = require('../utils/generateTokens');
const bcrypt = require('bcrypt');
const userModel =  require('../models/user-model');
const productModel = require('../models/product-model');
const jwt = require('jsonwebtoken');
const moment = require('moment');



module.exports ={
    indexPage : async(req,res)=>{
        try {
            let category = req.query.category || "all";
            let products;
    
            if (category === "all") {
                products = await productModel.find();
            } else {
                products = await productModel.find({ category: category });
            }
            res.render("index", { products, category,loggedIn:"false" });
        } catch (error) {
            console.error(error);
            res.status(500).send("Server Error");
        }
    },
    userProfile : async (req,res) => {
        const formattedDOB = moment(currentUser.dob).format('DD-MM-YYYY');
        console.log(currentUser);
        
        res.render('profile', { currentUser, formattedDOB });
    },
    getProducts : async(req,res)=>{
        let products = await productModel.find();
        res.render("shop",{products,category: 'All Products'});
    },
    viewCart : async(req,res)=>{
        
        let user = await userModel.findOne({email:currentUser.email}).populate("cart");
        
        res.render("cart",{user});
    },
    viewCategory : async (req, res) => {
        try {
            const category = req.params.category;
            const products = await productModel.find({ category: category });
            res.render('shop', { products: products, category: category });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },
    getProfileEdit:async (req,res) => {
        res.render('profileEdit');
    },
    postProfileEdit: async (req, res) => {
        try {
            let updatedUser = await userModel.findOneAndUpdate(
                { email: req.body.email }, 
                {
                    fullname: req.body.fullname,
                    mobileNumber: req.body.mobileNumber,
                    gender: req.body.selectedGender,
                    dob: req.body.dob
                },
                { new: true } 
            );
            console.log("Updated User", updatedUser);
            if (updatedUser) {
                res.redirect('/profile');
            } else {
                res.status(404).send("User not found");
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while updating the profile");
        }
    },
    addToCart:async(req,res)=>{
        let user = await userModel.findOne({email:currentUser.email});
        user.cart.push(req.params.productId);
        await user.save();
        res.redirect("/products");    
    },
    searchProduct : async (req, res) => {
        let {search} = req.body;
        let searchedProduct = await productModel.find({name:search});
        console.log(searchedProduct);
        res.render("productDisplay");
    },
    newCollection :async (req,res) => {
        let products = await productModel.find().sort({ _id: -1 });
        res.render("shop", { products });
    }
}
