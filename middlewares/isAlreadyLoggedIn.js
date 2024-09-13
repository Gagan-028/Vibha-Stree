const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports = {
    isAlreadyLoggedIn:async (req,res,next)=>{
            if(req.cookies.token !== "") {
                let decoded = jwt.verify(req.cookies.token,process.env.JWT_KEY);
                let user = await userModel
                    .findOne({email : decoded.email})
                    .select("-password");
                currentUser = user;
                next();
            }
            else{
                res.redirect("/login");
                console.log("Cookies not available");
            }
        },
        
    

};
