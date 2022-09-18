const mongoose = require("mongoose");

const connectToDB = async() =>
 mongoose.connect("mongodb+srv://Saptarshi_Mondal:Saries9434@cluster0.9pyyt.mongodb.net/TrainingDB?retryWrites=true&w=majority"
, {
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true
 });

 module.exports = connectToDB;
