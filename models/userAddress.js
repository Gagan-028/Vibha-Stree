const mongooose = require('mongoose');
const { type } = require('os');


const addressSchema = new mongooose.Schema({
    fullname: String,
    mobileNumber: String,
    pincode: String,
    state: String,
    address: String,
    district: String,
    addressType: String
},
{ timestamps: true });

module.exports = mongooose.model("userAddress",addressSchema);