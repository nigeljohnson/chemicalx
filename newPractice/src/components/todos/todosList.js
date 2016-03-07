import React from 'react';
import _ from 'lodash';
import TodosHead from './todosHead';
import TodosListItem from './todosListItem';
import TodosBody from './todosBody';

export default class TodosList extends React.Component {

	renderItems() {
		return _.map(this.props.todos, (todo, index) =>
			<TodosListItem key={index} {...todo} />);
	}


	render() {

		console.log(this.props);
		console.log(this.props.todos);
		console.log(this.props.todos.length);

		return(

			<div>

				<table>

					<TodosHead/>
					<tbody>
					<tr> {this.renderItems()} </tr>
					<TodosBody/>
					</tbody>

				</table>

			</div>

			);
	}
}