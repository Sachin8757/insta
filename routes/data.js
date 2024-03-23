const mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/instagram");

mongoose.connect("mongodb+srv://sachin:8757887103@shopdata.shpwbu2.mongodb.net/?retryWrites=true&w=majority&appName=shopdata");

const userschema = mongoose.Schema({
  username:String,
  password:String,
});

 module.exports = mongoose.model("users",userschema);