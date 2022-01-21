const express = require('express');
const app = express();
const cowsay = require("cowsay");
const path = require("path");

// middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.write(cowsay.say({
        text : "welcome to my servmooooooo",
        e : "oO",
        T : "U "
    }));
    res.end();
});

app.get('/getData', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));

    let input = Number(req.query.integer);
    if (Number.isInteger(input) === true && input >=0 && req.query.integer !== ""){
        let result = 0;
        for(let i=0; i<input+1; i++){
        result += i;
    }   console.log(result);
        res.send('The result is : '+ result.toString());
    } else if (req.query.integer == "" && req.query != "integer"){
            console.log('Lack of Parameter');
            res.send('Lack of Parameter');
    } else if (req.query != "integer" && req.query.integer != null){
            console.log(req.query.integer);
            res.send("Wrong Parameter");
    }
});

app.listen((3001), () => {
    console.log("The server is running on port 3001.")
})