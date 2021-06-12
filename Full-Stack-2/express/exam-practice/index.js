const express = require("express");
const app = express();

// import router
const devops = require('./routes/devopsroute');
const admin = require('./routes/admin');

// This is a type of middleware to use

// app.use(express.static("public"));

app.use('/devops', devops);
app.use('/admin', admin);

app.get('/', (req, res) => {
    res.send("Helllo")
})




app.listen(3000, (req, res) => {
    console.log("Application started at 3000");
});