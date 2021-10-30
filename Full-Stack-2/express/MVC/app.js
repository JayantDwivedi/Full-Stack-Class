// Imporing Model in Express App 
require("./models/db");

const express = require("express");

// App port 
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello Jayant!</h1>");
})

app.listen(3000,()=>{
    console.log("App started on http://localhost:3000");
})