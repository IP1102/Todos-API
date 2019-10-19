var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./DB/mongoose');
var {Todo} = require('./Models/todo');
var {User} = require('./Models/user');

var app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos/:id', (req,res) => { //:id creates a variable id in the URL for Dynamic id acceptance
    
    var id = req.params.id;
    if(!ObjectID.isValid(id)){ //Check Mongoose Queries
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
});

app.listen(port, () => {
    console.log(`Server is up at ${port}`);
});