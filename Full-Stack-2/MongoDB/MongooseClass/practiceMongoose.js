const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
}).then(() => console.log("connect")).catch(() => console.log("Not connect"));

const schema = new mongoose.Schema({
    name: String,
    age: Number,
});

const model = new mongoose.model("newCollection", schema);

const data = new model({
    name: "Jayant",
    age: 12,
});

data.save().then(() => console.log("data saved")).catch(() => console.log("eror"));