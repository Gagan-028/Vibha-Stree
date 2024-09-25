const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports = {
    isAlreadyLoggedIn:async (req,res,next)=>{
        try {
            if (req.cookies.token) {
                let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
                let user = await userModel
                    .findOne({ email: decoded.email })
                    .select("-password");
    
                if (user) {
                    loggedIn = true;  // Set loggedIn status on request
                    currentUser = user; // Optional: store user info
                    next();
                } else {
                    res.redirect("/login");
                    console.log("User not found");
                }
            } else {
                req.loggedIn = false;  // No token found
                next();  // Proceed to the next middleware or route handler
            }
        } catch (error) {
            console.error("Token verification failed:", error);
            res.redirect("/login");
        }
    },
};
