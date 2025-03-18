const { generateToken } = require('../utils/generateTokens');
const bcrypt = require('bcryptjs');
const userModel =  require('../models/userModel');
const productModel = require('../models/product-model');
const jwt = require('jsonwebtoken');
const adminModel = require('../models/admin-model');
const moment = require('moment');


module.exports ={
    adminIndexPage: async(req,res)=>{
        res.redirect("/admin/createProducts");
    },
    createProducts : async(req,res)=>{
        try{
            res.render("createProducts");
        }
        catch(err){
            res.status(502).send("Some Error has occured")
        }
    },
    createCoupons : async (req,res) => {
        try {
            res.render("createCoupon");
        } catch (error) {
            res.status(502).send("Some Error has occured");
        }
    },
    adminProfile : async (req,res) => {
        const formattedDOB = moment(currentUser.dob, "DD-MM-YYYY").format('DD-MM-YYYY');
        const user = await adminModel.findOne({email: currentUser.email}).populate("address"); 
        res.render('profile', { currentUser, formattedDOB, user });
    },

}

