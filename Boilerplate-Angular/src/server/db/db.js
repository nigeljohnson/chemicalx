//ES6 on front-end
//ES5 on backend

var mongoose = require('mongoose');

//Mongoose auto creates todos data base
mongoose.connect('mongodb://localhost/todos');

//Create Schema, data model
var Todo = mongoose.model('Todo', {
	// Arry Property & Shape of Value
	task: String,
	isCompleted: Boolean,
	isEditing: Boolean
});

//Export module (schema) can have multiple
module.exports.Todo = Todo;