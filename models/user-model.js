const mongooose = require('mongoose');
const userSchema = mongooose.Schema({
    fullname : String,
    mobileNumber : String,
    email : String,
    password : String,
    gender : String,
    dob : String,
    cart : [{
        type : mongooose.Schema.Types.ObjectId,
        ref:"product",
    }],
    isAdmin : Boolean,
    orders : {
        type : Array,
        default:[]
    },
    contact : Number,
    profileImg : String

});

module.exports = mongooose.model("user",userSchema);