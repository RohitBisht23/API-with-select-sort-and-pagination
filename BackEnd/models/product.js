const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Product name must be provide"],
    },

    price : {
        type : Number,
        required :[true, "Price must be provide"] 
    },

    featured : {
        type : Boolean,
        default : false,
    },

    rating : {
        type : Number,
        default : 4.9,
    },

    createdAt : {
        type : Date,
        default : Date.now(),
    },

    company : {
        type : String,
        enum : {
            values : ["apple", "samsung", "dell", "mi", "nokia", "redmi"],
            message : `{VALUE} is not supported`,
        }
    },
})


module.exports = mongoose.model('Products', productSchema);