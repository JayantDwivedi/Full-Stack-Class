// require mongoose 
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/studentDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},
(err)=>{
    if (!err) {
        console.log("Mongo DB connectoin Succesful");
    }
    else {
        console.log("Error in connection " + err);
    }
});