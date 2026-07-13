const { default: mongoose } = require("mongoose");
const mangooses = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },

        price: {
            type: Number,
            require: true
        },

        category: {
            type: String,
            require: true
        },

        image: {
            type: String,
            require: true
        },

        description:{
            type: String,
            require: true
        },

        stock: {
            type: Number,
            require: true
        }
    },

    {
        timestamps: true
    }
    
);


module.exports = mongoose.model("Product","productSchema");