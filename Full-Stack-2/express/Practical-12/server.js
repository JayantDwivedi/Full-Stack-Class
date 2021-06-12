const express = require("express");
const app = express();

const student = [{
        id: 1,
        name: "Jayant"
    },
    {
        id: 2,
        name: "Kushagra"
    },
    {
        id: 3,
        name: "Mukul"
    }
];

app.use(express.json);

app.get("/", (req, res) => {
    res.send(student);
})

app.listen(3000, () => {
    console.log("App listen on port 3000");
})