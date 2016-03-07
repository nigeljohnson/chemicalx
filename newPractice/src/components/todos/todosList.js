import React from 'react';

import TodosHead from './todosHead'
import TodosBody from './todosBody'

export default class TodosList extends React.Component {
	render() {

		console.log(this.props);
		console.log(this.props.todos);
		console.log(this.props.todos.length);

		return(

			<div>

				<table>

					<TodosHead/>
					<TodosBody/>

				</table>

			</div>

			);
	}
}