const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const adminModel = require('../models/admin-model');

module.exports = {
    isAlreadyLoggedIn:async (req,res,next)=>{
        if(req.cookies.token !== "") {
            let decoded = jwt.verify(req.cookies.token,process.env.JWT_KEY);
                let user = await userModel
                    .findOne({ email: decoded.email })
                    .select("-password");
                    currentUser = user;
                    next();
                }
                else{
                    res.redirect("/login");
                    console.log("Cookies not available");
                }
    },
    isAdmin:async (req,res,next)=>{
        if(req.cookies.token !== "") {
            let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
                let user = await adminModel
                    .findOne({ email: decoded.email })
                    .select("-password");
                    currentUser = user;
                    next();
            }
            else{
                res.redirect("/login");
                console.log("Cookies not available");
            }
    },
    isAuthenticated: async (req,res,next) => {
        const token = req.cookies.jwt; // Assuming the token is stored in cookies

        if (token) {
            jwt.verify(token, 'your_secret_key', (err, decodedToken) => {
                if (err) {
                    req.user = null;
                } else {
                    req.user = decodedToken; // Store user data from the token
                }
            });
        } else {
            req.user = null;
        }
        next();
    },
};