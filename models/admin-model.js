const mongooose = require('mongoose');
const { type } = require('os');


const adminSchema = mongooose.Schema({
    fullname : String,
    email : String,
    password : String,
    gender : String,
    dob : String,
    address : [{
        type : mongooose.Schema.Types.ObjectId,
        ref:"userAddress",
    }],
    cart : {
        type : Array,
        default:[]
    },
    products : {
        type : Array,
        default:[]
    },
    contact : Number,
    profileImg : String,
    gstNumber : String

});

module.exports = mongooose.model("admin",adminSchema);