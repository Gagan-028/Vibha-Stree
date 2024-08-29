const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const cookie = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose-connect')
require('dotenv').config();
const flash = require('connect-flash'); 
const expressSession = require('express-session'); 
let alert = require('alert'); 


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(expressSession({
    saveUninitialized: false,
    resave: false,
    secret: process.env.EXPRESS_SESSION_SECRET
}));
app.use(flash());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");


// ------------------> DATABASE <------------------------

const userModel = require('./models/user-model');
const productModel = require('./models/product-model');
const adminModel = require('./models/admin-model');


//-------------------> ROUTES <-------------------------
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const { log } = require('console');
const { hash } = require('crypto');
const { loadavg } = require('os');
const { generateToken } = require('./utils/generateTokens');


app.use("/admin",adminRoutes);
app.use("/",userRoutes);
app.use("/product",productRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
});


app.get("/login", async (req,res) => {
    res.render("signup");
})
app.post("/login",async (req,res)=>{
    
    let {email,password} = req.body;
    let user = await userModel.findOne({email})
    let products = await productModel.find();
    if(!user){   
        let user = await adminModel.findOne({email})
        if(!user){   
            
            res.status(404).send("Account does not exist! Please signup to continue.");
        
        }
        else {
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    let token = jwt.sign({email:email, userId:user._id},process.env.JWT_KEY);
                    res.cookie("token",token);
                }
                res.status(202).redirect("/admin/")
            })
        } 
    }
    else {
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                let token = jwt.sign({email:email, userId:user._id},process.env.JWT_KEY);
                res.cookie("token",token);
            }
            
            res.status(202).redirect("/");
        })
    }
        
})

app.post("/signup",async (req,res) => {
    try{
        let{fullname,email,password} = req.body;
        let user = await userModel.findOne({email});
        let products = await productModel.findOne({email});
        if(user) return res.status(404).send("Account already exists! Please login to continue.");
        else{
            
            bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt, async (err,hash)=>{
                let users = await userModel.create({
                    fullname,
                    email,
                    password:hash
                });
                let token = generateToken(users);
                res.cookie("token",token);

                res.status(201).redirect("/shop");
            })
        })
        }
    }
    catch(err){
        res.send(err.message);
    }
    
})

app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.redirect("/");
})
