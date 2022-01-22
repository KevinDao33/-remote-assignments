const express = require('express');
const app = express();
const cowsay = require("cowsay");
const path = require("path");

// middleware for /getData
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('hi, welcome to the server!');
    res.write(cowsay.say({
        text : "welcome to my servmooooooo",
        e : "oO",
        T : "U "
    }));
    res.end();
});

app.get('/getData', (req, res) => {
     res.sendFile(path.join(__dirname, "./public/sum.html"));

    let input = req.query.integer;
    let isLackOfParam = !input || input === "";
    let inputNumber = Number(input);
    let propertyName = Object.getOwnPropertyNames(req.query)[0];

    if (Number.isInteger(inputNumber) && !isLackOfParam){
        // the input is an integer
        let result = 0;
        for(let i=0; i<inputNumber+1; i++){
            result += i;
        }   
        console.log(result);
        res.send('The result is : ' + result.toString());
    } else if (isLackOfParam && propertyName === "integer"){
        // there's no input
        console.log('Lack of Parameter');
        res.send('Lack of Parameter');
     } else if(!Number.isInteger(inputNumber) && !isLackOfParam){
        // there's input, but it's not a integer > 0
        console.log(req.query.integer);
        res.send("Wrong Parameter");
    } else {
        res.send("please ge to http://localhost:3000/sum.html");
    }
});

app.listen((3000), () => {
    console.log("The server is running on port 3000.")
})