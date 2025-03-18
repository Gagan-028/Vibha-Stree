const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');
const userSchema = mongooose.Schema({
    fullname : String,
    mobileNumber : String,
    email : String,
    password : String,
    gender : String,
    dob : String,
    address : [{
        type : mongooose.Schema.Types.ObjectId,
        ref:"userAddress",
    }],
    cart: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 }
        }
    ],
    isAdmin : { type: Boolean, default: false },
    orders : {
        type : Array,
        default:[]
    },
    contact : Number,
    profileImg : String

});

module.exports = mongooose.model("user",userSchema);