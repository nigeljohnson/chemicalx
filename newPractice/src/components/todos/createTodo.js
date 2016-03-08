import React from 'react';

export default class CreateTodo extends React.Component {

	render() {
		return (

			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="This is placeholder" ref="createInput" />
				<button>Submit</button>
			</form>

			);
	}

	handleCreate(event) {
		event.preventDefault();
		console.log(this.refs.createInput.value);
		console.log(this.props.createTask);
		this.props.createTask(this.refs.createInput.value);
		this.refs.createInput.value = "";
	}
}