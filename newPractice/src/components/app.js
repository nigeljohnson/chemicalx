import React from 'react';
import TodosList from './todos/todosList';

import CreateTodo from './todos/createTodo'

// Mocking up Data, instead of server. ARRY of Object literals, with propeties set, as string and boolean.
const todos = [
{
	task: 'Angular',
	isCompleted: false
},

{
	task: 'React',
	isCompleted: true
},

{
	task: 'React',
	isCompleted: true
}

]

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			todos // (es6)
		  //todos: todos; (es5)
		};

	}

	render() {
		return(

			<div> <h1> From app.js </h1>

			<CreateTodo
				createTask={this.createTask.bind(this)}
			/>
			<TodosList
				todos={this.state.todos}
				toggleTask ={this.toggleTask.bind(this)}
				//Pass into todos here
				saveTask={this.saveTask.bind(this)}
			/>
			</div>

			);
	}

	createTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		});

		//Refresh State after createTask(task)
		this.setState({ todos: this.state.todos })
	}

	saveTask(oldTask, newTask) {
	//old Task to Match arry item, newTask to replace arry item {
		//_.find find in arry based on condition, condition todo item where task selected === oldtask
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldtask);
		foundTodo.task = newTask;
		this.setState({ todos: this.state.todos });
	}

	toggleTask(task) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === task );
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos });
	}
}