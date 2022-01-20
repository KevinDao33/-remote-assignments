const express = require('express');
const app = express();
const cowsay = require("cowsay");

// app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.write(cowsay.say({
        text : "welcome to my servmooooooo",
        e : "oO",
        T : "U "
    }));
    res.end();
});

app.get('/getData', (req, res) => {
    res.render('index.html');
});

app.listen((3000), () => {
    console.log("The server is running on port 3000.")
})