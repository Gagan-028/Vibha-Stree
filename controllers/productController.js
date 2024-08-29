const { generateToken } = require('../utils/generateTokens');
const bcrypt = require('bcrypt');
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
    addToCart : async(req,res)=>{
        console.log("hiiiiiiiiiii");
        
        let user = await userModel.findOne({email:currentUser.email});
        user.cart.push(req.params.productId);
        await user.save();
        res.redirect("/products");

        
    //     try {
    //         const { id } = req.params;
    //         const product = await productModel.findById(id);
    
    //         if (!product) {
    //             return res.status(404).json({ success: false, message: 'Product not found' });
    //         }
    
    //         // Find the current user
    //         const currentUser = req.user; // Assuming user information is attached to req.user
    
    //         if (!currentUser) {
    //             return res.status(401).json({ success: false, message: 'User not authenticated' });
    //         }
    
    //         // Find the user and update their cart
    //         let user = await userModel.findOne({ email: currentUser.email });
    
    //         if (!user) {
    //             return res.status(404).json({ success: false, message: 'User not found' });
    //         }
    
    //         // Check if the product is already in the cart
    //         if (!user.cart.includes(id)) {
    //             user.cart.push(id);
    //             await user.save();
    //         }
    
    //         res.json({ success: true, message: 'Product added to cart' });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ success: false, message: 'Server Error' });
    //     }
    // },
    }


}
