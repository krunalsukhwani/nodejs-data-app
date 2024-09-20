//how to import the library
const express = require('express');

//create the server
const app = express();

//localhost:8080
app.get('/', (req, res, next) => {
    return res.send('<h1>Welcome to My Application</h1>'+
    '<form method="GET" action="/chris"><button type="submit">Chris</button></form>' +
    '<form method="GET" action="/omair"><button type="submit">Omair</button></form>');
});

//Middleware can manage get request: path
app.get('/chris', (req, res, next) => {
    return res.send('<h1>Chris</h1>');
});

app.get('/omair', (req, res, next) => {
    return res.send('<h1>Omair Khan</h1>');
});

//on which port you want to start the server
app.listen(8080);