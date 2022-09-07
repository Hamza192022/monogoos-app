const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DeliveroShop").then(()=>{
    console.log("DATABASE CONNECTED");
}).catch((e)=>{
    console.log("ERROR WHILE CONNECTING DATABASE" , e);
})