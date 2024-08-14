const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports = {
    isAlreadyLoggedIn:async (req,res,next)=>{
            if(req.cookies.token ==="") {
                res.redirect("/login");
                console.log("err");
            }
            else{
                let decoded = jwt.verify(req.cookies.token,process.env.JWT_KEY);
                
                let user = await userModel
                    .findOne({email : decoded.email})
                    .select("-password");
                currentUser = user;
                next();
            }
        }

};
