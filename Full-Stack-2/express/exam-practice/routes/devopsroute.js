const express = require("express");
const router = express.Router();

const course = [{
        name: "HTML",
        fees: "32 Lakhs"
    },
    {
        name: "CSS",
        fees: "23 Lakhs"
    },
    {
        name: "JS",
        fees: "14 Lakhs"
    }
]


router.get('/', (req, res) => {
    res.send(course);
})

module.exports = router;