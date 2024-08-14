const mongooose = require('mongoose');
const { type } = require('os');


const productSchema = mongooose.Schema({
    image : Buffer,
    name : String,
    price : Number,
    discount : {
        type : Number,
        default : 0,
    },
    bgColor : String,
    panelColor : String,
    textColor : String

});

module.exports = mongooose.model("product",productSchema);