const express = require('express');
const router = express.Router();

const student = [{
        name: "Jayant",
        subject: "PCM"
    },
    {
        name: "Kushagra",
        subject: "PCB"
    },
    {
        name: "Mukul",
        subject: "commerce"
    }
]

router.get('/', (req, res) => {
    res.send(student);
})



module.exports = router;