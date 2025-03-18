const mongooose = require('mongoose');
const { type } = require('os');


const productSchema = mongooose.Schema({
    image : Buffer,
    name : String,
    price : Number,
    category : String,
    discount : {
        type : Number,
        default : 0,
    },
    keywords : [{type:String}]
}, 
{ timestamps: true });

module.exports = mongooose.model("Product",productSchema);