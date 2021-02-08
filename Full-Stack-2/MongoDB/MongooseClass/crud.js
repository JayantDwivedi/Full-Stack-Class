// Requiring mongoose 
const mongoose = require("mongoose");

//  connecting to Mongodb
mongoose
    .connect("mongodb://localhost:27017/mongoose", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    // promise
    .then(() => console.log("Connection Successfull...!!"))
    .catch(() => console.log("Error, Not Connected"));

// creating schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

// creating model
const db = new mongoose.model("new_collection", studentSchema);

const db1 = new db({
    name: "Kartik",
    age: 21,
});

const db2 = new db({
    name: "Yash",
    age: 24,
});

const db3 = new db({
    name: "Mukul",
    age: 19,
});


// Create records 
db.insertMany([db1, db2, db3]).then((doc) => console.log(doc)).catch((error) => console.log(error));



// For printing the Data from Mongo db 
// READ Operation 
db.find().then((doc) => console.log(doc)).catch((error) => console.log("error"));


// // Update record 
const doc = db.findByIdAndUpdate("6021071cfca1f524bcbcef54", {
        name: "Yash Sharma",
    }).then((doc) => console.log(doc))
    .catch((err) => console.log(err));;


// Find particular element 
db.find({
    name: "Kartik"
}).then((doc) => console.log(doc)).catch((error) => console.log("error"));



// delete document 
db.findByIdAndDelete("60210437326232457077da1d", {
    name: "Jayant"
}).then(() => console.log("record deleted")).catch(() => console.log(err));



console.log("Data Inserted Successfully");