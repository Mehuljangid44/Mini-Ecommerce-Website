const { default: mongoose, mongo } = require("mongoose");
const orderSchema = new mongoose.Schema({

    customerName:{
        type: String,
        require: true
    },

    phone: {
        type: String,
        require: true
    },

    address: {
        type: String,
        require: true
    },

    products:{
        name: String,
        quantity: Number,
        price: Number
    },

    totalAmount: {
        type: Number,
        require: true
    }

},

{
    timestamps: true
}

);

module.exports = mongoose.model("Order","orderSchema");

