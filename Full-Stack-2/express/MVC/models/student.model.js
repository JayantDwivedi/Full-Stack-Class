const mongoose = require("mongoose");
var studentSchema = new mongoose.Schema({
    fullName:{
        type:String,
    },
    email:{
        type:String,
    },
    mobile:{
        type:String,
    }
    city:{
        type:String,
    },
    registerOn:{
        type:Date,
        default:Data.now,
    }
});

mongoose.model("Student",studentSchema);