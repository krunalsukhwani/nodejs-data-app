//how to import the library
const express = require('express');
const bodyParser = require('body-parser');

//create the server
const app = express();

//use body parser to parse data coming from UI
app.use(bodyParser.urlencoded({extended: false}));

//localhost:8080 - GET - Display form
app.get('/', (req, res, next) => {
    return res.send('<h1>Welcome to My Application</h1>'+
    '<form method="POST" action="/user"><input type="text" name="username"><button type="submit">Create USER</button></form>');
});

//POST request with path: /user - display username
app.post('/user', (req, res, next) => {
    return res.send('<h1> Username: ' + req.body.username + '</h1>')
});

//on which port you want to start the server
app.listen(8080);