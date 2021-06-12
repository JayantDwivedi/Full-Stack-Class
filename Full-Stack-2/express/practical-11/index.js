const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server Connected " + port);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/sign.html');
});

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.post('/sign.html', (req, res) => {
    console.log(req.body);
    if (req.body.user == 'jayant' && req.body.pwd == '1234') {
        res.sendFile(__dirname + '/valid.html');
    } else {
        res.sendFile(__dirname + '/invalid.html');
    }
});
app.use(function (req, res) {
    res.write("404 Page Not Found");
    res.end();
})