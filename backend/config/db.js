const mongoose = require("mongoose");
const connectDB = async() => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/miniecommerce");
        console.log("MongoDB Connected")
    }catch (error){
        console.log("MongoDB Not Connected");
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;