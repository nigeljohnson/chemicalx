import React from 'react';
import TodosList from './todos/todosList';


// Mocking up Data, instead of server. ARRY of Object literals, with propeties set, as string and boolean.
const todos = [
{
	task: 'Angular',
	isCompleted: false
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


			<TodosList todos={this.state.todos} />

			</div>

			);
	}
}