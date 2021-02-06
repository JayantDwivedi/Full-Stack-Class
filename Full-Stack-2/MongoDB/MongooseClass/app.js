// Requiring mongoose 
const mongoose = require("mongoose");

// connecting to database
// mongoose.connect("mongodb://127.0.0.1:27017/mongoose");

//  connecting require some more 
mongoose
    .connect("mongodb://localhost:27017/mongoose", {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
    })
    .then(() => console.log("Connection Successfull...!!"))
    .catch(() => console.log("Error, Not Connected"));

// const studentSchema = new mongoose.Schema();

// const studentSchema = new mongoose.Schema({
//     name: String
// });


// creating schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

// creating model
const db = new mongoose.model("new_collection", studentSchema);

// inserting data using model
const db1 = new db({
    name: "Jayant",
    age: 23,
});

// saving data into collection
db1.save().then(() => console.log("data saved")).catch(() => console.log("Some error occur"));

console.log("All set");