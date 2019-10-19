const mongoose = require('mongoose');

/* var TodoSchema = new mongoose.Schema({
    text: {
        type: String
    },
    completed: {
        type:Boolean
    },
    completedAt: {
        type: Number
    }
}); */


var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type:Boolean
    },
    completedAt: {
        type: Number
    }
});


module.exports = {
    Todo:Todo
}




/* var newTodo = new Todo({
    text: 'Cook Dinner',
    completed: false,
    completedAt: 0
});

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (err) => {
    console.log('Coannot save!',err);
});
 */

/* var otherTodo = new Todo({
    text: 'Cook Lunch',
    completed: true,
    completedAt: new Date().getHours()
});

otherTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (err) => {
    console.log('Cannot save!',err);
});
 */

/* 
var user = new User({email: 'indranil1102@gmail.com        '});

user.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (err) => {
    console.log('Cannot save!',err);
});
 */