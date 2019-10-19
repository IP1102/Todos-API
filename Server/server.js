var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./DB/mongoose');
var {Todo} = require('./Models/todo');
var {User} = require('./Models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.ststus(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Server is up!');
});